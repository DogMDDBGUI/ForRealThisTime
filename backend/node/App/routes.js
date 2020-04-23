module.exports = function(app) {
    const loginRoute = require('./endpoints/login');
    const vetsRoute = require('./endpoints/vets');
    const dogsRoute = require('./endpoints/dogs');
    const usersRoute = require('./endpoints/users');

    app.use('/api/login', loginRoute);  
    app.use('/api/vets', vetsRoute);
    app.use('/api/dogs', dogsRoute);
    app.use('/api/users', userRoute);
  
}