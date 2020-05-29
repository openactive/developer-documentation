---
description: Technical suggestions and recommendations for a data consumer
---

# Technical Requirements

Data about activity opportunities is held by [different data providers](get-the-data.md) who make their data available via APIs. We recommend that data consumers [copy providers' data into their own system](harvesting-opportunity-data.md) for combining with other data, optimising and caching.

This section describes one technical approach a consumer might implement.

## Technical Stack

A technology \(or tech\) "stack" is a combination of technologies that build on top of each other. Starting with the base operating system or host system, on top of which run databases, web technologies, frameworks and programming languages. All of which combine to deliver an application or service to a user.

A web-application stack that uses data from one or more Open Active data providers will likely include:

A host **operating system** or server such as Windows or Linux. This can be a physical server operated by the app creator, or a virtual server offered by "cloud" companies such as AWS, Azure, Heroku or Digital Ocean. Other technologies such as databases and software will run on this operating system.

A **database** to store a copy of the providers' data plus any additional data relevant to the consumers app or service.

A **web server** to make the application available to the public over the internet. Examples of web servers include Apache, Nginx and Express.js

**Software** to query and store providers' data, and [keep it up to date](harvesting-opportunity-data.md):  
1. query the provider's data feeds  
2. transform the data for your own purposes as required  
3. store the data in your own database

**Software** to read the stored data, add value, and display it to users.

## Resources

There are many learning resources to help you choose your technology stack and build applications or services. Here is just a small selection:

* [How to choose your tech stack](https://svsg.co/how-to-choose-your-tech-stack/)

