const Team = require('../models/team.model');
const League = require('../models/league.model')


const teamController = {
    getAllTeams: async (req, res) => {
        try {
            const teams = await Team.find().populate({path: "seasons.league"}).populate({path: "seasons.matches"})
            res.json({ msg: 'All teams are here:', teams });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const { 
                seasons, name, flagUrl
             } = req.body

            const team = await Team.findOne({name})
             if(team)
             res.status(400).json({msg: "This team is exists"})
            const newTeam = await new Team({
                seasons, name, flagUrl
            });
            

            const newLeague = await League.findOne(newTeam.seasons[newTeam.seasons.length - 1].league);
            const seasonUpdate = newLeague.seasons.find((season) => season.name === newTeam.seasons[newTeam.seasons.length - 1].name ) 
            
            seasonUpdate.teams.push(newTeam._id)
            
            await newLeague.save();
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