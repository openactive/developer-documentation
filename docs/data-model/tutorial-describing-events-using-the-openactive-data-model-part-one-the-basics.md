# Tutorial: describing events using the OpenActive data model - part one: the basics

**Whether you’re aiming to publish open opportunity data or to use it, familiarity with the OpenActive data model will be key.**  


**In this tutorial we’ll be looking at how to describe an activity session using the standard data model we have developed with the community. We’ll cover all of the core properties that are** [**required**](https://www.openactive.io/modelling-opportunity-data/#required-and-optional-properties) **as part of the standards.**  


**The tutorial covers:**  


* **Understanding what the model is**
* **The format of a model**
* **How to describe a basic activity session**
* **Where to go next**

**By the end of this tutorial you should understand the concept behind the model, and be confident in describing your own events.**  


**This tutorial requires a general understanding of JSON, and use of a text editor if you wish to follow along or write your own examples.**  


**The model described here will conform to the Modelling Opportunity Data 2.0 specification. If you want to jump ahead for a sneak peek of the final version, you can find it in the validator.**  


## **1. Understanding the data model**

**Before jumping in to create one, we first need to understand what we’re trying to create.**  


**OpenActive is working to bring about change within the sport and physical activity sector by improving access to ‘open opportunity data’. This means making data about where and when sport and physical activities happen open for anyone to access, use and share. By doing this, more places, products and services can better inform people of opportunities to get active.**  


**All of the following types of data can be published as open data, and collectively this is known as opportunity data:**  


* **descriptions and lists of physical activities**
* **details of the locations and venues at which activities or events takes place**
* **the facilities available at those locations**
* **the details of event involving physical activities e.g. when and where they will take place, restrictions on attendance, costs, etc**
* **any related information, e.g. about the format of the event, its organisers, etc**  

**Having a consistent format is important because it makes it easier for everyone to publish and use data, and so we have standards.** [**Open standards**](https://standards.theodi.org/introduction/what-are-open-standards-for-data/) **for data are documented, reusable agreements that help people and organisations to publish, access, share and use better quality data.**  


**The data model that we’re going to walk through in this tutorial is an example of following the standards that the community have defined. It builds on existing standards \(such as** [**schema.org**](https://schema.org/)**, JSON-LD, and** [**Simple Knowledge Organization System \(SKOS\)**](https://www.w3.org/2004/02/skos/)**\), which has let us focus specifically on the aspects of describing opportunity data that are important to the physical activity sector.**  


## **2. The format of a model**

**The recommended approach to publishing open opportunity data is as JSON, and specifically as JSON-LD \(a JSON-based serialization for linked data\). The use of JSON-LD for sharing structured information is also encouraged by people including** [**Google**](https://developers.google.com/search/docs/guides/intro-structured-data)**, and is an example of why it’s useful to have common approaches. In this tutorial all of our examples will be using JSON-LD format.**  


## **3. How to describe an activity session**

### **3.1 Add a context**

**For our starting foundations, all opportunity data should begin with a context contained within an opening and closing bracket \(see below\).**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld" }** |
| :--- |


**A JSON-LD context maps the terms used in a JSON document to their standard definitions. To indicate that your data conforms to the OpenActive opportunity data specification, include a @context reference that matches the above.**  
  


### **3.2 Adding basic session details**

**Now we can start to add in the information about the session itself. To illustrate this, we’re going to use a rollerblading fitness class.**  


**The following are the minimum requirements for modelling opportunity data:**  


* **define that it’s an event \(opportunity\)**
* **its name**
* **a URL providing a link to a web page describing the session**
* **an indication of the type of activity that will take place at an event**
* **the time at which the event will take place**
* **the location at which the event will take place**

**Whilst this tutorial will help you to understand what’s necessary to get a basic, validating opportunity, there’s a lot more that you can do with the data. Other fields are optional, but might be recommended as they provide useful information for participants. Generally we encourage people to provide as much useful information as possible, while respecting privacy. We’ll talk a bit more about this in the second half of this tutorial, or you can refer to the** [**Required and Optional properties**](https://www.openactive.io/modelling-opportunity-data/#required-and-optional-properties) **part of the specification.**  


**Let’s walk through and build it up.**  


#### **Defining the type of resource**

**Adding to the JSON-LD context that we added in the first step, we now want to start describing the event itself.**  


**To describe what type of thing we're going to be sharing in our data, we need to add a type property. It’s possible for the data model to describe a number of different types of things, but as we're describing an Event we’ll use that as the value.**  


<table>
  <thead>
    <tr>
      <th style="text-align:left">
        <p><b>{<br />  "@context": "https://openactive.io/ns/oa.jsonld",<br />  "type": "Event"</b>
        </p>
        <p><b>}</b>
        </p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>#### **Give it a name and URL**

**Add in the name for your individual session, and the public URL where someone could go to find more information, or perhaps sign up to participate.**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1" }** |
| :--- |


#### **Defining the activity type**

**Next, we want to describe the type of activity this opportunity is for. As part of the OpenActive standards work there have been some initial efforts to develop a** [**standardised list of activities**](https://www.openactive.io/activity-list/) **for the sector. Where possible consider the terminology already being used, but if these don’t accurately reflect your activity types we’d encourage you to share your list as open data and contribute to the efforts in this area.**  


**In this case Roller Blading is in the standardised activity list, so we can add it to our model, along with references to the activity list that it has come from. We do this by adding an array of SKOS Concepts, however for our example we only need to define one activity type:**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\], }** |
| :--- |


#### **Giving it a time**

**People need to know when the event starts, and so in its most basic form we include a startDate property. The value of this must be a valid \[**[**ISO8601**](https://www.openactive.io/opportunity-data-primer/#bib-ISO8601)**\] date or date time, with a trailing definition of timezone. For example, 2018-08-01T10:51:02Z or 2018-08-01T10:51:02+01:00.**  


**Whilst this is the only mandatory property, it’s recommended to include information about when the event finishes, and how long the activity part of it takes. Due to this, you may wish to include an EndDate, and a duration.**  


**The endDate property is the partner to startDate, and is used to signify the end of the event. Furthermore, certain activities may have a start and end point, but the actual duration of activity itself may be less than this total period - for instance a bike ride that meets at 10am and concludes at 3pm, but only includes two hours of cycling with the rest as social time. For activities such as these, we may wish to use the duration property \(defined using an** [**ISO8601**](https://www.openactive.io/opportunity-data-primer/#bib-ISO8601) **duration\) to indicate the length of the activity within the overall period.**  


**In our example the activity lasts the full hour dictated by the start and end points. For that reason duration is optional, but it has been included here to illustrate usage.**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "startDate": "2018-08-13T20:00:00Z",   "endDate": "2018-08-13T21:00:00Z",   "duration": "PT60M", }** |
| :--- |


**Your event timings may be more complicated than this, and we’ll come onto that in part two of this tutorial.**  


#### **Stating where it happens**

**Finally, people need to know where to go to attend the event. Locations are added to events using the location property, which follows the** [**schema.org standards for address data**](https://schema.org/PostalAddress)**. The minimum requirements for validation are shown below, but the recommendation in the specification is that applications should provide as much information about the Place as possible.**  


**An example of providing more information is through including geocodes. Whilst this is not mandatory for each event, it’s recommended as people are more likely to use the data if it’s geocoded.**  
  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],    "startDate": "2018-08-13T20:00:00Z",    "endDate": "2018-08-13T21:00:00Z",    "duration": "PT60M",   "location": {     "type": "Place",     "name": "ExampleCo Gym",     "address": {       "type": "PostalAddress",       "streetAddress": "1 High Street",       "addressLocality": "Colchester",       "addressRegion": "Essex",       "postalCode": "AB1 2CD",       "addressCountry": "GB"     }   } }** |
| :--- |


**An example of providing more information is through including geocodes. Whilst this is not mandatory for each event, it’s recommended as people are more likely to use the data if it’s geocoded.**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],    "startDate": "2018-08-13T20:00:00Z",    "endDate": "2018-08-13T21:00:00Z",    "duration": "PT60M",    "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       }    },   "geo": {      "type": "GeoCoordinates",      "latitude": 51.88805,      "longitude": 0.90286   } }** |
| :--- |


**And that’s it! Here we have a valid event described according to the OpenActive opportunity data model.**  


**You’re able to double-check that you’ve got everything entered correctly by pasting your code into the** [**OpenActive data validator tool**](https://validator.openactive.io/)**.**  
**3. How to describe an activity session**

### **3.1 Add a context**

**For our starting foundations, all opportunity data should begin with a context contained within an opening and closing bracket \(see below\).**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld" }** |
| :--- |


**A JSON-LD context maps the terms used in a JSON document to their standard definitions. To indicate that your data conforms to the OpenActive opportunity data specification, include a @context reference that matches the above.**  
  


### **3.2 Adding basic session details**

**Now we can start to add in the information about the session itself. To illustrate this, we’re going to use a rollerblading fitness class.**  


**The following are the minimum requirements for modelling opportunity data:**  


* **define that it’s an event \(opportunity\)**
* **its name**
* **a URL providing a link to a web page describing the session**
* **an indication of the type of activity that will take place at an event**
* **the time at which the event will take place**
* **the location at which the event will take place**

**Whilst this tutorial will help you to understand what’s necessary to get a basic, validating opportunity, there’s a lot more that you can do with the data. Other fields are optional, but might be recommended as they provide useful information for participants. Generally we encourage people to provide as much useful information as possible, while respecting privacy. We’ll talk a bit more about this in the second half of this tutorial, or you can refer to the** [**Required and Optional properties**](https://www.openactive.io/modelling-opportunity-data/#required-and-optional-properties) **part of the specification.**  


**Let’s walk through and build it up.**  


#### **Defining the type of resource**

**Adding to the JSON-LD context that we added in the first step, we now want to start describing the event itself.**  


**To describe what type of thing we're going to be sharing in our data, we need to add a type property. It’s possible for the data model to describe a number of different types of things, but as we're describing an Event we’ll use that as the value.**  


<table>
  <thead>
    <tr>
      <th style="text-align:left">
        <p><b>{<br />  "@context": "https://openactive.io/ns/oa.jsonld",<br />  "type": "Event"</b>
        </p>
        <p><b>}</b>
        </p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>#### **Give it a name and URL**

**Add in the name for your individual session, and the public URL where someone could go to find more information, or perhaps sign up to participate.**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1" }** |
| :--- |


#### **Defining the activity type**

**Next, we want to describe the type of activity this opportunity is for. As part of the OpenActive standards work there have been some initial efforts to develop a** [**standardised list of activities**](https://www.openactive.io/activity-list/) **for the sector. Where possible consider the terminology already being used, but if these don’t accurately reflect your activity types we’d encourage you to share your list as open data and contribute to the efforts in this area.**  


**In this case Roller Blading is in the standardised activity list, so we can add it to our model, along with references to the activity list that it has come from. We do this by adding an array of SKOS Concepts, however for our example we only need to define one activity type:**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\], }** |
| :--- |


#### **Giving it a time**

**People need to know when the event starts, and so in its most basic form we include a startDate property. The value of this must be a valid \[**[**ISO8601**](https://www.openactive.io/opportunity-data-primer/#bib-ISO8601)**\] date or date time, with a trailing definition of timezone. For example, 2018-08-01T10:51:02Z or 2018-08-01T10:51:02+01:00.**  


**Whilst this is the only mandatory property, it’s recommended to include information about when the event finishes, and how long the activity part of it takes. Due to this, you may wish to include an EndDate, and a duration.**  


**The endDate property is the partner to startDate, and is used to signify the end of the event. Furthermore, certain activities may have a start and end point, but the actual duration of activity itself may be less than this total period - for instance a bike ride that meets at 10am and concludes at 3pm, but only includes two hours of cycling with the rest as social time. For activities such as these, we may wish to use the duration property \(defined using an** [**ISO8601**](https://www.openactive.io/opportunity-data-primer/#bib-ISO8601) **duration\) to indicate the length of the activity within the overall period.**  


**In our example the activity lasts the full hour dictated by the start and end points. For that reason duration is optional, but it has been included here to illustrate usage.**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "startDate": "2018-08-13T20:00:00Z",   "endDate": "2018-08-13T21:00:00Z",   "duration": "PT60M", }** |
| :--- |


**Your event timings may be more complicated than this, and we’ll come onto that in part two of this tutorial.**  


#### **Stating where it happens**

**Finally, people need to know where to go to attend the event. Locations are added to events using the location property, which follows the** [**schema.org standards for address data**](https://schema.org/PostalAddress)**. The minimum requirements for validation are shown below, but the recommendation in the specification is that applications should provide as much information about the Place as possible.**  


**An example of providing more information is through including geocodes. Whilst this is not mandatory for each event, it’s recommended as people are more likely to use the data if it’s geocoded.**  
  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],    "startDate": "2018-08-13T20:00:00Z",    "endDate": "2018-08-13T21:00:00Z",    "duration": "PT60M",   "location": {     "type": "Place",     "name": "ExampleCo Gym",     "address": {       "type": "PostalAddress",       "streetAddress": "1 High Street",       "addressLocality": "Colchester",       "addressRegion": "Essex",       "postalCode": "AB1 2CD",       "addressCountry": "GB"     }   } }** |
| :--- |


**An example of providing more information is through including geocodes. Whilst this is not mandatory for each event, it’s recommended as people are more likely to use the data if it’s geocoded.**  


| **{   "@context": "https://openactive.io/ns/oa.jsonld",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list/activity-list.jsonld**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],    "startDate": "2018-08-13T20:00:00Z",    "endDate": "2018-08-13T21:00:00Z",    "duration": "PT60M",    "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       }    },   "geo": {      "type": "GeoCoordinates",      "latitude": 51.88805,      "longitude": 0.90286   } }** |
| :--- |


**And that’s it! Here we have a valid event described according to the OpenActive opportunity data model.**  


**You’re able to double-check that you’ve got everything entered correctly by pasting your code into the** [**OpenActive data validator tool**](https://validator.openactive.io/)**.**

## **4. Where to go next**

**This is all you need to get up and running, but it may be that you’d like a bit more detail. If you’ve taken the time to validate the above, you’ll also see that the validator returns a number of additional recommendations for making the data even better. If you’d like to build the example up even further you can follow along with part two: adding additional timing detail.**  


**Alternatively, if you’d like to jump straight in to creating your own events, the following will probably be useful:**  


* **Data model specification:** [**https://www.openactive.io/modelling-opportunity-data/**](https://www.openactive.io/modelling-opportunity-data/)
* **OpenActive developer area:** [**https://developer.openactive.io/**](https://developer.openactive.io/)
* **A “full fat” Event example, which you may want to use as a starting point and cut down where needed:** [**https://developer.openactive.io/models/event**](https://developer.openactive.io/models/event)

**Activity list:** [**https://www.openactive.io/activity-list/**](https://www.openactive.io/activity-list/)  


