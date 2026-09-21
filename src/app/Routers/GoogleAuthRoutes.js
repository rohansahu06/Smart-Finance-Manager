const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("../Config/passport");

const router = express.Router();


// =====================================
// GOOGLE LOGIN
// =====================================

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);


// =====================================
// GOOGLE CALLBACK
// =====================================

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "http://localhost:3000/login"
    }),

    (req, res) => {

        const token = jwt.sign(
            {
                userId: req.user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.redirect(
            `http://localhost:3000/?token=${token}`
        );
    }
);


module.exports = router;