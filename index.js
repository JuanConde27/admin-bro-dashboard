const express = require('express');
const connectDB = require('./db/connectDB');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

const start = async () => {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
    }
};

start();

//admin bro
const adminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

//modelos
const User = require('./models/Users');
const Post = require('./models/Post');

adminBro.registerAdapter(AdminBroMongoose);

const adminBroOptions = new adminBro({
    resources: [
        { resource: User },
        { resource: Post }
    ],
    rootPath: '/admin'
});

const router = AdminBroExpress.buildRouter(adminBroOptions);

app.use(adminBroOptions.options.rootPath, router);
app.use(express.json());

app.listen(3000, () => {
    console.log('Example app listening on port http://localhost:3000/admin');
    }
);