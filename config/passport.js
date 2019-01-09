const jwtSecret = require("./jwtConfig");
const bcrypt = require("bcryptjs");
const { createUser, findUser, userExists } = require("../server/db/users");

const BCRYPT_SALT_ROUNDS = 12;

const passport = require("passport"),
  localStrategy = require("passport-local").Strategy,
  JWTstrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
      session: false
    },
    (req, username, password, done) => {
        console.log('email req below');
        
        console.log(req.body.email);
        
      try {
        findUser(req.body.email).then(user => {
            console.log(user);
            
          if (user != null) {
            console.log("username or email already taken");
            return done(null, false, {
              message: "username or email already taken"
            });
          } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              createUser({
                username,
                password: hashedPassword,
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name
              }).then(user => {
                console.log("user created");
                return done(null, user);
              });
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    (username, password, done) => {
        console.log(username);
        
      try {
        userExists(username).then(user => {
            console.log(user);
            
          if (user === null) {
            return done(null, false, { message: "bad username" });
          } else {
            const userPass = user.password
            console.log(password);
            console.log(userPass);
            
            
            bcrypt.compare(password, userPass).then(response => {
              if (response !== true) {
                console.log("passwords do not match");
                return done(null, false, { message: "passwords do not match" });
              }
              console.log("user found & authenticated");
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret
};

passport.use(
  "jwt",
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
        console.log(jwt_payload.id);
        //
        // the payload isn't coming through properly. So, I've hardcoded 'test'
        //
      userExists(jwt_payload.id).then(user => {
          console.log(user);
          
        if (user) {
          console.log("user found in db in passport");
          done(null, user);
        } else {
          console.log("user not found in db");
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
