const Event = require('../models/Event');

exports.attendance = async(req, res, next) => {
     try {
          const event = await Event.findById(req.params.id);
          const userEmail = req.body.email;
          const code = req.params.code;
          console.log(event.registered_users[0].name);
          if(code == event.registered_users[0].code) {
               console.log(event.registered_users[0].name);
               const user = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, docs) {
                    console.log("Attendance marked for" + event.registered_users[0].name);
                    return res.status(201).json({
                      success: true,
                      data: docs
                    }); 
               });
          }
          

     } catch (err) {
          console.log(err)
     }
}