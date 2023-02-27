const express = require('express');
const app = express();
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController');
const PORT = 5000;

const bodyParser = express.json();



app.post('/user', bodyParser, validateUser, UserController.createUser);
app.get('/user/:userId', UserController.getOneUser);
app.delete('/user/:userId', UserController.deleteOneUser);
app.put('/user/:userId', bodyParser, UserController.updataUser);
app.get('/users', UserController.getAllUsers);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

