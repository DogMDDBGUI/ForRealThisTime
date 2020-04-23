'use strict';
var sql = require('./dbConn.js');

// This is the query file for handling the API requests for the users table
// The associated file which controls this file is appControllerUser.js

// User object constructor
var User = function(user) {
  this.id = user.id;
  this.email = user.email;
  this.password = user.password;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.role_id = user.role_id
};
// Creates user to be inserted into database
User.createUser = function(newUser, result) {
  sql.query("INSERT INTO users (`id`, `email`, `password`, 'first_name', 'last_name', 'role_id') VALUES ('" + newUser.id + "', '" + newUser.email + "', '" + newUser.password + "', '" + newUser.first_name + "', '" + newUser.last_name + "', '" + newUser.role_id + "');",
    function(err, res) {
      if (err) {
        result({"code":204,"response":"Email is already taken."}, null);
      }
      else {
        result(null,{"code":200,"response":"User creation was sucessfull."});
      }
    }
  );
};
// Attempts to login user if found in database
User.loginUser = function(login_user, result){
  sql.query('SELECT * FROM users WHERE email = ?;',[login_user.email], function(err, res){
    if(err) {
      result({"code":400,"response":"Fatal SQL error ocurred"}, null);
    }
    else {
      //if email was found
      if(res.length > 0) {
        //if passwords match
        if(res[0].password == login_user.password){
          result(null,{
            "code":200,
            "response":"Login was sucessfull.",
            "id":res[0].id,
            "email":res[0].email,
            "first_name":res[0].first_name,
            "last_name":res[0].last_name,
            "password":res[0].password,
            "role_id":res[0].role_id,
            "zipcode":res[0].zipcode
            });
        }
        //if passwords are different
        else{
          result({"code":204,"response":"Email and/or password do not match."},null);
        }
      }
      //if no email id found
      else{
        result({"code":204,"response":"Email does not exist."},null);
      }
    }
  });
}
// Delete user account
User.deleteUserByID = function(id,result) {
  sql.query("DELETE from users WHERE id = ?;", [id], function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, {"code":200,"response":"Deleted USER with UID="+id});
    }
  });
};
// Update email by user id
User.updateEmailByID = function(id, email, result) {
  sql.query("UPDATE users SET email = ? WHERE id = ?;", [email, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "email":email
        });
    }
  });
}
// Update first name by user id
User.updateFNameByID = function(id, first_name, result) {
  sql.query("UPDATE users SET first_name = ? WHERE id = ?;", [first_name, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "first_name":first_name
        });
    }
  });
}
// Update last name by user id
User.updateLNameByID = function(id, last_name, result) {
  sql.query("UPDATE users SET last_name = ? WHERE id = ?;", [last_name, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "last_name":last_name
        });
    }
  });
}
// Update password by user id
User.updatePassByID = function(id, password, result) {
  let hash = sha512(password);
  sql.query("UPDATE users SET password = ? WHERE id = ?;", [hash, id], function(err, res){
    if(err){
      result(err,null);
    }
    else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull."
        });
    }
  });
}

module.exports = User;
