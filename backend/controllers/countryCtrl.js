const Country = require('../models/country.model')

const countryController = {
    getAllCountries: async (req, res) => {
        try {
            const countries = await Country.find().populate({ path: "leagues", model: "League" })
            res.json({ msg: 'All countries are here:', countries });
        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    },

    getCountryById: async (req, res) => {
        try {
            const countryId = req.params.id;
            const newCountry = await Country.findOne({ countryId });
            if (!newCountry) res.status(400).json({ msg: 'the countryId is wrong' })
            res.status(200).json({ msg: "The country is hear", data: {country: newCountry} })
        } catch {
            res.status(500).json({ msg: error.message });

        }
    },

    create: async (req, res) => {
        try {
            const { name, leagues, imageUrl, country_id,  } = req.body

            const country = await Country.findOne({ name });
            if (country)
                return res.status(400).json({ msg: 'This country is already exists.' });
            const newCountry = await new Country({
                country_id,
                name,
                leagues,
                imageUrl,
                
            });
            await newCountry.save();
            res.json({ msg: 'Created a country', data: { country: newCountry } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const country = await Country.findByIdAndDelete(req.params.id);
            res.json({ msg: 'Deleted a Country', data: { country } });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const country = await Country.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
            if (!country) return res.status(404).json({ msg: 'The country is not exists.' });
            res.status(200).json({ msg: 'Updated country successfully', country });

        } catch (error) {
            res.status(500).json({ msg: error.message });

        }
    }
}

module.exports = countryController;