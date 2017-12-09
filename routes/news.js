/**
 * Created by Anastasiia on 05.12.2017.
 */

const User = require('../models/user');
const New = require('../models/new');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {


    router.post('/newNew', (req, res) => {
        if (!req.body.headline) {
        res.json({ success: false, message: 'Headline is required.' });
    } else {
        if (!req.body.description) {
            res.json({ success: false, message: 'Description is required.' });
        } else {
            if (!req.body.position) {
                res.json({ success: false, message: 'Position is required.' });
            } else {
                if (!req.body.createdBy) {
                    res.json({success: false, message: 'Creator is required.'});
                } else {
                    const wallper = new New({
                        headline: req.body.headline,
                        description: req.body.description,
                        position: req.body.position,
                        createdBy: req.body.createdBy
                    });

                    wallper.save((err) => {
                        if (err) {
                            if (err.errors) {
                                if (err.errors.headline) {
                                    res.json({success: false, message: err.errors.headline.message});
                                } else {
                                    if (err.errors.description) {
                                        res.json({success: false, message: err.errors.description.message});
                                    } else {
                                        if (err.errors.position) {
                                            res.json({success: false, message: err.errors.position.message});
                                        } else {
                                            res.json({success: false, message: err});
                                        }
                                    }
                                }
                            } else {
                                res.json({success: false, message: err});
                            }
                        } else {
                            res.json({success: true, message: 'New saved!'});
                    }
                });
                }
            }
        }
    }
});

//     router.get('/allNews', (req, res) => {
//         Event.find({}, (err, events) => {
//         if (err) {
//             res.json({ success: false, message: err });
//         } else {
//             if (!events) {
//         res.json({ success: false, message: 'No events found.' });
//     } else {
//         res.json({ success: true, events: events });
//     }
// }
// }).sort({ '_id': -1 });
// });
//
//
//
//     router.get('/singleEvent/:id', (req, res) => {
//         if(!req.params.id){
//         res.json({ success: false, message: 'No event ID was provided'})
//     } else {
//         Event.findOne({_id: req.params.id }, (err, event) => {
//             if(err){
//                 res.json({ success: false, message: 'Not valid event ID'});
//             } else {
//                 if(!event){
//             res.json({ success: false, message: 'Event not found'});
//         } else {
//             res.json({ success: true, event: event});
//         }
//     }
//     });
//     }
// });
//
//
//
//     router.put('/updateEvent', (req, res) => {
//         if(!req.body._id){
//         res.json({ success: false, message: 'No event ID provided'});
//     } else {
//         Event.findOne({_id: req.body._id }, (err, event) => {
//             if(err){
//                 res.json({ success: false, message: 'Not valid event ID'});
//             } else {
//                 if(!event){
//             res.json({ success: false, message: 'Event ID was not found'});
//         } else {
//             event.date = req.body.date;
//             event.event = req.body.event;
//             event.save((err) => {
//                 if(err){
//                     res.json({success: false, message: err});
//                 } else {
//                     res.json({success: true, message: 'Post updated!'});
//         }
//         });
//         }
//     }
//     });
//     }
// });
//
//
//     router.delete('/deleteEvent/:id', (req, res) => {
//         if(!req.params.id) {
//         res.json({success: false, message: 'No ID provided'});
//     } else {
//         Event.findOne({_id: req.params.id}, (err, event) => {
//             if(err){
//                 res.json({success:false, message: 'Invalid ID!'});
//             } else {
//                 if(!event){
//             res.json({success: false, message: 'Event was not found!'});
//         } else {
//             event.remove((err) => {
//                 if(err){
//                     res.json({success: false, message: err});
//                 } else {
//                     res.json({success: true, message: 'Post deleted!'});
//         }
//         });
//         }
//     }
//     });
//     }
// });


    return router;
};