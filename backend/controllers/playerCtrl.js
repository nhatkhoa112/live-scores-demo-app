const Player = require('../models/player.model');
const Team = require('../models/team.model')


const playerController = {
    getAllPlayers: async (req, res) => {
        try {
            const players = await Player.find()
            res.json({ msg: 'All players are here:', players });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const {
                player_id, name, seasons
            } = req.body

            const newPlayer = await new Player({
                player_id, name, seasons
            });

            // Add player to teams - seasons
            const newTeam = await Team.findOne(newPlayer.seasons[newPlayer.seasons.length - 1].team);
            const seasonUpdate = newTeam.seasons.find((season) => season.season === newPlayer.seasons[newTeam.seasons.length - 1].season)
            seasonUpdate.players.push(newPlayer._id)
            await newTeam.save();
            await newPlayer.save();

           

            res.json({ msg: 'Created a player', data: { player: newPlayer } });
        } catch (error) {

            res.status(500).json({ msg: error.message });
        }
    },

    addTeamToPlayer: async (req, res) => {

    },

    delete: async (req, res) => {
        try {
            const player = await Player.findByIdAndDelete(req.params.id);
            res.json({ msg: 'Deleted a player', data: { player } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteAll: async (req, res) => {
        try {
            const players = await Team.findByIdAndDelete();
            res.json({ msg: 'Deleted all players', datas: { players } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const player = await Player.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
            if (!player) return res.status(404).json({ msg: 'The player is not exists.' });
            res.status(200).json({ msg: 'Updated player successfully', player });

        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    }
}

module.exports = playerController;