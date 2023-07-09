const moongoose = require("mongoose")

mongoose.connect("mongodb+srv://prajukta:dummyuser123@cluster0.zbay1v9.mongodb.net/registration")
    .then(() => {
        console.log("Database connected.")
    })
    .catch(() => {
        console.log("Failed to connect.")
    })

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const LogInCollection = mongoose.model("Collection1", LogInSchema);

module.export = LogInCollection;