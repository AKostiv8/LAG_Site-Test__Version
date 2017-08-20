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

    router.get('/allGws', (req, res) => {
        Gw.find({}, (err, gws) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            if (!gws) {
                res.json({ success: false, message: 'No magazines found.' });
            } else {
                res.json({ success: true, gws: gws });
            }
        }
        }).sort({ '_id': -1 });
    });

    router.get('/singleGw/:id', (req, res) => {
        if(!req.params.id){
            res.json({ success: false, message: 'No magazine ID was provided'})
        } else {
            Gw.findOne({_id: req.params.id }, (err, gw) => {
                if(err){
                    res.json({ success: false, message: 'Not valid magazine ID'});
                } else {
                    if(!gw){
                        res.json({ success: false, message: 'Magazine not found'});
                    } else {
                        res.json({ success: true, gw: gw});
                    }
                }
            });
        }
    });

    router.put('/updateGw', (req, res) => {
        if(!req.body._id){
            res.json({ success: false, message: 'No magazine ID provided'});
        } else {
            Gw.findOne({_id: req.body._id }, (err, gw) => {
                if(err){
                    res.json({ success: false, message: 'Not valid magazine ID'});
                } else {
                    if(!gw){
                        res.json({ success: false, message: 'Magazine ID was not found'});
                    } else {
                        gw.title = req.body.title;
                        gw.body = req.body.body;
                        gw.save((err) => {
                            if(err){
                                res.json({success: false, message: err});
                            } else {
                                res.json({success: true, message: 'Post updated!'});
                            }
                        });
                    }
                }
            });
        }
    });


    router.delete('/deleteGw/:id', (req, res) => {
        if(!req.params.id) {
            res.json({success: false, message: 'No ID provided'});
        } else {
            Gw.findOne({_id: req.params.id}, (err, gw) => {
                if(err){
                    res.json({success:false, message: 'Invalid ID!'});
                } else {
                    if(!gw){
                        res.json({success: false, message: 'Magazine was not found!'});
                    } else {
                        gw.remove((err) => {
                            if(err){
                                res.json({success: false, message: err});
                            } else {
                                res.json({success: true, message: 'Post deleted!'});
                            }
                        });
                    }
                }
            });
        }
    });
    return router;
};