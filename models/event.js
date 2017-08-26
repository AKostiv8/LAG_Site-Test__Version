/**
 * Created by Anastasiia on 22.08.2017.
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Validate Function to check title length
let dateLengthChecker = (date) => {
    if (!date) {
        return false;
    } else {
        if (date.length < 3 || date.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};


const dateValidators = [
    {
        validator: dateLengthChecker,
        message: 'Date format must be at least 3 characters but no more than 50'
    }
];

// Validate Function to check body length
let eventLengthChecker = (event) => {
    if (!event) {
        return false;
    } else {
        if(event.length < 5 || event.length > 100) {
            return false;
        } else {
            return true;
        }
    }
};


const eventValidators = [
    {
        validator: eventLengthChecker,
        message: 'Description may not exceed 100 charecters.'
    }
];



const eventSchema = new Schema({
    date: { type: String, required: true, validate: dateValidators },
    event: { type: String, required: true, validate: eventValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() }
});



module.exports = mongoose.model('Event', eventSchema);