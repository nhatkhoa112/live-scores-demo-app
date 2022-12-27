const Match = require('../models/match.model');
const Team = require('../models/team.model')
const League = require('../models/league.model')


const matchController = {
    getAllMatches: async (req, res) => {
        try {
            const matches = await Match.find().populate({ path: "homeTeam.team", model: "Team" }).populate({ path: "awayTeam.team", model: "Team" })
            res.json({ msg: 'All matches are here:', matches });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getMatches: async (req, res) => {
        try {
            const matches = await Match.find()
                .populate({ path: "homeTeam.team", model: "Team" })
                .populate({ path: "awayTeam.team", model: "Team" })
                .populate({
                    path: "league", model: "League", populate: {
                        path: 'seasons.country',
                        model: 'Country',
                    }
                })
                .sort({ "createdAt": -1 }).limit(20)
            res.json({ msg: 'All matches are here:', matches });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getMatchesByDay: async (req, res) => {
        try {
            const matches = await Match.find()
            let day = req.query.day
            let matchesByDay = matches.filter((match) => match.day.includes(day))
            res.status(200).json({msg:  `All matches in ${day}: `, matches: matchesByDay  })
        } catch (error) {
            res.status(500).json({ msg: error.message });

        }

    },


    getMatchById: async (req, res) => {
        try {
            const matchId = req.params.id;

            const newMatch = await Match.findOne({ _id: matchId })
                .populate({ path: "homeTeam.team", model: "Team", select: "-seasons" })
                .populate({ path: "awayTeam.team", model: "Team", select: "-seasons" })
                .populate({ path: "homeTeam.players.changeStatus.changePlayer", model: "Player", select: "-seasons" })
                .populate({ path: "awayTeam.players.changeStatus.changePlayer", model: "Player", select: "-seasons" })
                .populate({ path: "homeTeam.players.player", model: "Player", select: "-seasons" })
                .populate({ path: "awayTeam.players.player", model: "Player", select: "-seasons" })

            if (!newMatch) res.status(400).json({ msg: 'The matchId is wrong' })
            else {
                res.status(200).json({ msg: 'This match is here: ', data: { match: newMatch } })
            }

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    create: async (req, res) => {
        try {
            const {
                day, league, season, stadium, referee, tiket, homeTeam, awayTeam, status, teamStats
            } = req.body

            const newDate = new Date(day[0], day[1] - 1, day[2], day[3], day[4], day[5])

            const newMatch = await new Match({
                day: newDate, league, season, stadium, referee, tiket, homeTeam, awayTeam, status, teamStats
            });

            // // Add match to league - seasons
            const newLeague = await League.findOne({ _id: newMatch.league });
            const seasonUpdate = newLeague.seasons.find((season) => { return season.season === newMatch.season })
            seasonUpdate.matches.push(newMatch._id)

            // Add match to team - seasons
            const newTeamHome = await Team.findOne(newMatch.homeTeam.team)
            const newTeamAway = await Team.findOne(newMatch.awayTeam.team)
            let seasonUpdateTeamHome = newTeamHome.seasons.find((seasonF) => seasonF.season === newMatch.season)
            let seasonUpdateTeamAway = newTeamAway.seasons.find((seasonF) => seasonF.season === newMatch.season)
            let seasonLeagueUpdateHome = seasonUpdateTeamHome.leagues.find((league) => league.league.toString() === newMatch.league.toString())
            let seasonLeagueUpdateAway = seasonUpdateTeamAway.leagues.find((league) => league.league.toString() === newMatch.league.toString())

            seasonLeagueUpdateHome.matches.push(newMatch._id)
            seasonLeagueUpdateAway.matches.push(newMatch._id)

            await newMatch.save();
            await newLeague.save();
            await newTeamAway.save()
            await newTeamHome.save()

            res.json({ msg: 'Created a match', data: { match: newMatch, league: newLeague }, });
        } catch (error) {

            res.status(500).json({ msg: error.message });
        }
    },

    addPlayerToHomeTeam: async (req, res) => {
        try {
            const { playerId, matchId } = req.params
            const { position, number, official, fouls, goal, changeStatus } = req.body;

            const newMatch = await Match.findOne({ _id: matchId })
                .populate({ path: "homeTeam.team", model: "Team", select: "-seasons" })
                .populate({ path: "awayTeam.team", model: "Team", select: "-seasons" })
                .populate({ path: "homeTeam.players.changeStatus.changePlayer", model: "Player", select: "-seasons" })
                .populate({ path: "awayTeam.players.changeStatus.changePlayer", model: "Player", select: "-seasons" })
                .populate({ path: "homeTeam.players.player", model: "Player", select: "-seasons" })
                .populate({ path: "awayTeam.players.player", model: "Player", select: "-seasons" })

            if (!newMatch) res.json({ msg: "The match is not existed" })
            newMatch.homeTeam.players.push({ player: playerId, position, number, official, fouls, goal, changeStatus })


            await newMatch.save()

            res.status(200).json({ msg: "the player added in home team:", match: newMatch, })

        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    },

    addPlayerToAwayTeam: async (req, res) => {
        try {
            const { playerId, matchId } = req.params
            const { position, number, official, fouls, goal, changeStatus } = req.body;

            const newMatch = await Match.findOne({ _id: matchId })
                .populate({ path: "homeTeam.team", model: "Team", select: "-seasons" })
                .populate({ path: "awayTeam.team", model: "Team", select: "-seasons" })
                .populate({ path: "homeTeam.players.changeStatus.changePlayer", model: "Player", select: "-seasons" })
                .populate({ path: "awayTeam.players.changeStatus.changePlayer", model: "Player", select: "-seasons" })
                .populate({ path: "homeTeam.players.player", model: "Player", select: "-seasons" })
                .populate({ path: "awayTeam.players.player", model: "Player", select: "-seasons" })

            if (!newMatch) res.json({ msg: "The match is not existed" })
            newMatch.awayTeam.players.push({ player: playerId, position, number, official, fouls, goal, changeStatus })


            await newMatch.save()

            res.status(200).json({ msg: "the player added in away team:", match: newMatch, })
        } catch (error) {
            res.status(500).json({ msg: error.message })
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