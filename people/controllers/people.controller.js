const PeopleModel = require('../models/people.model');

exports.getPeopleByDni = (req, res) => {
    PeopleModel.findByDni(req.params.dni).then((result) => {
        res.status(200).send(result);
    });
};

exports.getPeopleById = (req, res) => {
    PeopleModel.findById(req.params.id).then((result) => {
        res.status(200).send(result);
    });
};