const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("../Config/passport");
const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect: "https://smart-finance-manager-c55t.onrender.com/login"
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
            `https://smart-finance-manager-c55t.onrender.com/?token=${token}`
        );
    }
);

module.exports = router;