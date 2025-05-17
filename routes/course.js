const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
res.json({
    message: "signup endpoint" 
})
})

courseRouter.get('/preview', (req, res) => {
res.send('Hello World!')
})



module.exports ={
    courseRouter: courseRouter
}