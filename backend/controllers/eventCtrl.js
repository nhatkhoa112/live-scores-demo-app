const Event = require('../models/event.model')

const eventController = {
    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find();
            res.status(200).json({ msg: "All events are here: ", events })
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getEventsInMatch: async (req, res) => {
        try {
            const matchId = req.params.id;
            const events = await Event.find()
            const eventsInMatch = events.filter((event) => event.match === matchId);
            res.status(200).json({ msg: "All events in match are here: ", events: eventsInMatch })
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    createEvent: async (req, res) => {
        try {
            const { event_id, timeAt, match, eventAtMinute, foul, ballContext } = req.body;
            const event = await Event.findOne({ event_id });
            if (event) res.status(400).json({ msg: "This eventId is exist" })
            const newEvent = await new Event({
                event_id, timeAt, match, eventAtMinute, foul, ballContext
            })
            res.status(200).json({ msg: "The event is created: ", event: newEvent })
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },

    deleteEvent: async (req, res) => {
        try {
            const id = req.params.id
            const events = await Event.findByIdAndDelete({_id: id});
            res.status(200).json({msg: "The event is removed", events})
         
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    updateEvent: async (req, res) => {
        try {
            const id = req.params.id
            const events = await Event.findByIdAndUpdate({_id: id}, {...req.body}, {timestamps: true});
            res.status(200).json({msg: "The event is removed", events})
         
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },
      

    

    // getScoreHomeTeamMatch: async (req, res) => {

    // },

    // getScoreHomeTeamMatch: async (req, res) => {

    // }
}

module.exports = eventController;