const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    createdOn: {
        required: true,
        type: Date,
        default: Date.now
    },
    dueOn: {
        required: true,
        type: Date,
        default: () => new Date(+new Date() + 3*24*60*60*1000)
        //automatically adds 3 days to the created date
    },
    assignedTo: String,
})

module.exports = mongoose.model('Tasks', taskSchema);