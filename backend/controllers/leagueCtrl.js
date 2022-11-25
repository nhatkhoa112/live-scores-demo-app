const League = require('../models/league.model');
const Country = require('../models/country.model')


const leagueController = {
    getAllLeagues: async (req, res) => {
        try {
            const leagues = await League.find().populate({path: 'seasons.country', options: {strictPopulate: false}}).populate({path: 'seasons.teams', options: {strictPopulate: false}})
            res.json({ msg: 'All leagues are here:', leagues });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getLeagueById: async (req, res) => {
        try {
            const leagueId = req.params.id;
            const newLeague = await League.findOne({ leagueId });
            if (!newLeague) res.status(400).json({ msg: 'the leagueId is wrong' })
            res.status(200).json({ msg: "The league is hear", data: newLeague })
        } catch {
            res.status(500).json({ msg: error.message });

        }
    },

    create: async (req, res) => {
        try {
            const { name, seasons, league_id } = req.body

            const league = await League.findOne({ name });
            if (league)
                return res.status(400).json({ msg: 'This league is already exists.' });
            const newLeague = await new League({
                league_id, name, seasons
            });
            await newLeague.save();

            const newCountry = await Country.findOne(newLeague.country)
            newCountry.leagues.push(newLeague._id);
            await newCountry.save();
            console.log(newCountry)
            

            res.json({ msg: 'Created a country', data: { league: newLeague } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const league = await League.findByIdAndDelete(req.params.id);
            res.json({ msg: 'Deleted a league', data: { league } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteAll: async (req, res) => {
        try {
            const leagues = await League.findByIdAndDelete();
            res.json({ msg: 'Deleted all leagues', datas: { leagues } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const league = await League.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
            if (!league) return res.status(404).json({ msg: 'The league is not exists.' });
            res.status(200).json({ msg: 'Updated league successfully', leauge });

        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    }
}

module.exports = leagueController;