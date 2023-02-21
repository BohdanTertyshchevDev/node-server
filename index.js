const express = require('express');
const app = express();
const {validateUser} = require('./middlewares/index');
const UserController = require('./controllers/UserController');
const PORT = 3000;

const bodyParser = express.json();



app.post('/user', bodyParser, validateUser, UserController.createUser);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

