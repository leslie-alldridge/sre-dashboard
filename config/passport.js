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
      try {
        findUser(req.body.email).then(user => {
          if (user != null) {
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
      try {
        userExists(username).then(user => {
          if (user === null) {
            return done(null, false, { message: "bad username" });
          } else {
            const userPass = user.password;

            bcrypt.compare(password, userPass).then(response => {
              if (response !== true) {
                return done(null, false, { message: "passwords do not match" });
              }

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
      userExists(jwt_payload.id).then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
