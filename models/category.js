const mongoose = require('mongoose');

const categorySchema =new mongoose.Schema({
    categoryname:{
        type: String,
        required:true
    }

},{
    timestamps:true
});

const category = mongoose.model('Category',categorySchema);

module.exports = category;