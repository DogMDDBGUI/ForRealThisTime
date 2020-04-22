'use strict';
module.exports = function(app) {
  var autoAppUser = require('../controller/appControllerUser');

  // REGISTER USER
  app.route('/api/register')
    .post(autoAppUser.create_user);
  // LOGIN USER
  app.route('/api/login')
    .post(autoAppUser.login_user);
  // DELETE USER
  app.route('/api/delete_user/:id')
    .delete(autoAppUser.delete_user);
  // UPDATE USER
  app.route('/api/user/email/:id')
    .put(autoAppUser.update_email);
  app.route('/api/user/first_name/:id')
    .put(autoAppUser.update_fname);
  app.route('/api/user/last_name/:id')
    .put(autoAppUser.update_lname);
  app.route('/api/user/password/:id')
    .put(autoAppUser.update_pass);
};