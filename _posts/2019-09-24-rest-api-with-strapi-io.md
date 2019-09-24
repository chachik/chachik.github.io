---
layout: post
title:  "Designing RESTful APIs with Strapi"
categories: [ Software development for founders ]
tags: [software development, founder, startup]
image: images/strapi-large.jpg
image_small: images/strapi-small.jpg
description: "Designing RESTful APIs with Strapi"
featured: true
hidden: true
blog: true
post: true
comments: true
permalink: /blog/:year/:month/:day/:title:output_ext
sitemap:
    priority: 1
discussion_id: software-development-for-founder
redirect_from: /blog/rest%20api%20with%20strapi%20io/2019/09/24/rest-api-with-strapi-io.html
author:
    display_name: "Alex Feskov"
---

### Designing RESTful APIs with Strapi

Have you ever found yourself in a situation when you need to deliver a backed fast, but don't have an extensive backed coding experience or simply don't have enough time for that? If yes, then strapi.io might be the solution: it lets you create fully-functional restful endpoints including authentication and authorization in a matter of minutes.

Considering you have Node.js and npm installed on your machine, there's only one command that has to be run before you can start designing the API interfaces thought the Strapi admin panel UI accessible through an internet browser.


####Data Models
Strapi let's you define your own Data Models (Content Type) and define relations between those, just like you would do in a relational database between tables(entities).

####Authentication & Authorization
Default Strapi setup has inbuilt User Management, Permission and Authentication features, which allows you to control access to the API contents based on the user role.
There are also different authentication Providers available: you can, for instance, let your users authenticate (register) via Google, Facebook or Twitter. Forgot password and reset password features are also included.

####Using the API
Once the Data Models (Content Types) are defined and User permissions are set, you can start using the API endpoints. It worth mentioning that 'list' endpoints (which let you get the collection of Models) have filtering capabilities out-of-the-box (eg. GET /users?_limit=30&name=John).

####Summary
The features briefly described above is the minimum srtapi.io knowledge required to get the RESTful API running locally on your dev machine, the tool however provides way more features as well as extension capabilities, such as:

- Email plugin
- Upload file plugin
- Internationalization
- Scheduled jobs
- Extensive configuration


####Pros:
- Impressive quick start developing RESTful APIs having no back-end experience
- Extensive out-of-the-box functionality 
- Great extension and configuration capabilities
- Multiple deployment options
- Open source 

####Cons:
- Deployment and configuration might be a tricky task for someone with no back-end/DevOps experience
- Missing functionality development has to be done following Strapi's development paradigm (plugins, extensions, etc.)
- Potentially no horizontal scaling capabilities