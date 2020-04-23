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

    let user = req.body;

    connection.query(
        `SELECT * FROM users WHERE email='${user.email}'
                             AND password='${user.password}';`, 
        (err, rows, fields)=>{
        if(err) throw err
        if (rows.length == 0) {
            res.json({code: 204, msg: "Invalid login"});
        }
        res.end(JSON.stringify(rows[0]))
    })
})


router.post('/register', (req, res) => { // receive event data from the frontend
    let newUser = req.body;
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
        `INSERT INTO users (email, password, first_name, last_name, role_id, imageURL, zipcode)\
                        VALUES ('${newUser.email}', '${newUser.password}', '${newUser.first_name}', '${newUser.last_name}', '${newUser.role_id}', '${newUser.imageURL}', '${newUser.zipcode}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

module.exports = router 
