const {Router} = require("express");

const userRouter = Router();
const {userModel} = require("../db");


userRouter.post("/signup", async function(req, res){
    const {email, password, firstName, lastName}= req.body; //toto : adding zod validation
    // todo: hash the password so plaintext pw is not stored in the db

    //todo : put under try and catch error block
    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup succeeded" 
    })
})

userRouter.post("/signin", function(req, res){
    res.json({
        message: "signup endpoint" 
    })
})

userRouter.get("/purchases", function(req, res){
    res.json({
        message: "signup endpoint" 
    })
})



module.exports ={
    userRouter: userRouter
}