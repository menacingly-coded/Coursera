const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
    res.json({
        message: "signup endpoint" 
    })
})

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "coursepreview endpoint" 
    })
})



module.exports ={
    courseRouter: courseRouter
}