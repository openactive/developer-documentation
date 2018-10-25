# Tutorial: describing events using the OpenActive data model - part two: adding additional detail

In the [first part of this tutorial](tutorial-describing-events-using-the-openactive-data-model-part-one-the-basics.md) series we looked at putting together a basic example for an event.

Using our previous example as a starting point we’ll now look at adding additional detail into our model.

This tutorial will cover:

* Detailing more complex event times, including recurring activities
* How to add in a description and images
* Revisiting activity types, including multiple activities
* Defining whether an activity is part of a wider programme
* Describing suitability
* Adding in an offer to describe the cost of an activity

As a reminder, here’s our starting point from the previous tutorial:

| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],    "startDate": "2018-08-13T20:00:00Z",    "endDate": "2018-08-13T21:00:00Z",    "duration": "PT1H",    "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    }   }** |
| :--- |


## **1. Modelling recurring events**

Whilst some events may be a one-off, very commonly others recur on a predictable schedule. Where this happens we can model the schedule rather than having to enter each opportunity individually. We do this through the **eventSchedule** property.

In the below example you’ll see that we’ve removed the previously used **startDate** and **endDate** property, replacing these with an **eventSchedule** block. This details that it’s a \(repeating\) schedule, which starts and ends on specified dates \(leave off the end date if it repeats indefinitely\), and the frequency that repetition of the event should occur. The frequency again uses an ISO8601 duration, and can be \(for example\) daily, weekly, or monthly.

  
We’ve also explicitly stated the **startTime**, **endTime**, and **duration**, and the same logic applies to these as we discussed previously.

| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "eventSchedule": \[     {       "type": "Schedule",       "startDate": "2018-08-13",       "endDate": "2020-08-13",       "duration": "PT1H",       "repeatFrequency": "P1W",       "byDay": \[         "https://schema.org/Thursday"       \],       "startTime": "20:00",       "endTime": "21:00",       "scheduledEventType": "ScheduledSession"     }   \], "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    }   }** |
| :--- |


## **2. Adding a description**

At present, the only information we’ve built up around the content of the session is its name, activity type, and URL. To give our viewers more to go on and encourage them to attend, we may wish to use something more descriptive, in the form of a description. This is possible by using the property description.  
  
If an event is listed on the web there's probably already a description of some form, and that's the detail that would go in here. We’d suggest things like:

* how the event will be run
* the types of people who are or will be attending the event
* information on the event organiser
* notes on any equipment required
* suggested apparel, e.g. footwear, kit, etc

Let’s add in our description. It’s important to note that the order of properties is not important, but you may want to consider logical groupings for human readability. We’ve added it under the name and URL for this reason.  


| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "description": "Run by our head instructor, this is an intermediate class for those with existing roller blading experience, where we focus on exercises to tone key muscle groups. Bring your own boots, shape up, and have fun!",   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "eventSchedule": \[     {       "type": "Schedule",       "startDate": "2018-08-13",       "endDate": "2020-08-13",       "duration": "PT1H",       "repeatFrequency": "P1W",       "byDay": \[         "https://schema.org/Thursday"       \],       "startTime": "20:00",       "endTime": "21:00",       "scheduledEventType": "ScheduledSession"     }   \], "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    }   }** |
| :--- |


## **3. Enhancing with images**

Another element that can encourage participation is the inclusion of imagery. It’s recommended that you provide images that are representative of your events, and an array allows for the provision of multiple images.

Let’s add a large image and a smaller thumbnail option under our new description.

| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "description": "Run by our head instructor, this is an intermediate class for those with existing roller blading experience, where we focus on exercises to tone key muscle groups. Bring your own boots, shape up, and have fun!",   "image": \[   {     "type": "ImageObject",     "url": "https://example.com/static/image/yourimage\_large.jpg",     "thumbnail": \[       {         "type": "ImageObject",         "url": "https://example.com/static/image/yourimage\_thumbnail.jpg"       }     \]   }\],   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "eventSchedule": \[     {       "type": "Schedule",       "startDate": "2018-08-13",       "endDate": "2020-08-13",       "duration": "PT1H",       "repeatFrequency": "P1W",       "byDay": \[         "https://schema.org/Thursday"       \],       "startTime": "20:00",       "endTime": "21:00",       "scheduledEventType": "ScheduledSession"     }   \], "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    }   }** |
| :--- |


## **4. Defining whether an activity is part of a wider programme** 

As well as having our opportunity repeat, we may have activities that are part of a wider [Programme](https://www.openactive.io/modelling-opportunity-data/#programmes) of events. These Programmes are often associated with specific branding, for instance: "Les Mills BodyPump" or "Back to Netball".

In our fictional example let’s assume this is the case, and add in an association with a Programme. In its most basic form, we can do this by using the new property programme and adding the required details as follows:

| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "description": "Run by our head instructor, this is an intermediate class for those with existing roller blading experience, where we focus on exercises to tone key muscle groups. Bring your own boots, shape up, and have fun!",   "image": \[   {     "type": "ImageObject",     "url": "https://example.com/static/image/yourimage\_large.jpg",     "thumbnail": \[       {         "type": "ImageObject",         "url": "https://example.com/static/image/yourimage\_thumbnail.jpg"       }     \]   }\],   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "eventSchedule": \[     {       "type": "Schedule",       "startDate": "2018-08-13",       "endDate": "2020-08-13",       "duration": "PT1H",       "repeatFrequency": "P1W",       "byDay": \[         "https://schema.org/Thursday"       \],       "startTime": "20:00",       "endTime": "21:00",       "scheduledEventType": "ScheduledSession"     }   \],   "programme": {     "type": "Brand",     "name": "BladeFitness™️",     "url": "https://www.exampleorgbody.org/blade-fitness/",     "description": "A programme of events to encourage participation and get fit through roller blading"   },   "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    }  }** |
| :--- |


Here, we’ve added the name of the programme, a link to further detail about it, and a short description.  


## **5. Describing suitability**

Next we’ll look at adding in information to describe who your opportunity is suitable for.

People searching for things to do and ways to be active want to feel confident that opportunities are the right ones for them. Where it’s important, we can encourage participation by highlighting inclusion or restrictions as needed. For example, this could cover whether events are:

* suitable for a specific age range
* suitable for people within a specific height or weight range
* restricted to a male or female audience, or mixed
* suitable for people with a certain amount of experience
* able to provide support for particular disabilities

When you come to writing your own suitability criteria it’s recommended that you refer to the [specification](https://www.openactive.io/modelling-opportunity-data/#describing-the-audience-suitability-of-events) to better understand all of the options available, and what is implied by the inclusion or omission or certain properties.

For our example let’s explicitly state that this is a session for adults, with no gender restriction, at an intermediate level.

| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "description": "Run by our head instructor, this is an intermediate class for those with existing roller blading experience, where we focus on exercises to tone key muscle groups. Bring your own boots, shape up, and have fun!",   "image": \[   {     "type": "ImageObject",     "url": "https://example.com/static/image/yourimage\_large.jpg",     "thumbnail": \[       {         "type": "ImageObject",         "url": "https://example.com/static/image/yourimage\_thumbnail.jpg"       }     \]   }\],   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "eventSchedule": \[     {       "type": "Schedule",       "startDate": "2018-08-13",       "endDate": "2020-08-13",       "duration": "PT1H",       "repeatFrequency": "P1W",       "byDay": \[         "https://schema.org/Thursday"       \],       "startTime": "20:00",       "endTime": "21:00",       "scheduledEventType": "ScheduledSession"     }   \],   "programme": {     "type": "Brand",     "name": "BladeFitness™️",     "url": "https://www.exampleorgbody.org/blade-fitness/",     "description": "A programme of events to encourage participation and get fit through roller blading"   },   "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    },   "ageRange": {     "type": "QuantitativeValue",     "minValue": 18   },   "genderRestriction": "https://openactive.io/NoRestriction",   "level": \[     "intermediate"   \] }** |
| :--- |


## **6.  Adding offers**

Some opportunities are freely available for anyone to attend, but where participants need to pay for an event we can use Offers.

In our final amendment to this example, we’ll add some detail that shows our class has an individual cost of £10 per session.

| **{   "@context": "https://openactive.io/",   "type": "Event",   "name": "Blade and tone",   "url": "http://www.example.org/events/1",   "description": "Run by our head instructor, this is an intermediate class for those with existing roller blading experience, where we focus on exercises to tone key muscle groups. Bring your own boots, shape up, and have fun!",   "image": \[   {     "type": "ImageObject",     "url": "https://example.com/static/image/yourimage\_large.jpg",     "thumbnail": \[       {         "type": "ImageObject",         "url": "https://example.com/static/image/yourimage\_thumbnail.jpg"       }     \]   }\],   "activity": \[{      "id":"**[**https://openactive.io/activity-list/\#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3**](https://www.openactive.io/activity-list/#7e5cb3ee-8c91-4f85-8c97-e335e0013eb3)**",       "type": "Concept",       "prefLabel": "Roller blading",       "inScheme": "**[**https://openactive.io/activity-list**](https://www.openactive.io/activity-list/activity-list.jsonld)**"    }\],   "eventSchedule": \[     {       "type": "Schedule",       "startDate": "2018-08-13",       "endDate": "2020-08-13",       "duration": "PT1H",       "repeatFrequency": "P1W",       "byDay": \[         "https://schema.org/Thursday"       \],       "startTime": "20:00",       "endTime": "21:00",       "scheduledEventType": "ScheduledSession"     }   \],   "programme": {     "type": "Brand",     "name": "BladeFitness™️",     "url": "https://www.exampleorgbody.org/blade-fitness/",     "description": "A programme of events to encourage participation and get fit through roller blading"   },   "location": {       "type": "Place",       "name": "ExampleCo Gym",       "address": {          "type": "PostalAddress",          "streetAddress": "1 High Street",          "addressLocality": "Colchester",          "addressRegion": "Essex",          "postalCode": "AB1 2CD",          "addressCountry": "GB"       },       "geo": {          "type": "GeoCoordinates",          "latitude": 51.88805,          "longitude": 0.90286       }    },    "organizer": {        "name": "Colchester Bladers",        "type": "Organization",        "url": "https://www.examplecluburl.com"    },   "ageRange": {     "type": "QuantitativeValue",     "minValue": 18   },   "genderRestriction": "https://openactive.io/NoRestriction",   "level": \[     "intermediate"   \],   "offers": \[{     "type": "Offer",     "name": "Single session",     "price": 10,     "priceCurrency": "GBP"   }\] }** |
| :--- |


**As in the previous tutorial we can check that this validates by either copying and pasting the above code into the** [**validation tool**](https://validator.openactive.io)**, or using** [**this pre-populated link**](https://validator.openactive.io/?url=https%3A%2F%2Fwww.openactive.io%2Fdata-models%2Fversions%2F2.x%2Fexamples%2Ftutorials%2Fdescribing-events%2Fpart-two-finished.json&version=2.0)**.**

## **7. Where to go next**

At this point you should understand some of the more advanced ways to describe events using the OpenActive data model. To continue on your journey, please refer to the following resources if you’d like more information.

* Data model specification: [https://www.openactive.io/modelling-opportunity-data/](https://www.openactive.io/modelling-opportunity-data/)
* Primer: [https://www.openactive.io/opportunity-data-primer/](https://www.openactive.io/opportunity-data-primer/)
* Activity list: [https://www.openactive.io/activity-list/](https://www.openactive.io/activity-list/)



