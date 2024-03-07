const express = require('express');
const app = express();
require('dotenv').config();
const router = express.Router();
const users = require('../Expressjs/routes/users.js')

app.use('/v1',users);

// app.post('/createUser',(req,res)=>{
//     res.status(201).send({message:"createdUser"})
// })
// app.get('/getAllusers',(req,res)=>{
//     res.status(200).send({message:'successFully get users'})

// })
// app.put('/updatedUser',(req,res)=>{
//     res.status(200).send({message:'userUpdatedSuccessful'})
// })
// app.delete('/deleteUser',(req,res)=>{
//     res.status(200).send({message:'userUpdatedSuccessful'})
// })

const port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})