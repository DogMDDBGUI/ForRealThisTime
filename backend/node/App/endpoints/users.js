const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 

// get user by id
router.get('/:id', (req, res) => {
    let id = req.params.id;

    connection.query(
        `SELECT id, email, first_name, last_name, role_id, zipcode, imageURL 
        FROM users WHERE id='${id}';`,
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
        `SELECT id, email, first_name, last_name, role_id, zipcode, imageURL  
        FROM users WHERE email='${email}';`,
        function (err, rows, fields) {
            if(err) throw err
            if (rows.length == 0) {
                res.json({code: 204, msg: "Invalid email"});
            }
            res.end(JSON.stringify(rows[0]))
        }
    )
})

// update user
router.put('/', (req, res) => {
    let user = req.body;
    
    connection.query(
        `UPDATE users
         SET first_name = '${user.first_name}',
             last_name = '${user.last_name}',
             zipcode = '${user.zipcode}',
             imageURL = '${user.imageURL}'
         WHERE id = '${user.id}';
        `,
        (err, rows, fields) => {
            if (err) {
                res.json({code: 204, msg: "invalid update"});
                return;
            }
        }
    )

    // vet
    if (user.role_id == 1) {
        connection.query(
            `UPDATE veterinarian
             SET years_experience = '${user.years_experience}',
                 skills = '${user.skills}',
                 ratings = '${user.ratings}'
             WHERE user_id = '${user.id}';
            `,
            (err, rows, fields) => {
                if (err) {
                    res.json({code: 204, msg: "invalid update"});
                    return;
                }
                res.json({"code": "200", "msg": "Update successfully"});
            }
        )   
    }         
    else {
        res.json({"code": "200", "msg": "Update successfully"});
    }
})

router.get('/dogs/:id', (req, res) => {
    let id = req.params.id;

    connection.query(
        `SELECT dog.id, breed_id, owner_id, dog.name, age, gender, conditions, imageURL, breed.name as breed_name 
        FROM dog 
        INNER JOIN breed ON breed.id = dog.breed_id
        WHERE owner_id = '${id}';`,
        (err, rows, fields) => {
            if(err) throw err
            res.end(JSON.stringify(rows))
        }
    )
})

module.exports = router