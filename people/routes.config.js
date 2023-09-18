const peopleController = require('./controllers/people.controller');

exports.routesConfig = function (app) {
    app.get('/people/:dni', [
        peopleController.getPeopleByDni
    ]);
}