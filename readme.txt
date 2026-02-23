Flashcard App (PERN Stack)

A personal learning project built to practice full-stack development with the PERN stack (PostgreSQL, Express, React, Node) and Next.js on the front-end. This project demonstrates modular backend architecture, React state management, and full-stack integration.

Features

Create, edit, and study flashcards

Organize cards into decks

User authentication and login

Modular backend using controllers, services, and repositories

Responsive front-end built with React + Next.js

Hosted on Render (PostgreSQL database + Node backend)

Technologies Used

Frontend: React, Next.js, Tailwind CSS

Backend: Node.js, Express, PostgreSQL

Database: PostgreSQL (Docker for local development, hosted on Render)

Testing / Development Tools: JEST, React Testing Library, AI-assisted debugging and best practices

Architecture & Best Practices

Backend is separated into /controllers, /services, and /repositories for modularity and maintainability.

Frontend state management can be refactored to use React Context for cleaner and more predictable data flow.

API responses currently vary in structure; standardizing them would improve maintainability.

Learnings & Reflections:

Consider finishing all functionality before adding CSS to avoid repeated rework.

Plan state management early to reduce costly refactoring later.

Implement tests with JEST/React Testing Library to improve reliability.

Consider Server-Side Rendering (SSR) for better performance and SEO.


if I was to do this again:
-I would wait until all the functionality was done before adding ANY kind of CSS.
-be more structured with how I was returning back end data. Currently , all routes return a different structure of data, and its hard to justify going back and refactoring now that it all works properly.
-I would strucure how state is going to work, having to go refactor code to pull state into a context can be time consuming if theres not much modularity. 
-Use JEST/React testing library to implement tests.
-USE SSR on the back-end. 


