# How to find opportunity data using the OpenActive Opportunity Data Dashboard

## **Introduction**

**If you’re looking to use physical activity opportunity data within your website or app,  you’re probably wanting to understand what’s available to you, and to identify which of it will help you meet your goals. To support people with this we’ve created the OpenActive Opportunity Data Dashboard.**  


**The status dashboard can be found at** [**status.openactive.io**](http://status.openactive.io/)**. It lists all of the openly licensed datasets and APIs published as part of the OpenActive initiative, as well as highlighting attributes of each set.**  


**In this guide we’ll cover:**  


* **Seeing what data is available**
* **How you can find data that meets your needs**
* **Taking your next steps**

## **How to see all of the open opportunity data that’s available**

**When landing on** [**status.openactive.io**](http://status.openactive.io/)**, you’re presented with a table that contains an overview of each dataset currently available under the OpenActive initiative. Each row on the table represents a different dataset. These are ordered alphabetically by default, but you can sort the table in different ways to help you explore.**  


![The API status dashboard, with a selection of datasets highlighted](https://lh5.googleusercontent.com/is13vfrrV1BvSGpSdgC4V7d9xo4y2IlsqVUo4lgUm4sB7ejgfJSAHlTp2jhMuj0hrsUvlzz-qN3zFQIFmfFjfGpNhEvjelovWq_8jL0TD8cuUt9prik9uXr_Ph_twSJMYQsMMMB9)

**As part of** [**the publishing process**](https://www.openactive.io/getting-started/) **for datasets, we ask publishers to provide some basic information about their feeds, including where the endpoint is located.  Because of this, feeds will automatically appear on the dashboard when they’re reviewed and published.**  


**The list of datasets on the dashboard and the summaries are regularly updated. The date and time of the last update is displayed on the main page and the individual dataset summary pages**  


**You can keep up to date with new datasets by checking the site periodically, by signing up to the** [**mailing list**](https://us13.list-manage.com/subscribe?u=9e6648557f84731796a4ac873&id=1665f95799)**, or at the bottom of the page there is an option to ‘**[**Download JSON list**](http://status.openactive.io/datasets.json)**’. This links to a file containing a snapshot of all of the information on the status site, including the sampled output. You can use this machine-readable version to automatically integrate new datasets into your application.**  


![A view of the contents of the status dashboard summary JSON file](https://lh4.googleusercontent.com/Sn9bpyu6cJsGBzTTXeVdBZoXU3QJhY8bN_c6HakjrARe02Anxh5IUCCgaH1sQeeQFKjqYqhKflavGNqZJmDU1B8cDvF4UElW6yATLcWvrG2gS9tUpuiiIzMk0ZWVG3W46_vnW8_q)



## **How to find information that meets your needs**

**Whilst some people may wish to harvest all of the data available, others will be focused on certain types of data - perhaps certain activities or geographies - and may wish to understand more about the content of the datasets. The status site lets you do this in a few different ways. Looking at each row in the table, you may want to consider some or all of the following:**  


### **Key dataset information**

* **Provider - includes the name of the organisation publishing the data. This links through to more information, optionally including mailing list, documentation, and more.**
* **Endpoint - includes an indicator of whether the API is currently up or down. This links through to the URL for the dataset/API.**

**Conformance to standards, and known issues**

* **Uses paging spec - with a link to the specification itself in the header of the table, this column represents whether or not the dataset conforms to the standards around how data is transferred for harvesting. For each feed, clicking on the entry will take you to the validator tool which will tell you of the errors conforming to v1.1 of the RPDE spec.**
* **Uses opportunity model - similarly, the opportunity model specification is linked in the table header. This column represents whether or not the dataset conforms to standards around the model of the data itself. For each feed, clicking on the entry will take you to the validator tool which will tell you of any errors conforming to v2 of the data model spec.**
* **Issues - showing the number of open issues and discussions relating to this dataset. This links through to the dataset’s GitHub issue tracker.**

\*\*\*\*

### **Activity types and geography**

* **Summary - if a dataset conforms to the standard data model then the dashboard will automatically generate a summary page for it. These pages are based on a daily sample of data from the data feed and provide an overview of the most common activities present in the dataset, as well as a summaryof their geographical spread across local authority areas. Please note that as the counts are from a sample, they are not reflective of the total number of opportunities.**
* **Includes coordinates - a recommendation of the standards is that opportunity data should include geographic coordinates for locations, to better support geographical searching. Where there is any evidence of coordinates, this flag is set to yes.**

![An example view of a summary page for a dataset](https://lh5.googleusercontent.com/Egjsca79kyPKii792w-tyDjOkHFxO83msIKjnvCsESeeGky7uO08nQYP7n3J2TQQ5-owneeaPgSCoMtiC7iGa1E9Lt-Pyv8e5S0srpRDhuE269WaooCZ3NrQTbuDcNlGPhWEkFEe)

  
****

### **How the data can be used**

* **Licence - this indicates which open data licence the publisher has chosen to apply to their dataset. OpenActive recommends the Creative Commons Attribution licence which means you can use the data for any purpose, so long as you attribute your sources.**

## **How to use the data that you’ve found**

**Once you’ve identified and made of note of the datasets that meet your needs, you’ll then need to harvest the data for each using their endpoints \(linked through in the endpoint column, or found using the data-url attribute in the JSON file\).**  


**How to do this is covered in another tutorial, which you can find** [**here**](harvesting-opportunity-data.md)**.**  


## **What if there is other data you want?**

**If there’s data missing from providers with an open feed \(e.g. they’ve only published kids activities and you want to use adult activities, or they haven’t provided detailed enough descriptions\) let them know through their GitHub repository, linked through their line on the status page. You can also let us know at** [**hello@openactive.io**](mailto:hello@openactive.io) **or on** [**Slack** ](https://www.openactive.io/public-openactive-w3c/)**as we can help coordinate you with other data users.**  


**If you’re looking for data from a provider who isn’t yet open, let us know at** [**hello@openactive.io**](mailto:hello@openactive.io)**. We can let you know where that organisation is at in their open data journey, link you up to other data users so you can coordinate efforts, and support you to work directly with the data provider to get the data you want.**  


