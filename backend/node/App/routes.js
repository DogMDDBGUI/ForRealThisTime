module.exports = function(app) {
    const loginRoute = require('./endpoints/login');
    const vetsRoute = require('./endpoints/vets');
    const dogsRoute = require('./endpoints/dogs');
    const usersRoute = require('./endpoints/users');
    const appointmentsRoute = require('./endpoints/appointment');

    app.use('/api/login', loginRoute);  
    app.use('/api/vets', vetsRoute);
    app.use('/api/dogs', dogsRoute);
    app.use('/api/users', usersRoute);
    app.use('/api/appointments', appointmentsRoute);
}