const express = require('express');
const axios = require('axios')
const bodyPaser = require('body-parser')
const app = express();
const port = 3000
app.use(bodyPaser.json())

app.post('/events' , (req,res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events' , event)
    axios.post('http://localhost:4001/events' , event)
    axios.post('http://localhost:4003/events' , event)

    res.send({status : 'Ok'})
})

app.listen(port , ()=> { 
    console.log(`server runuing hot on ${port}`);
})