const Event = require('../models/Event');

// @desc    Get all Events
// @route   GET /api/v1/Events
// @access  Public
exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.status(200).json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add event
// @route   POST /api/v1/events
// @access  Public
exports.addEvent = async (req, res, next) => {
  try {
    const { title, entry_fee, desc, eligibility, keywords, registration_count} = req.body;
    console.log(req.body);
    const event = await Event.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: event
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      console.log(messages);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete event
// @route   DELETE /api/v1/event/:id
// @access  Public
exports.deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if(!event) {
      return res.status(404).json({
        success: false,
        error: 'No event found'
      });
    }

    await event.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}
// @desc    Edit event details
// @route   POST /api/v1/event/:id
// @access  Public
exports.editEvent = async(req, res, next) => {
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