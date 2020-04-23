module.exports = function(app) {
    const loginRoute = require('./endpoints/login');
    const userRoute = require('./endpoints/users');
    app.use('/api/login', loginRoute);
    app.use('/api/users', userRoute); 
}