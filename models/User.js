const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mot_de_passe: {
        type: String,
        required: true,
    },
    roles: {
        type: Array,
        default: ["Member"]
    }
});

module.exports = Users = mongoose.model("Users", UserSchema, "users");
