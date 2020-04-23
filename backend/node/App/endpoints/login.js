const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 

// login
// router.post('/', (req, res) => {
//     connection.query(
//         `SELECT * FROM veterinarian;`, 
//         (err, rows, fields)=>{
//         if(err) throw err
//         res.end(JSON.stringify(rows))
//     })
// })

router.post('/', (req, res) => {
    let user = req.body
    var query = `SELECT * FROM users WHERE email = ?;`
    
    connection.query(query, [user.email], function(err, res) {
        
    }
    
    res.end 
})

// Attempts to login user if found in database
// User.loginUser = function(login_user, result){
//     sql.query('SELECT * FROM users WHERE email = ?;',[login_user.email], function(err, res){
//       if(err) {
//         result({"code":400,"response":"Fatal SQL error ocurred"}, null);
//       }
//       else {
//         //if email was found
//         if(res.length > 0) {
//           //if passwords match
//           if(res[0].password == login_user.password){
//             result(null,{
//               "code":200,
//               "response":"Login was sucessfull.",
//               "id":res[0].id,
//               "email":res[0].email,
//               "first_name":res[0].first_name,
//               "last_name":res[0].last_name,
//               "password":res[0].password,
//               "role_id":res[0].role_id,
//               "zipcode":res[0].zipcode
//               });
//           }
//           //if passwords are different
//           else{
//             result({"code":204,"response":"Email and/or password do not match."},null);
//           }
//         }
//         //if no email id found
//         else{
//           result({"code":204,"response":"Email does not exist."},null);
//         }
//       }
//     });
//   }

router.post('/register', (req, res) => { // receive event data from the frontend
    let newUser = req.body;
    console.log(newUser);
    if (!newUser.email || 
        !newUser.password || 
        !newUser.first_name || 
        !newUser.last_name || 
        !newUser.role_id || 
        !newUser.zipcode) {
        res.status(400).json({
          "code": 400,
          "response":"Please provide input for all fields."
        });
        return;
    }

    connection.query(
        `INSERT INTO users (email, password, first_name, last_name, role_id, imageURL)\
                        VALUES ('${newUser.email}', '${newUser.password}', '${newUser.first_name}', '${newUser.last_name}', '${newUser.role_id}', '${newUser.imageURL}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

module.exports = router 
