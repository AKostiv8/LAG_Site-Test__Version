/**
 * Created by Anastasiia on 22.08.2017.
 */

const User = require('../models/user');
const Event = require('../models/event');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {


router.post('/newEvent', (req, res) => {
    if (!req.body.date) {
        res.json({ success: false, message: 'Date is required.' });
    } else {
        if (!req.body.event) {
            res.json({ success: false, message: 'Event is required.' });
        } else {
            if (!req.body.createdBy) {
                res.json({ success: false, message: 'Creator is required.' });
            } else {
                const event = new Event({
                    date: req.body.date,
                    event: req.body.event,
                    createdBy: req.body.createdBy
                });

                event.save((err) => {
                    if (err) {
                        if (err.errors) {
                            if (err.errors.date) {
                                res.json({ success: false, message: err.errors.date.message });
                            } else {
                                if (err.errors.event) {
                                    res.json({ success: false, message: err.errors.event.message });
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

    router.get('/allEvents', (req, res) => {
        Event.find({}, (err, events) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            if (!events) {
        res.json({ success: false, message: 'No events found.' });
    } else {
        res.json({ success: true, events: events });
    }
}
}).sort({ '_id': -1 });
});



    router.get('/singleEvent/:id', (req, res) => {
        if(!req.params.id){
        res.json({ success: false, message: 'No event ID was provided'})
    } else {
        Event.findOne({_id: req.params.id }, (err, event) => {
            if(err){
                res.json({ success: false, message: 'Not valid event ID'});
            } else {
                if(!event){
            res.json({ success: false, message: 'Event not found'});
        } else {
            res.json({ success: true, event: event});
        }
    }
    });
    }
});



    router.put('/updateEvent', (req, res) => {
        if(!req.body._id){
        res.json({ success: false, message: 'No event ID provided'});
    } else {
        Event.findOne({_id: req.body._id }, (err, event) => {
            if(err){
                res.json({ success: false, message: 'Not valid event ID'});
            } else {
                if(!event){
            res.json({ success: false, message: 'Event ID was not found'});
        } else {
            event.date = req.body.date;
            event.event = req.body.event;
            event.save((err) => {
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


//     router.delete('/deleteGw/:id', (req, res) => {
//         if(!req.params.id) {
//         res.json({success: false, message: 'No ID provided'});
//     } else {
//         Gw.findOne({_id: req.params.id}, (err, gw) => {
//             if(err){
//                 res.json({success:false, message: 'Invalid ID!'});
//             } else {
//                 if(!gw){
//             res.json({success: false, message: 'Magazine was not found!'});
//         } else {
//             gw.remove((err) => {
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