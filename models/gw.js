/**
 * Created by Anastasiia on 07.08.2017.
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Validate Function to check title length
let titleLengthChecker = (title) => {
    if (!title) {
        return false;
    } else {
        if (title.length < 3 || title.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};


const titleValidators = [
    {
        validator: titleLengthChecker,
        message: 'Title must be at least 3 characters but no more than 50'
    }
];

// Validate Function to check body length
let bodyLengthChecker = (body) => {
    if (!body) {
        return false;
    } else {
        if(body.length < 10 || body.length > 100000) {
            return false;
        } else {
            return true;
        }
    }
};


const bodyValidators = [
    {
        validator: bodyLengthChecker,
        message: 'Link may not exceed 100000 charecters.'
    }
];



const gwSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    body: { type: String, required: true, validate: bodyValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() }
});



module.exports = mongoose.model('Gw', gwSchema);