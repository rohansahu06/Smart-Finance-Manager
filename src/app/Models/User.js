const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

      phone: {
            type: String,
            required: function () {
            return this.authProvider === "local";
    },
            trim: true
},

      password: {
            type: String,
            required: function () {
            return this.authProvider === "local";
       }
},

        googleId: {
            type: String,
            unique: true,
            sparse: true
        },

        profilePicture: {
            type: String,
            default: ""
        },

        authProvider: {
            type: String,
            enum: ["local", "google"],
            default: "local"
        }
    },
    {
        timestamps: true,
        collection: "LoginUser"
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;