---
layout: post
title:  "How to transform a startup idea into requirements?"
short_title:  "Transforming idea into requirements"
categories: [ Software development strategy for startups ]
tags: [software development, founder, startup]
image: images/software-requirements-for-startups.png
image_small: images/software-requirements-for-startups_small.png
description: "How to transform a startup idea into requirements."
# author: alex
featured: true
hidden: true
blog: true
post: true
comments: true
permalink: /blog/:year/:month/:day/:title:output_ext
sitemap:
    priority: 1
discussion_id: software-requirements-for-startups
landing: true
---

All right.  There is a problem, and you have a brilliant idea on how to solve it. At first, that idea is something vague and formless, that evolves around the founder's mind and gut feelings. And there is a need to crystallize the vision both in the head and on paper. That will create a bridge from concept to implementation and bring all teammates on the same page. 

Most likely, the initial idea will change many times in search for the product-market fit. Thus, the requirements must be concise, to be easily changed, but accurate to drive the development smoothly.

At this point, it is also essential not to mix the business requirements with the supposed way of implementation. Otherwise, those technical details can be taken for granted and limit the team in finding more efficient approaches later on. Hence, leave the solution architecture for further steps.

Like any creative process, describing ideas is iterative and non-linear. So it's natural to go forth and back many times, leap from one topic into another when new thoughts come, start from the draft outlines, and add more details afterward.

Now let's review essential parts of business requirement with simplified Airbnb examples.

#### 1. Problem  
  
Startup arises from a problem, and requirements start from it likewise. All the following blocks, features and decisions must support solving it in one way or another. Otherwise, it's useless to spend time and effort on those parts.

> **Airbnb example:**
> 
> **Price** is an important concern for customers booking travel online.  
> **Hotels** leave you disconnected from the city and its culture.  
> **No easy way exists** to book a room with a local or become a host.  

#### 2. Solution

Describe the essential elements of the target solution and how they solve the problem.

> **Airbnb example:**
>
> A web platform where users can rent out their space to host travelers to:
> * Save money when traveling;
> * Make money when hosting;
> * Share culture local connection to the city.

#### 3. Stakeholders

List all interested in the solution parties, including their main concerns.

> **Airbnb example:**
> 
> A **traveler** needs a convenient way to book, check-in, check-out a comfortable dwelling from locals.  
> A **host** needs the capability to easily rent out leaving space, receive money, and be safeguarded while providing accommodations for strangers.  

#### 4. Use Cases

Take the stakeholders one by one and elaborate on all the necessary capabilities to fulfill their needs. After that, mark only those of them you cannot start without to define the MVP scope. Resist the temptation to include too many items. Leave nothing but the essential core features that you can launch in a month.

> **Airbnb example:**
> 
> As a **traveler**, I want to sign up/sign in to the platform. (**MVP**)  
> As a **traveler**, I want to search for available places to stay by the city.  (**MVP**)  
> As a **traveler**, I want to review the details of places.  (**MVP**)  
> As a **traveler**, I want to book the available place.  (**MVP**)  
> As a **traveler**, I want to search for available experiences by the city.  
> As a **traveler**, I want to review the details of experiences.  
> As a **traveler**, I want to book the available experience.  
> As a **host**, I want to sign up/sign in to the platform. (**MVP**)  
> As a **host**, I want to add a place to stay. (**MVP**)  
> As a **host**, I want to add an experience.  

#### 5. User Flow

Draw a tree of possible transitions between **Use Cases** for every type of user. That gives you a clear picture of the user journey and forms a foundation for designing the User Interfaces. Concentrate on the MVP scope first.

> **Airbnb example:**
> 
> ![User Flow](/images/user-flow.png)

#### 6. Glossary

Keep watching your discussions and put here all used notions with a concise but clear description. While clarifying them, you often see that people understand the same words differently, or use different terms talking about the same ideas. Thus the **Glossary** is crucial to synchronize the vision between all teammates. Besides, it is a basement for the **Domain Model** that follows next. Together they lead to a faster implementation with a cleaner code.

> **Airbnb example:**
> 
> **User** - any person who uses the software platform to fulfill their needs.  
>
> **Traveler** - a **user** who is looking for **places** to stay and **experiences** to have during a trip.  
>
> **Host** - a **user** who hosts travelers or provides any kind of experience.  
>
> **Place** - any kind of leaving space provided by local hosts.  
>
> **Experience** - any activities/tours provided by local hosts.  

#### 7. Domain Model

Take all the terms from the **Glossary** and put them on the scheme. Extend each entity with its attributes. Connect with a line those of them, that have the direct relationships like: **"Has a"**, **"Is a"**, **"Interacts with"**. Write the relation type above the lines.

> **Airbnb example:**
> 
> ![Domain Model](/images/domain-model.png)

#### 8. Non-Functional requirements

Whereas the functional requirements define what a system is supposed to do, the non-functional requirements describe how a system is supposed to be. Here are some important of them:
* What are the potential number of essential entities in 1 year and 3 years?
* Do you plan to store large files like photos, videos, documents, etc.?
* Do you target the local market and have an operational window for supporting/upgrading activities during the night, or the platform must be available 24/7?
* Do you think that some user interfaces must work exceptionally fast or reasonably fast is enough?
    
The dev team must keep in mind those requirements from the very beginning and be ready to implement the necessary architectural patterns in proper time, though not spending much effort while searching for the market feet. [That article](/blog/2019/11/22/software-development-for-founder.html) describes in more detail why that is crucial.

> **Airbnb example:**
> 
> The potential number of entities:  
> Users - 100 000 in 1 year, 10 M in 3 years;  
> Places - 300 000 in 1 year, 50 M in 3 years.  
>
> The platform should store a lot (5-10 photos for every place) of images.
>
> The plan is to start from the local market and scale globally in 2 years.
> 
> All UI interface must work pretty fast to provide convenient service, but there are no special cases with exceptional requirements.

### Summary

The requirements elaboration guide, in a nutshell, is following:
* Kickoff from the **Problem**, **Solution**, and **Stakeholders**.
* Go through every stakeholder and think over their **Use Cases**.
* Extract all used terms (aka nouns) into the **Glossary** and **Domain Model**.
* Extend **Domain Model** with attributes and relations.
* Go through **Use Cases** and mark the scope of MVP.
* Draw a **User Flow** for the MVP **Use Cases**.
* Think a bit about **Non-Functional Requirements**.

And finally, remember the general **rules of thumb**:
* Keep the requirements concise but accurate.
* Refine the document regularly in correspondence to the evolution of an idea.
* Don't mix requirements with implementation details.