const Favorite = require('../models/favorite.model');
const League = require('../models/league.model')
const Match = require('../models/match.model')


const favoriteController = {
    getAllFavorite: async (req, res) => {
        try {
            const favorites = await Favorite.find().populate({ path: "favLeagues.leagues" }).populate({ path: "favMatches.matches" })
            res.json({ msg: 'All teams are here:', teams });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    addMatch: async (req, res) => {
        try {
            const matchId = req.params.matchId;
            const favorites = await Favorite.find()
            const newFavorite = favorites[0]
            newFavorite.favMatches.push(matchId);
            const match = await Match.findOne({matchId})
            match.isFav = true;
            match.save()
            favorites.save()

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    addLeague: async (req, res) => {
        try {
            const leagueId = req.params.leagueId;
            const favorites = await Favorite.find()
            const newFavorite = favorites[0]
            newFavorite.favLeagues.push(leagueId);
            const league = await League.findOne({leagueId})
            league.isFav = true;
            league.save()
            favorites.save()

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteMatch: async (req, res) => {
        try {
            const matchId = req.params.matchId;
            const favorites = await Favorite.find()
            const newFavorite = favorites[0]
            newFavorite.favMatches = newFavorite.favMatches.filter((name) => name !== matchId );
            const match = await Match.findOne({matchId})
            match.isFav = true;
            match.save()
            favorites.save()

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteLeague: async (req, res) => {
        try {
            const leagueId = req.params.leagueId;
            const favorites = await Favorite.find()
            const newFavorite = favorites[0]
            newFavorite.favMatches = newFavorite.favLeagues.filter((name) => name !== leagueId );
            const league = await League.findOne({leagueId})
            league.isFav = true;
            league.save()
            favorites.save()

        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


}

module.exports = favoriteController;