# Middle Eastern Food Recipe Blog

## The project
It contains a public sections, where non-registered users can brows, non-authenticated, as well as private sections, where authentication is required.
Authenticated user can manage their recipes. Non-authenticated users can only view. The recipe can be managed with the normal CRUD operations.

## Architecture

The project consists of a node.js backend and a React.js frontend.

### Backend
The backend is a node.js app. It uses the express.js framework. For database, it uses MongoDB. For authentication, it uses JWT.

### Frontend
The frontend is a React.js application. It contains public and private sections. The authentication with the backend is done with JWT. It implements client-side routing. The state management is a combination between Context API and useReducer hook. It applies error handling and data validation. It utilizes an external API to collect a URL with the flag of the country, the recipe belongs to.
