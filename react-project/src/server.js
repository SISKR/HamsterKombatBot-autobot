const express = require('express');
const axios = require('axios');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();
const PORT = process.env.PORT || 3001;

// Use express session to store user information
app.use(
  session({
    secret: 'ee6298c1bc202b219f84e10ecaabf63c076d3b9b',
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// GitHub OAuth configuration
passport.use(
  new GitHubStrategy(
    {
      clientID:  '9ba714f99c64f4fbe8a4',
      clientSecret:  'ee6298c1bc202b219f84e10ecaabf63c076d3b9b',
      callbackURL: 'http://localhost:3001/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user information in the session
      return done(null, profile);
    }
  )
);

// Serialize user information to store in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user information from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

// GitHub login route
app.get('/github/login', passport.authenticate('github'));

// GitHub callback route
app.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

// GitHub user route to fetch authenticated user data
app.get('/github/user', isAuthenticated, (req, res) => {
  res.json(req.user);
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
