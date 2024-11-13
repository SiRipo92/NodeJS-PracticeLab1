const express = require('express');
const routes = require('./routes/users.js');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const app = express();
const PORT = 5000;

// Initialize session middleware with options
/* This tells the express app to use the session middleware
- secret - a random unique string key used to authenticate a session
- resave - takes a boolean value and enables the session to be stored back to the session store,
            even if the session was never modified during the request
- saveUninitialized - allows any uninitialized session to be stored back to the session store.
                    When a session is created but not modified, it is referred to as uninitialized.


Default values for 'resave' and 'saveUninitialized' are true, but the default is deprecated.
So, set the appropriate value according to the use case. */

app.use(session({ secret: "fingerpint", resave: true, saveUninitialized: true }));

// Middleware for user authentication
/* Implementation of the Authentiation middleware where all the endpoints starting with /user go through.
It will retrieve the authorization details from the session and verify it.
IF the token is validated, the user is authenticated and control is passed on to the next endpoint handler.
If the token is invalid, the user is not authenticated and an error message is returned.
*/
app.use("/user", (req, res, next) => {
    // Check if user is authenticated
    if (req.session.authorization) {
        let token = req.session.authorization['accessToken']; // Access Token
        
        // Verify JWT token for user authentication
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user; // Set authenticated user data on the request object
                next(); // Proceed to the next middleware
            } else {
                return res.status(403).json({ message: "User not authenticated" }); // Return error if token verification fails
            }
        });
        
        // Return error if no access token is found in the session
    } else {
        return res.status(403).json({ message: "User not logged in" });
    }
});

// Parse JSON request bodies
app.use(express.json());

// User routes
app.use("/user", routes);

// Login endpoint
/* 
1) A user logs into the system providing a username.
2) An access token that is valid for one hour is generated. (60 * 60 signifies the time in seconds)
3) This access token is set into the session object  to ensure that only authenticated users can access the endpoints for  1 hour
*/

app.post("/login", (req, res) => {
    const user = req.body.user;
    if (!user) {
        return res.status(404).json({ message: "Body Empty" });
    }
    // Generate JWT access token
    let accessToken = jwt.sign({
        data: user
    }, 'access', { expiresIn: 60 * 60 });

    // Store access token in session
    req.session.authorization = {
        accessToken
    }
    return res.status(200).send("User successfully logged in");
});

// Start server
app.listen(PORT, () => console.log("Server is running at port " + PORT));
