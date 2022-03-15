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

    User.find()
    .then((result) => {
        for(i of result) {
            console.log(i.email)  
        }
        if(user.email == i.email) {
            console.log("Email already in use")
            res.send({message: "This email is already in use"})
        }else{
            user.save()
            res.send({message: "You are now registerd"})
            console.log("user added to database")
        }
    }).catch(err => console.log(err)); 
}) 



// check if user is registerd befor logging in
 app.post("/api/login", (req, res) =>{
    console.log("request made")

    const user = new User(req.body)

    User.find()
    .then((result) => {
        for(let i of result) {
            console.log(i.email)
        }

        /*  if(user.email !== i.email && user.password !== i.password) {
             console.log("Details does not match")
             res.send({message: "Details does not match"})
         }else{
             console.log("you are logged in")
             res.send({message: "You are now logged in"})
         }   */
     
    }).catch(err => console.log(err)); 
    

})
 
