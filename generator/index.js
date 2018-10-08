const DATA_MODEL_DOCS_DIR = "../docs/data-model/types/";

const { getModels } = require('@openactive/data-models');
var fs = require('fs');
var Remarkable = require('remarkable');
var md = new Remarkable({
  linkify: true
});

// Returns the latest version of the models map
const models = getModels();


Object.keys(models).forEach(function(typeName) {
    model = models[typeName];
    if (typeName != "undefined") { //ignores "model_list.json" (which appears to be ignored everywhere else)
      
      var pageName = model.type.toLowerCase() + ".md";
      var pageContent = createModelMarkdownPage(model, models);

      console.log("NAME: " + pageName);
      console.log(pageContent);
      
      fs.writeFile(DATA_MODEL_DOCS_DIR + pageName, pageContent, function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("FILE SAVED: " + pageName);
      }); 
    }
});

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
      augFields['id']['example'] = model['sampleId'] + '1234';
    }
  }

  var parentModel = getParentModel(model, models);
  if (parentModel) {
    return augmentWithParentFields(augFields, parentModel, models, notInSpec.concat(model.notInSpec));
  } else {
    return augFields;
  }
}

function createModelMarkdownPage(model, models) {
  var fullFields = augmentWithParentFields({}, model, models, []);
  var fullModel = createFullModel(fullFields, model, models);
  var derivedFrom = getPropertyWithInheritance("derivedFrom", model, models);

  return `---
description: This page describes the ` + model.type + ` type.
---

# ` + model.type + `
` + createMarkdownFromDescription(model.description || {}) + `
` + (derivedFrom ? `This type is derived from [` + derivedFrom + `](` + derivedFrom + `)` + (derivedFrom.indexOf("schema.org") > -1 ? ", which means that any of this type's properties within schema.org may also be used. Note however the properties on this page must be used in preference if a relevant property is available" : "") + "." : "" ) + `

## **Fields**

` + createSectionIfFields("Required fields", fullModel.requiredFields, fullFields)
  + createRequiredOptionsIfFields(fullModel.requiredOptions, fullFields) 
  + createSectionIfFields("Recommended fields", fullModel.recommendedFields, fullFields) 
  + createSectionIfFields("Optional fields", fullModel.optionalFields, fullFields);

}

function createRequiredOptionsIfFields(requiredOptions, fields) {
  if (requiredOptions.length > 0) {
    return "### ** Required options **\n\n"
    + requiredOptions.map(requiredOption => 
        requiredOption.description.join("\n") + "\n" + createTableFromFields(requiredOption.options, fields) + "\n\n"
      ).join("\n\n");
  } else return "";
}

function createSectionIfFields(title, fieldList, fields) {
  if (fieldList.length > 0) {
    return `### **` + title + `**
    ` + createTableFromFields(fieldList, fields) + "\n\n";
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
    return "https://docs.openactive.io/data-model/types/" + prop.substring(prop.lastIndexOf("#") + 1).toLowerCase();
  } else return "#";
}

function getPropNameFromFQP(prop) {
  if (prop.lastIndexOf("/") > -1) {
    return prop.substring(prop.lastIndexOf("/") + 1);
  } else if (prop.lastIndexOf("#") > -1) {
    return prop.substring(prop.lastIndexOf("#") + 1)
  } else return prop;
}

function createDescriptionWithExample(field) {
  if (field.requiredContent) {
    return "Must always be present and set to " + renderCode(field.requiredContent, field.fieldName, field.requiredType);
  } else {
    return field.description.map(text => md.render(text).replace(/\r?\n\r?/g, "")).join("") 
      + (field.example ? "<p></br><b>Example</b></p><p>" + renderCode(field.example, field.fieldName, field.requiredType) : "") + "</p>";
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
    recommendedFields: getPropertyWithInheritance("recommendedFields", partialModel, models) || []
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
  model.requiredFields.concat(model.recommendedFields, optionalFieldsMap)
    .forEach(field => optionalFieldsMap[field] = false);
  // Create array of optional fields
  var optionalFields = Object.keys(optionalFieldsMap).filter(field => optionalFieldsMap[field]);

  return {
    requiredFields: sortWithIdAndTypeOnTop(model.requiredFields),
    recommendedFields: sortWithIdAndTypeOnTop(model.recommendedFields),
    optionalFields: sortWithIdAndTypeOnTop(optionalFields),
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
