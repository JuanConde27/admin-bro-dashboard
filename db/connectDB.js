const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://condejuan27:condealdana09@cluster0.4vnudsb.mongodb.net/base_adminbro', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
