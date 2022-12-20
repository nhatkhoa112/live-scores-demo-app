const Team = require('../models/team.model');
const League = require('../models/league.model')


const teamController = {
    getAllTeams: async (req, res) => {
        try {
            const teams = await Team.find().populate({ path: "seasons.leagues.league" }).populate({ path: "seasons.leagues.matches" }).populate({ path: "seasons.leagues.players" })
            res.json({ msg: 'All teams are here:', teams });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    addLeagueToTeam: async (req, res) => {
        try {
            const teamId = req.params.teamId
            const { 
                season,
                leagueId,
                played,
                wins,
                draws,
                looses,
                goalsFor,
                goalsAgainst,
                goalsDiff,
                points,
                playedHome,
                winsHome,
                drawsHome,
                loosesHome,
                goalsForHome,
                goalsAgainstHome,
                goalsDiffHome,
                pointsHome,
                playedAway,
                winsAway,
                drawsAway,
                loosesAway,
                goalsForAway,
                goalsAgainstAway,
                goalsDiffAway,
                pointsAway,
            } = req.body
            const newTeam = await Team.findOne({ _id: teamId })
            if (!newTeam) res.status(400).json({ msg: "The team is not exist" })
           
            const seasonUpdate = newTeam.seasons.find((season) => { return season.season === req.body.season})
            console.log(seasonUpdate)

            seasonUpdate.leagues.push({
                league: leagueId,
                played,
                wins,
                draws,
                looses,
                goalsFor,
                goalsAgainst,
                goalsDiff,
                points,
                playedHome,
                winsHome,
                drawsHome,
                loosesHome,
                goalsForHome,
                goalsAgainstHome,
                goalsDiffHome,
                pointsHome,
                playedAway,
                winsAway,
                drawsAway,
                loosesAway,
                goalsForAway,
                goalsAgainstAway,
                goalsDiffAway,
                pointsAway,
            })
            const newLeague = await League.findOne({ _id: leagueId })
            const seasonUpdateLeauge = newLeague.seasons.find((season) => season.season === req.body.season)
            
            seasonUpdateLeauge.teams.push(teamId)
            await newLeague.save();
            await newTeam.save()
            
            res.status(200).json({ msg: "This team is update: ", data: { team: newTeam, league: newLeague } })
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },



    getTeamByName: async (req, res) => {
        try {
            const newName = req.params.name
            const name = newName.split("-").join(" ");
            const newTeam = await Team.findOne({ name });
            if (!newTeam) res.status(400).json({ msg: 'the team is not exist' })
            if (newTeam) res.status(200).json({ msg: "The team is hear", data: { team: newTeam } })
        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    },

    getTeamById: async (req, res) => {
        try {
            const teamId = req.params.id;
            const newTeam = await Team.findOne({ teamId });
            if (!newTeam) res.status(400).json({ msg: 'the teamId is wrong' })
            res.status(200).json({ msg: "The team is hear", data: { team: newTeam } })
        } catch {
            res.status(500).json({ msg: error.message });

        }
    },

    create: async (req, res) => {
        try {
            const {
                seasons, name, flagUrl
            } = req.body

            const team = await Team.findOne({ name })
            if (team)
                res.status(400).json({ msg: "This team is exists" })
            const newTeam = await new Team({
                seasons, name, flagUrl
            });

            newTeam.seasons[newTeam.seasons.length - 1].leagues.map(async (league) => {
                const newLeague = await League.findOne(league.league)
                const seasonUpdate = newLeague.seasons.find((season) => season.name === newTeam.seasons[newTeam.seasons.length - 1].name)
                seasonUpdate.teams.push(newTeam._id)
                await newLeague.save();
            })
            await newTeam.save();
            res.json({ msg: 'Created a team', data: { team: newTeam } });
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

module.exports = teamController;

