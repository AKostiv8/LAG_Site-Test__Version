/**
 * Created by Anastasiia on 07.08.2017.
 */

const User = require('../models/user');
const Gw = require('../models/gw');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {


    router.post('/newMagazine', (req, res) => {
        if (!req.body.title) {
        res.json({ success: false, message: 'Title is required.' });
    } else {
        if (!req.body.body) {
            res.json({ success: false, message: 'Link is required.' });
        } else {
            if (!req.body.createdBy) {
                res.json({ success: false, message: 'Creator is required.' });
            } else {
                const gw = new Gw({
                    title: req.body.title,
                    body: req.body.body,
                    createdBy: req.body.createdBy
                });

                gw.save((err) => {
                    if (err) {
                        if (err.errors) {
                            if (err.errors.title) {
                                res.json({ success: false, message: err.errors.title.message });
                            } else {
                                if (err.errors.body) {
                                    res.json({ success: false, message: err.errors.body.message });
                                } else {
                                    res.json({ success: false, message: err });
                                }
                            }
                        } else {
                            res.json({ success: false, message: err });
                        }
                    } else {
                        res.json({ success: true, message: 'Post saved!' });
                }
            });
            }
        }
    }
});

    return router;
};