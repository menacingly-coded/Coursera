const express = require('express')
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouterRouter} = require("./routes/admin")
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main(){
  await mongoose.connect("mongodb+srv://shreya0987edu:<db_password>@cluster0.2raftwq.mongodb.net/")
  app.listen(3000);
  console.log("listening to port 3000");
}