const Event = require('../models/event.model')
const Match = require('../models/match.model')

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
            const { match, eventAtMinute, foul, ballContext, penaltyShootout } = req.body;
            const newEvent = await new Event({
                match, eventAtMinute, foul, ballContext, penaltyShootout
            })


            const newMatch = await Match.findOne({ _id: match })
            newMatch.summaryEvents.push( newEvent._id)

            await newMatch.save()
            await newEvent.save()

            res.status(200).json({ msg: "The event is created: ", event: newEvent})


        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },

    deleteEvent: async (req, res) => {
        try {
            const id = req.params.id
            const events = await Event.findByIdAndDelete({ _id: id });
            res.status(200).json({ msg: "The event is removed", events })

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    updateEvent: async (req, res) => {
        try {
            const id = req.params.id
            const events = await Event.findByIdAndUpdate({ _id: id }, { ...req.body }, { timestamps: true });
            res.status(200).json({ msg: "The event is removed", events })

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