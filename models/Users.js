const moongose = require('mongoose');

const UserSchema = moongose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    age: {
        type: Number,
        min: 18,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = moongose.model('User', UserSchema);

