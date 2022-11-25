const Match = require('../models/match.model');
const Team = require('../models/team.model')
const League = require('../models/league.model')
const { v4: uuidv4 } = require('uuid');


const matchController = {
    getAllMatches: async (req, res) => {
        try {
            const matches = await Match.find()
            res.json({ msg: 'All matches are here:', matches });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getMatchById: async (req, res) => {
        try {
            const matchId = req.params.id;
            const newMatch = await Match.findOne({ matchId });
            if (!newMatch) res.status(400).json({ msg: 'The matchId is wrong' })
            res.status(500).json({ msg: 'This match is here: ', data: newMatch })

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const {
                time, league, season, stadium, referee, tiket, summartEvent, homeTeam, awayTeam
            } = req.body

            const newMatch = await new Match({
                time, league, season, stadium, referee, tiket, summartEvent, homeTeam, awayTeam
            });
            await newMatch.save();

            // Add match to league - seasons
            const newLeague = await League.findOne(newMatch.league);
            const seasonUpdate = newLeague.seasons.find((season) => season.season === newMatch.season)
            seasonUpdate.matches.push(newMatch._id)
            await newLeague.save();

            // Add match to team - seasons
            const newTeamHome = await Team.findOne(newMatch.homeTeam.team)
            const newTeamAway = await Team.findOne(newMatch.awayTeam.team)
            let seasonsUpdateTeamHome = newTeamHome.seasons.find((season) => season.season === newMatch.season)
            let seasonsUpdateTeamAway = newTeamAway.seasons.find((season) => season.season === newMatch.season)
            seasonsUpdateTeamHome.matches.push(newMatch._id)
            seasonsUpdateTeamAway.matches.push(newMatch._id)
            await newTeamHome.save()
            await newTeamAway.save()

            res.json({ msg: 'Created a match', data: { match: newMatch } });
        } catch (error) {

            res.status(500).json({ msg: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const team = await Team.findByIdAndDelete(req.params.id);
            res.json({ msg: 'Deleted a team', data: { team } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteAll: async (req, res) => {
        try {
            const teams = await Team.findByIdAndDelete();
            res.json({ msg: 'Deleted all team', datas: { teams } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const team = await Team.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
            if (!team) return res.status(404).json({ msg: 'The team is not exists.' });
            res.status(200).json({ msg: 'Updated team successfully', team });

        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    }
}

module.exports = matchController;