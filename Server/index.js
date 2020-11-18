const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const User = require('./models/user');
const Vendor = require('./models/vendor');
const List = require('./models/list');
const { get } = require('http');


mongoose.connect('mongodb+srv://gotikar751:Shanu2704@cluster0.12dr0.mongodb.net/it-task?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
  ).then(()=>{
    console.log('connected to the database');
});

app.use(bodyparser.json());


// route to register User
app.post('/user/register' , async(req,res)=>{
    const {username , password} = req.body;
try{
    const CreatedUser = new User({
        username,
        password,
    });

    const result = await CreatedUser.save();
    res.send(result);
}
    catch(err){
        console.log(err);
    } 
});


// route to register Vendor
app.post('/vendor/register' , async(req,res)=>{
    const {mobile , password} = req.body;

    try{
        const CreatedVendor = new Vendor({
            mobile,
            password,
        });
    
        const result = await CreatedVendor.save();
        res.status(1);
    }
        catch(err){
            console.log(err);
        }
});

// route to login User
app.post('/user/login' , async(req,res)=>{
    const {username , password} = req.body;

    try{
        const result = await User.findOne({
        username,
        password,
    })
    if(result){
            console.log(result)
            res.status(200).send('ok')

    }
    else
    res.status(200).send('Nope')

    }
    catch(err){
        console.log(err);
    }  
});


// route to login vendor
app.post('/vendor/login' , async(req,res)=>{
    const {mobile , password} = req.body;

    try{
        const result = Vendor.find({
        mobile,
        password,
    });

    res.status(200).send('ok')
    }
    catch(err){
        console.log(err);
    }
})

// route for Vendor to make List 
app.post('/vendor/make_list' , async(req,res)=>{
    const {Items} = req.body;
    try{
         const CreatedList = new List({
             items:Items

    });
    const result = await CreatedList.save();

    res.status(200).send(result);

    }
    catch(err){
        console.log(err);
    }
   

});

// route to get List
app.get('/vendor/list' , async(req,res)=>{

    const get_list = await List.find();
    res.status(200).send(get_list);
});



app.listen(3000,()=>{
    console.log('server started at port 3000');
})