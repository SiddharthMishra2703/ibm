const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require("../model/userSchema");
const {Article} = require("../model/articleSchema");
const {Product} = require("../model/productSchema");

router.get('/', (req, res) => {
    res.json({message:'Server Started'});
});

// register route
router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword} = req.body;
    
    if (!name || !email || !phone || !password) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        } else {
            const user = new User({ name, email, phone, password });
            await user.save();
            res.status(201).json({ message: "user registered successfuly" });
        }
        
  
    } catch (err) {
        console.log(err);
    }

});

// login route 
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        console.log(email);

        if (!email || !password) {
            return res.status(400).json({error:"Plz Filled the data"})
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);   

        if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials " });
        } else {
             // need to genereate the token and stored cookie after the password match 
            token = await userLogin.generateAuthToken();
            console.log(token);

            const test = res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                // httpOnly:true
            });
            
            res.json({ message: token });
        }
        } else {
             res.status(400).json({ error: "Invalid Credientials " });
        }

    } catch (err) {
        console.log(err);
    }
});

// all articles route
router.get("/articles", async (req, res) => {
    try{
        const allArticles = await Article.find({});
        if(allArticles){
            res.send(allArticles);
        }else{
            return res.status(422).json({ error: "No articles" });
        }
    } catch (err) {
        console.log(err);
    }
    
});

router.get("/products", async (req, res) => {
    try{
        const allProducts = await Product.find({});
        if(allProducts){
            res.send(allProducts);
        }else{
            return res.status(422).json({ error: "No products" });
        }
    } catch (err) {
        console.log(err);
    }
    
});

// // single article route
// router.get("/article/:articleId", async (req, res) =>{
//     const articleId = req.params.articleId;
    
//     if (!articleId) {
//         return res.status(422).json({ error: "id not given" });
//     }
//     try{
//         const article = await Article.findOne({_id: articleId});
//         if(article){
//             res.send(article);
//         }else{
//             return res.status(422).json({ error: "No blog found with this id" });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

module.exports = router;