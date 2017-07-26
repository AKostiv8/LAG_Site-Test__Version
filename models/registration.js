/**
 * Created by Anastasiia on 24.07.2017.
 */

const Schema = mongoose.Schema;

const newspaperSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

module.exports = mongoose.model('Newspaper', newspaperSchema);