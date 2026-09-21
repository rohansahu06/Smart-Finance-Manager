const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../Models/User");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/auth/google/callback"
        },

        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails?.[0]?.value;

                if (!email) {
                    return done(null, false);
                }

                let user = await User.findOne({
                    googleId: profile.id
                });

                if (!user) {
                    user = await User.findOne({
                        email: email.toLowerCase()
                    });
                }

                if (!user) {
                    user = await User.create({
                        name: profile.displayName,
                        email: email.toLowerCase(),
                        phone: "",
                        googleId: profile.id,
                        profilePicture: profile.photos?.[0]?.value || "",
                        authProvider: "google"
                    });
                }

                return done(null, user);

            } catch (error) {
                return done(error, null);
            }
        }
    )
);

module.exports = passport;