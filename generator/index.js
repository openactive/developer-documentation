const DATA_MODEL_DOCS_DIR = "../docs/data-model/types/";
const SUMMARY_FILE = "../docs/SUMMARY.md";
const DATA_MODEL_DOCS_URL_PREFIX = "https://developer.openactive.io/data-model/types/";

const { getModels, getMetaData } = require('@openactive/data-models');
var fs = require('fs');
var Remarkable = require('remarkable');
var request = require('sync-request');
var md = new Remarkable({
  linkify: true
});

var EXTENSIONS = {
  "beta": {
    "url": "https://www.openactive.io/ns-beta/beta.jsonld",
    "heading": "Beta Extension properties",
    "description": "These properties are defined in the [OpenActive Beta Extension](https://openactive.io/ns-beta). The OpenActive Beta Extension is defined as a convenience to help document properties that are in active testing and review by the community. Publishers should not assume that properties in the beta namespace will either be added to the core specification or be included in the namespace over the long term."
  }
};

generateTypeDocumentation(DATA_MODEL_DOCS_DIR, EXTENSIONS);

function generateTypeDocumentation(dataModelDirectory, extensions) {
  // Returns the latest version of the models map
  const models = getModels();
  const namespaces = getMetaData().namespaces;

  // Add all extensions and namespaces first, in case they reference each other
  Object.keys(extensions).forEach(function(prefix) {
    var extension = getExtension(extensions[prefix].url);
    if (!extension) throw "Error loading extension: " + prefix;

    extensions[prefix].graph = extension["@graph"];
    extension["@context"].forEach(function(context) {
      if (typeof context === 'object') {
        Object.assign(namespaces, context);
      }
    });
  });

  Object.keys(extensions).forEach(function(prefix) {
      var extension = extensions[prefix];
      augmentWithExtension(extension.graph, models, extension.url, prefix, namespaces);
  });

  var contents = [];

  Object.keys(models).forEach(function(typeName) {
      var model = models[typeName];
      if (typeName != "undefined" //ignores "model_list.json" (which appears to be ignored everywhere else)
        && model.subClassOf != "#OpenBookingError" // Exclude all OpenBookingError subclasses
        ) {
        
        var pageName = model.type.toLowerCase() + ".md";
        var pageContent = createModelMarkdownPage(model, models, extensions);

        console.log("NAME: " + pageName);
        console.log(pageContent);

        contents.push(`  * [${model.type}](data-model/types/${pageName})`);
        
        fs.writeFile(DATA_MODEL_DOCS_DIR + pageName, pageContent, function(err) {
            if(err) {
                return console.log(err);
            }
            
            console.log(`FILE SAVED: data-model/types/${pageName}`);
        }); 
      }
  });


  // Write the SUMMARY.md file to allow GitBook to include the newly added files

  console.log("Contents for " + SUMMARY_FILE);
  console.log(`...\n\n${contents.sort().join('\n')}\n...\n\n`);

  var summary = fs.readFileSync(SUMMARY_FILE, "utf8");
  var summary = summary.replace(/data-model\/types\/README.md\)[^]*?\n\n/g, "data-model/types/README.md)\n" + contents.sort().join('\n') + "\n\n");

  console.log("NAME: " + SUMMARY_FILE);
  console.log(summary);

  fs.writeFile(SUMMARY_FILE, summary, function(err) {
    if(err) {
        return console.log(err);
    }
    
    console.log("FILE SAVED: " + SUMMARY_FILE);
  }); 
}

function augmentWithExtension(extModelGraph, models, extensionUrl, extensionPrefix, namespaces) {
  extModelGraph.forEach(function(node) {
    if (node.type === 'Property') {
      var field = {
        "fieldName": node.id,
        "alternativeTypes": node.rangeIncludes.map(type => expandPrefix(type, node["@container"] == "@list", namespaces)),
        "description": [
          (node.discussionUrl ? renderGitHubIssueLink(node.discussionUrl) + '\n\n' : '') + node.comment
        ],
        "example": node.example,
        "extensionPrefix": extensionPrefix
      };
      node.domainIncludes.forEach(function(prop) {
        var model = models[getPropNameFromFQP(prop)];
        if (model) {
          model.extensionFields = model.extensionFields || [];
          model.fields = model.fields || {};
          model.extensionFields.push(field.fieldName);
          model.fields[field.fieldName] = field;
        }
      });
    } else if (node.type === 'Class') {
      //Ignore Classes and other extension types for now
    }
  });
}

function expandPrefix(prop, isArray, namespaces) {
  if (prop.lastIndexOf(":") > -1) {
    var propNs = prop.substring(0, prop.indexOf(":"));
    var propName = prop.substring(prop.indexOf(":") + 1);
    if (namespaces[propNs]) {
      if (propNs === "oa") {
        return (isArray ? "ArrayOf#" : "#") + propName;
      } else {
        return (isArray ? "ArrayOf#" : "") + namespaces[propNs] + propName;
      }
    } else {
      throw "Namespace not found for '" + prop + "'";
    }
  } else return prop;
}

function renderGitHubIssueLink(url) {
  var splitUrl = url.split("/");
  var issueNumber = splitUrl[splitUrl.length - 1];
  return "[Proposal #" + issueNumber + "](" + url + ")";
}

function getExtension(extensionUrl) {
  var response = request('GET', extensionUrl, { accept: 'application/ld+json' });
  if (response && response.statusCode == 200) {
    var body = JSON.parse(response.body);
    return body["@graph"] && body["@context"] ? body : undefined;
  } else {
    return undefined;
  }
}

function getParentModel(model, models) {
  if (model.subClassOf && model.subClassOf.indexOf("#") == 0) {
    return models[model.subClassOf.substring(1)];
  } else {
    return false;
  }
}

function getPropertyWithInheritance(prop, model, models) {
  if (model[prop]) return model[prop];

  var parentModel = getParentModel(model, models);
  if (parentModel) {
    return getPropertyWithInheritance(prop, parentModel, models);
  }

  return false;
}

function getMergedPropertyWithInheritance(prop, model, models) {
  var thisProp = model[prop] || [];
  var parentModel = getParentModel(model, models);
  if (parentModel) {
    return thisProp.concat(getMergedPropertyWithInheritance(prop, parentModel, models));
  } else {
    return thisProp;
  }
}

function augmentWithParentFields(augFields, model, models, notInSpec) {
  if (model.fields) Object.keys(model.fields).forEach(function(field) { 
    if (!augFields[field] && !notInSpec.includes(field)) {
      augFields[field] = model.fields[field];
    }
  });

  if (model.hasId && !augFields['id']) {
    augFields['id'] = {
        'fieldName': 'id',
        'requiredType': model['idFormat'] || 'http://schema.org/url',
        'description': ['A unique url based identifier for the record'],
        'example': ''
    };
    if (model.hasId && model.sampleId) {
      augFields['id']['example'] = model['sampleId'] + '12345';
    }
  }

  var parentModel = getParentModel(model, models);
  if (parentModel) {
    return augmentWithParentFields(augFields, parentModel, models, notInSpec.concat(model.notInSpec));
  } else {
    return augFields;
  }
}

function createModelMarkdownPage(model, models, extensions) {
  var fullFields = augmentWithParentFields({}, model, models, []);
  var fullModel = createFullModel(fullFields, model, models);
  var derivedFrom = getPropertyWithInheritance("derivedFrom", model, models);

  console.log("Model: " + model.type);

  return `---
description: This page describes the ` + model.type + ` type.
---

# ` + model.type + `
` + createMarkdownFromDescription(model.description || {}) + `
` + (derivedFrom ? `This type is derived from [` + derivedFrom + `](` + derivedFrom + `)` + (derivedFrom.indexOf("schema.org") > -1 ? ", which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available" : "") + "." : "" ) + `

## **Properties**

` + createSectionIfFields("Required properties", fullModel.requiredFields, fullFields)
  + createRequiredOptionsIfFields(fullModel.requiredOptions, fullFields) 
  + createSectionIfFields("Recommended properties", fullModel.recommendedFields, fullFields) 
  + createSectionIfFields("Optional properties", fullModel.optionalFields, fullFields)
  + createSectionForEachExtension(fullModel.extensionFields, fullFields, extensions)
+ `



Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution License (CC-BY V4.0)](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [MIT License](https://opensource.org/licenses/MIT), for anyone to access, use and share; using attribution "[OpenActive](https://www.openactive.io/)".
`;

}

function createRequiredOptionsIfFields(requiredOptions, fields) {
  if (requiredOptions.length > 0) {
    return "### ** Required options **\n\n"
    + requiredOptions.map(requiredOption => 
        requiredOption.description.join("\n") + "\n" + createTableFromFields(requiredOption.options, fields) + "\n\n"
      ).join("\n\n");
  } else return "";
}

function createSectionForEachExtension(fieldList, fullFields, extensions) {
  var str = '';
  Object.keys(extensions).forEach(function(prefix) {
    var extension = extensions[prefix];
    extensionFieldList = fieldList.filter(field => fullFields[field].extensionPrefix === prefix);
    // If extention has any fields, then include it
    if (extensionFieldList.length > 0) {
      str += createSectionIfFields(extension.heading, extensionFieldList, fullFields, extension.description);
    }
  });
  return str;
}

function createSectionIfFields(title, fieldList, fields, description) {
  if (fieldList.length > 0) {
    return '### **' + title + '**\n    ' + (description ? '\n' + description + '\n\n' : '') + createTableFromFields(fieldList, fields) + "\n\n";
  } else return "";
}

function createMarkdownFromDescription(description) {
  if (description.sections) {
     return description.sections.map(section => ( section.title && section.paragraphs ? `
## **` + section.title + `**
` + section.paragraphs.join("\n") : "")).join("\n\n") + "\n";
  } else {
    return "";
  }
}

function createTableFromFields(fieldNameList, fields) {
  console.log("Fields list: " + fieldNameList.join(", "));
  console.log("Found fields: " + fieldNameList.map(field => (fields[field] || {}).fieldName).join(", "));
  return createTableFromFieldList(fieldNameList.map(field => fields[field]))
}

function createTableFromFieldList(fieldList) {
  return `
<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Expected Type</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
` + fieldList.map(field => createMarkdownFromField(field)).join('\n') + `
  </tbody>
</table>
`;
}

function createMarkdownFromField(field) {
  return `    <tr>
      <td style="text-align:left"><b>` + field.fieldName + `</b></td>
      <td style="text-align:left">
        ` + createTypeString(field) + `
      </td>
      <td style="text-align:left">
        ` + createDescriptionWithExample(field) + `
      </td>
    </tr>`;
}

function createTypeString(field) {
  var types = [];
  if (field.requiredType) types.push(field.requiredType);
  if (field.model) types.push(field.model);
  if (field.alternativeModels) types = types.concat(field.alternativeModels);
  if (field.alternativeTypes) types = types.concat(field.alternativeTypes);
  return types.map(type => createLinkFromFullyQualifiedProperty(type)).join("<br/> - or - <br/>");
}

function createLinkFromFullyQualifiedProperty(prop) {
  return (isArray(prop) ? "Array of " : "") + `<a href="` + getPropLinkFromFQP(prop) + `"><code>` + getPropNameFromFQP(prop) + `</code></a>`;
}

function isArray(prop) {
  return prop.indexOf("ArrayOf") == 0;
}

function getPropLinkFromFQP(prop) {
  if (prop.lastIndexOf("/") > -1) {
    return prop.replace("ArrayOf#", "");
  } else if (prop.lastIndexOf("#") > -1) {
    return DATA_MODEL_DOCS_URL_PREFIX + prop.substring(prop.lastIndexOf("#") + 1).toLowerCase();
  } else return "#";
}

function getPropNameFromFQP(prop) {
  //Just the characters after the last /, # or :
  var match      = prop.match(/[/#:]/g);
  var lastIndex  = prop.lastIndexOf(match[match.length-1]);
  if (lastIndex > -1) {
    return prop.substring(lastIndex + 1);
  } else return prop;
}

function createDescriptionWithExample(field) {
  if (field.requiredContent) {
    return "Must always be present and set to " + renderCode(field.requiredContent, field.fieldName, field.requiredType);
  } else {
    return field.description.map(text => md.render(text).replace(/\r?\n\r?/g, "")).join("") 
      + (field.example ? "<p></br><b>Example</b></p><p>" + renderCode(field.example, field.fieldName, field.requiredType) + "</p>" : "");
  }
}

function renderCode(code, fieldName, requiredType) {
  if (typeof code === 'object') {
    return "<code>" + (fieldName ? `"` + fieldName + `": ` : "") + JSON.stringify(code, null, 2)
      .replace(/ /g, "&nbsp;")
      .replace(/"/g, "&quot;")
      .replace(/\n/g, "<br/>") + "</code>";
  } else {
    var isNumber = requiredType && (requiredType.indexOf("Integer") > -1 || requiredType.indexOf("Float") > -1);
    return "<code>" + (fieldName ? `"` + fieldName + `": ` : "") + (isNumber ? code : `"` + code + `"`) + "</code>";
  }
}

function createFullModel(fields, partialModel, models) {
  // Ensure each input prop exists
  var model = {
    requiredFields: getPropertyWithInheritance("requiredFields", partialModel, models) || [],
    requiredOptions: getPropertyWithInheritance("requiredOptions", partialModel, models) || [],
    recommendedFields: getPropertyWithInheritance("recommendedFields", partialModel, models) || [],
    extensionFields: getMergedPropertyWithInheritance("extensionFields", partialModel, models) || []
  }
  // Get all options that are used in requiredOptions
  var optionSetFields = [];
  model.requiredOptions.forEach(function(requiredOption) {
      optionSetFields = optionSetFields.concat(requiredOption.options);
  });
  // Create map of all fields
  var optionalFieldsMap = Object.keys(fields).reduce(function(map, obj) {
      map[obj] = true;
      return map;
  }, {});
  // Set all known fields to false
  model.requiredFields.concat(model.recommendedFields).concat(model.extensionFields)
    .forEach(field => optionalFieldsMap[field] = false);
  // Create array of optional fields
  var optionalFields = Object.keys(optionalFieldsMap).filter(field => optionalFieldsMap[field]);

  return {
    requiredFields: sortWithIdAndTypeOnTop(model.requiredFields),
    recommendedFields: sortWithIdAndTypeOnTop(model.recommendedFields),
    optionalFields: sortWithIdAndTypeOnTop(optionalFields),
    extensionFields: sortWithIdAndTypeOnTop(model.extensionFields),
    requiredOptions: model.requiredOptions
  };
}

function sortWithIdAndTypeOnTop(arr) {
  var firstList = [];
  if (arr.includes("type")) firstList.push("type");
  if (arr.includes("id")) firstList.push("id");
  var remainingList = arr.filter(x => x != "id" && x != "type");
  return firstList.concat(remainingList.sort());
}
