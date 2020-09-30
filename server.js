const express = require('express')
const cors = require('cors')
const db = require('./connect.js')

const app = new express()
app.use(cors());
app.post('/',function(req,res){
    const polygon = {
        coordinates:req.body
    };
    
    res.send('yes i receive')

    
});

app.get('/name',function(req,res){
    const names=['bryan','BICK']
    res.send(names);
});




app.listen(3000);