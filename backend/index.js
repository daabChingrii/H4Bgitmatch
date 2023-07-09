var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb+srv://prajukta:dummyuser123@cluster0.zbay1v9.mongodb.net/registration',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

// User Schema
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phno: String,
    password: String
});

var User = mongoose.model("User", userSchema);

// Sign up route
app.post("/sign_up", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var newUser = new User({
        name: name,
        email: email,
        phno: phno,
        password: password
    });

    newUser.save((err) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
        return res.redirect('signup_success.html');
    });
});

// Login route
app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email: email, password: password })
        .then(user => {
            if (!user) {
                return res.status(401).send("Invalid email or password");
            }

            // Perform further actions for successful login
            // For example, you can set a session or JWT token

            return res.redirect('login_success.html');
        })
        .catch(err => {
            throw err;
        });
});


app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on PORT 3000");
