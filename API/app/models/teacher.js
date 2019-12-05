const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    image: {
        type: String,
        trim: true,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName:{
        type: String,
        trim: true,
        required: true
    },
    grade: {
        type: String,
        trim: true,
        required: true
    },
    domain: {
        type: String,
        trim: true,
        required: true
    },
    group: {
        type: String,
        trim: true,
        required: true
    },
    articles : {
        type: String,
        trim: true,
        required: true
    }
});


module.exports = mongoose.model('Teacher', teacherSchema);
