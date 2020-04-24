const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 

// get user by id
router.get('/:id', (req, res) => {
    let id = req.params.id;

    connection.query(
        `SELECT * FROM users WHERE id='${id}';`,
        function (err, rows, fields) {
            if(err) throw err
            if (rows.length == 0) {
                res.json({code: 204, msg: "Invalid id"});
            }
            res.end(JSON.stringify(rows[0]))
        }
    )
})


// get user by email
router.get('/email/:email', (req, res) => {
    let email = req.params.email;

    connection.query(
        `SELECT * FROM users WHERE email='${email}';`,
        function (err, rows, fields) {
            if(err) throw err
            if (rows.length == 0) {
                res.json({code: 204, msg: "Invalid email"});
            }
            res.end(JSON.stringify(rows[0]))
        }
    )
})

module.exports = router