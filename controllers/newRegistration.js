const Event = require('../models/Event');

exports.newRegistration = async(req, res, next) => {
     try {
          Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, docs) {
           console.log(req.body);
           return res.status(201).json({
             success: true,
             data: docs
           }); 
         });
       } catch (err) {
          console.log(err);
       }
}

