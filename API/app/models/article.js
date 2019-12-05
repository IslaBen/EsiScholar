const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: {
        type: String,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    abstract: {
        type: String,
        trim: true,
    },
    author: {
        type :[{
            family :{
                type: String,
                trim: true,
                required: true
            },
            given : {
                type: String,
                trim: true,
                required: true
            },
        }],
        require : true,
    },
    issued:{
        type: {
                "date-parts": [[{
                    type :String,
                    trim: true,
                    required: true
                },
                {
                    type :Number,
                    trim: true,
                    required: true
                },
                {
                    type :Number,
                    trim: true,
                    required: true
                }]],
        },
        required : true,
    },
});


module.exports = mongoose.model('Article', articleSchema);
