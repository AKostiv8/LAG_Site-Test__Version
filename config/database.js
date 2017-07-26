/**
 * Created by Anastasiia on 16.07.2017.
 */
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/' + this.db,
    secret: crypto,
    db: 'lag-site-2017'
}