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
                name, seasons
            } = req.body

            const player = await Player.findOne({ name })
            if (player) res.status(400).json({ msg: "This player is exist" })
            else {
                const newPlayer = await new Player({
                    name, seasons
                });
                // Add player to teams - seasons

                const playerSeason = newPlayer.seasons[newPlayer.seasons.length - 1]
                playerSeason.leagues.map(async (league) => {

                    const newTeam = await Team.findOne(league.team);
                    const seasonUpdate = newTeam.seasons.find((season) => {
                        return season.season === playerSeason.season
                    })
                    const leagueUpdate = seasonUpdate.leagues.find((newLeague) => newLeague.league.toString() === league.league.toString())

                    if (leagueUpdate.players.findIndex(player => {
                    }) === -1) {
                        leagueUpdate.players.push(newPlayer._id)
                    }
                    await newTeam.save();
                })

                await newPlayer.save();
                res.json({ msg: 'Created a player', data: { player: newPlayer } });
            }

        } catch (error) {

            res.status(500).json({ msg: error.message });
        }
    },

    addTeamToPlayer: async (req, res) => {
        try {
            const playerId = req.params.playerId;
            const { teamId } = req.params
            const newPlayer = await Player.findOne({ _id: playerId })
            const newTeam = await Team.findOne({ _id: teamId })

            // Add player to team
            let playerSeason = newPlayer.seasons[newPlayer.seasons.length - 1]
            playerSeason.leagues.map(async (league) => {
                const newTeam = await Team.findOne(league.team);
                // Find the season object will change in array seasons
                const seasonUpdate = newTeam.seasons.find((season) => {
                    return season.season === playerSeason.season
                })
                // Find the league object will change in array leagues
                const leagueUpdate = seasonUpdate.leagues.find((newLeague) => newLeague.league.toString() === league.league.toString())
                // Add player to array player of league obj if player is not exists
                if (leagueUpdate.players.findIndex(player => {
                }) === -1) {
                    leagueUpdate.players.push(newPlayer._id)
                }
                await newTeam.save();
            })

            // Add team to player


            await newTeam.save()
            res.status(200).json({
                msg: 'The team is added to player,',
                team: newTeam, player: newPlayer
            }
            )

        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
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