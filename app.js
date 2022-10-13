// JavaScript source code
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { request, response } = require('express');
dotenv.config();

const service = require('./service');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//create
app.post('/insert', (request, response) => {
    const {Product }
});

//read
app.get('/getAll', (request, response) => {
    const db = service.getserviceInstance();

    const result = db.getAllData();

    result
        .then(data => response.json({ data: data }))
        .catch(err => console.log(err));
    
})

//update


//delete

app.listen(process.env.PORT, () => console.log('app is running'));