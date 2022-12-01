const League = require('../models/league.model');
const Country = require('../models/country.model')


const leagueController = {
    getAllLeagues: async (req, res) => {
        try {
            const leagues = await League.find().populate({ path: 'seasons.country', options: { strictPopulate: false } }).populate({ path: 'seasons.teams', options: { strictPopulate: false } })
            res.json({ msg: 'All leagues are here:', leagues });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getLeagueByCountryName: async (req, res) => {
        const countryName = req.params.name
        let newCountryName = countryName.split("-").join(" ")
        try {
            const leagues = await League.find().populate({ path: 'seasons.country', options: { strictPopulate: false } }).populate({ path: 'seasons.teams', options: { strictPopulate: false } });
            const newLeagues = leagues.filter((league) => {
                return league.seasons[league.seasons.length - 1].country.name === newCountryName
            })
            res.status(200).json({ msg: `All leagues of ${countryName} are heare:`, data: { leagues: newLeagues } })
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getLeagueById: async (req, res) => {
        try {
            const leagueId = req.params.id;
            const newLeague = await League.findOne({ _id: leagueId }).populate({ path: 'seasons.teams'});
            if (!newLeague) res.status(400).json({ msg: 'the leagueId is wrong' })
            res.status(200).json({ msg: "The league is hear", data: { league: newLeague } })
        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    },

    create: async (req, res) => {
        try {
            const { name, seasons, isFav, isTab } = req.body
            const newLeague = await new League({
                name, seasons, isFav, isTab
            });
            await newLeague.save();

            const newCountry = await Country.findOne(newLeague.seasons[0].country)
            newCountry.leagues.push(newLeague._id);
            await newCountry.save();
            console.log(newCountry)


            res.json({ msg: 'Created a league', data: { league: newLeague } });
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