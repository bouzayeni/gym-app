const Person = require('../models/personModel');

// @desc get all users info
const loadPersonInfos = async(req, res) => {
    try {
       const personInfos = await Person.find();
       res.json(personInfos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:`something went wrong`});
    }
}
module.exports = { loadPersonInfos };