---
description: Technical suggestions and recommendations for a data consumer
---

# Technical Requirements

Data about activity opportunities are held by many [different data providers](get-the-data.md).  These providers make data available via APIs. We recommend that data consumers [copy providers' data into their own system](harvesting-opportunity-data.md) where it can be optimised for searching and caching, and where it is easier to combine with other data.

This section describes one technical approach a consumer might take.

## Technical Stack

A technology "stack" is a combination of technologies that build on top of each other to deliver an application or service to a user. At the base of the stack is the operating system or host system. On the operating system may run databases, web technologies, frameworks and software written in a chosen programming language.

There are common combinations of technologies which are suited to particular uses, for example mobile applications, large vs smaller scale businesses or scientific uses. Compare technology stacks used in similar applications to understand the options.

A web-application stack that uses data from Open Active data providers is likely to include:

A host **operating system** or server such as Windows or Linux. This can be a physical server operated by the app creator, or a virtual server offered by "cloud" companies such as AWS, Azure, Heroku or Digital Ocean. Other technologies such as databases and software will run on this operating system.

A **database** to store a copy of the providers' data plus any additional data relevant to the consumer's app or service. Depending on the scale, speed, reliability and type of additional data used your application there are many database options ranging from lightweight, free databases to larger commercial products. Examples include SQLlite, MySql and Postgres. In some cases small volumes of data can be stored in an existing content management system such as WordPress.

**Back-end software** to query and store the providers' data, and [keep it up to date](harvesting-opportunity-data.md).  Application developers may transform or combine the data with other datasets before storing it in their own database. Backend programming languages include Python, Ruby and .Net.

**Back-end and front-end software** to read the stored data, add value, and display it for users to interact with.

A **web server**, that makes the application available to the public over the internet. Examples of web servers include Apache, Nginx and Express.js

## Resources

There are many learning resources to help you choose your technology stack and build applications or services. Here is just a small selection:

* [How to choose your tech stack](https://svsg.co/how-to-choose-your-tech-stack/)
* [Build your own technology stack](https://www.thesoftwareguild.com/blog/build-your-own-technology-stack/)
* [Choosing a technology stack for building your web application](https://www.monterail.com/blog/web-development-technology-stack)
* [How to choose the right database for your application](https://www.infoworld.com/article/3452894/how-to-choose-the-right-database-for-your-application.html)

