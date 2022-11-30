const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    taskname:{
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:Date,
        required:true
    },
    isdone:{
        type: Boolean,
        required:true,
        default: false
    }

},{
    timestamps:true
});

const task = mongoose.model('Task',taskSchema);

module.exports = task;