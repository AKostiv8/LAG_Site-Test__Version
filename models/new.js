/**
 * Created by Anastasiia on 25.11.2017.
 */


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Validate Function to check title length
let headlineLengthChecker = (headline) => {
    if (!headline) {
        return false;
    } else {
        if (headline.length < 3 || headline.length > 75) {
            return false;
        } else {
            return true;
        }
    }
};


const headlineValidators = [
    {
        validator: headlineLengthChecker,
        message: 'Headline format must be at least 3 characters but no more than 75'
    }
];

// Validate Function to check body length
let descriptionLengthChecker = (description) => {
    if (!description) {
        return false;
    } else {
        if(description.length < 30 || description.length > 2000) {
            return false;
        } else {
            return true;
        }
    }
};


const descriptionValidators = [
    {
        validator: descriptionLengthChecker,
        message: 'Description may not exceed 2000 charecters.'
    }
];


let positionChecker = (position) => {
    if ((position == "Right") || (position == "Left")) {
        return true;
    } else {
            return false;
    }
};

const positionValidators = [
    {
        validator: positionChecker,
        message: 'You should choose "Right" or "Left" position'
    }
];

const newSchema = new Schema({
    headline: { type: String, required: true, validate: headlineValidators },
    description: { type: String, required: true, validate: descriptionValidators },
    position: {type: String, required: true, validate:positionValidators, possibleValues: ['Right','Left']},
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() }
});



module.exports = mongoose.model('New', newSchema);