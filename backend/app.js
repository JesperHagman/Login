const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/user")
const app = express()
const bodyParser = require('body-parser');  
const cors = require('cors');

app.use(cors());                            // Allowing cross-origin requests
app.use(bodyParser.json());  

const dbURI ="mongodb+srv://Jesper-H:jesper123@cluster.gqr6d.mongodb.net/node-users?retryWrites=true&w=majority"
mongoose.connect(dbURI)
 .then(() => {
    console.log('connected to db');
    app.listen(3001);
 })
 .catch((err) => {
     console.log(err);
 })
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add user to mongoDB-databas from register page
app.post("/api/register", async (req, res) =>{
    console.log("request made")

    const user = new User(req.body)
    const emailLowerCase = user.email.toLowerCase()

    const isEmailAlreadyRegistered = await User.exists({ email: emailLowerCase });
    
    if (isEmailAlreadyRegistered) {
        console.log("Email already in use")
        res.send({message: "This email is already in use"})
    } else {
        user.save()
        res.send({message: "You are now registerd"})
        console.log("user added to database")
    } 
});

// check if user is registerd befor logging in
 app.post("/api/login", async (req, res) =>{
    console.log("request made")

    const user = new User(req.body)
    const emailLowerCase = user.email.toLowerCase()
    const isPasswordCorecct = user.password

    const isEmailCorecct = await User.exists({ email: emailLowerCase});
    const passwordCheck = await User.exists({ password: isPasswordCorecct });
    
    if (isEmailCorecct && passwordCheck) {
        res.send({message: "You are now logged in"})
        res.send({loggedIn: true})
        console.log("You are now logged in")
    } else {
        console.log("Details does not match")
        res.send({message: "Details does not match"})
    } 
});
