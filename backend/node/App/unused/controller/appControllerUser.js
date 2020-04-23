'use strict';
var User = require('../model/appUser.js');

// This is the controller file for handling the API requests for the users table
// The associated file with actual SQL queries is appUser.js

// Register user
exports.create_user = function(req,res){
  // gen user obj
  var new_user = new User(req.body);
  // handles empty input
  if (!new_user.email || !new_user.password || !new_user.first_name || !new_user.last_name || !new_user.role_id) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }
  else{
    // if input is provided, create user
    User.createUser(new_user, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Login user
exports.login_user = function(req,res){
  // gen user obj
  var login_user = new User(req.body);
  // handles empty input
  if(!login_user.email || !login_user.password){
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }
  else{
    // if input is provided, login user
    User.loginUser(login_user, function(err, user){
      if(err){
        res.json(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
// Delete user account
exports.delete_user = function(req,res){
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    User.deleteUserByID(req.params.id, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update user email
exports.update_email = function(req,res){
  // handle missing ID num
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing email from body
  else if(!req.body.email){
    res.status(400).json({
      "code": 400,
      "response":"Missing email in API request body."
    });
  }
  else{
    // update email function
    User.updateEmailByID(req.params.id, req.body.email, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
// Update user first name
exports.update_fname = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing first name
  else if(!req.body.first_name){
    res.status(400).json({
      "code": 400,
      "response":"Missing first name in API request body."
    });
  }
  else{
    // update name function
    User.updateFNameByID(req.params.id, req.body.first_name, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
// Update user last name
exports.update_lname = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing last name
  else if(!req.body.last_name){
    res.status(400).json({
      "code": 400,
      "response":"Missing last name in API request body."
    });
  }
  else{
    // update last name function
    User.updateLNameByID(req.params.id, req.body.last_name, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
// Update user password
exports.update_pass = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  // handle missing password
  else if(!req.body.password){
    res.status(400).json({
      "code": 400,
      "response":"Missing password in API request body."
    });
  }
  else{
    // update password hash func
    User.updatePassByID(req.params.id, req.body.password, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
