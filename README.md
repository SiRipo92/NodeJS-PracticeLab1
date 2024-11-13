# IBM's Course on Node.js and Express via Coursera

## Module 3 Hands-On Lab 1: CRUD Operations with Node.js and Express

This project is part of IBM's Node.js course on Coursera. It involves creating a simple application that manages a "Friends List" using Node.js and Express. The application demonstrates how to perform CRUD (Create, Retrieve, Update, Delete) operations with RESTful API endpoints and includes basic session-based authentication.

### Objectives

- Develop API endpoints to handle CRUD operations for friend data, which includes:
  - First name
  - Last name
  - Email
  - Date of Birth
- Implement session-based authentication with JSON Web Tokens (JWT) for secure endpoint access.
- Test the API endpoints using tools such as cURL and Postman.

### Features

- **Add a Friend**: Create a new friend entry with relevant details.
- **Retrieve Friend Details**: Fetch details of friends stored in the application.
- **Update Friend Information**: Modify existing friend information.
- **Delete Friend Details**: Remove a friend from the application’s data.
- **Authentication**: Protect endpoints using JWT for secure access control.

### Getting Started

1. **Install Dependencies**: 
   ```bash
   npm install
2. **Start the server**:
   ```bash
   npm start
3. **Test endpoints: Use Postman or cURL to test the endpoints :**
  - Create: POST /api/friends
  - Retrieve: GET /api/friends or GET /api/friends/:id
  - Update: PUT /api/friends/:id
  - Delete: DELETE /api/friends/:id

### Tools Used 
  - Node.js & Express: Core server and routing
  - JWT Authentication: Session-based access control
  - Postman & cURL: API testing

### Course & Reference
This project is part of the Node.js and Express course provided by IBM on Coursera. For additional details on this lab, refer to the course material on Coursera.

[Course Link: Developing Backend Apps with Node.js and Express](https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express/ungradedLti/72TmD/hands-on-lab-crud-operations-with-node-js-and-express)
