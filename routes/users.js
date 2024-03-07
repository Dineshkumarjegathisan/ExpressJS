const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Get Resuest');
})

router.get('/getUsers',(req,res)=>{
    res.send('successFully got Usres ')
})
router.put('/updateUser',(req,res)=>{
    res.send('successFully updated Usres ')
})
router.delete('/deleteUser',(req,res)=>{
    res.send('successFully deleted Usres ')
})

// dynamicRoute

router.get('/getUserById/:id',(req,res)=>{
    res.send(`this is ${req.params.id} user `);
})

module.exports = router ;