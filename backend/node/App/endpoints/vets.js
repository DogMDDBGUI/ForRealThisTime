const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 


router.post('/', (req, res) => { // receive event data from the frontend
    let newVet = req.body;
    if (!newVet.user_id || 
        !newVet.years_experience || 
        !newVet.skills || 
        !newVet.ratings) {
        res.status(400).json({
          "code": 400,
          "response":"Please provide input for all fields."
        });
        return;
    }

    connection.query(
        `INSERT INTO veterinarian (user_id, years_experience, area_id, skills, ratings)\
                        VALUES ('${newVet.user_id}', '${newVet.years_experience}', 0, '${newVet.skills}', '${newVet.ratings}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Add Successfully"});
        }
    );
}) 

router.get('/:id', (req, res) => {
    let id = req.params.id;

    connection.query(
        `SELECT * from veterinarian \
            WHERE user_id = '${id}';`,
        (err, rows, fields) => {
            if (err) throw err
            if (rows.length) {
                res.end(JSON.stringify(rows[0]));
            }
            else {
                res.json({code: 204, msg: "invalid id"});
            }
        }
    );
});


router.get('/', (req, res) => {
    connection.query(
        `SELECT id, years_experience, skills, ratings, email, first_name, last_name, role_id, zipcode, imageURL 
            FROM veterinarian \
            INNER JOIN users
            ON veterinarian.user_id = users.id;`,
        (err, rows, fields) => {
            if (err) throw err
            if (rows.length) {
                res.end(JSON.stringify(rows));
            }
            else {
                res.json({code: 204, msg: "invalid id"});
            }
        }
    );
});


/*
router.put('/users/vet/area_id:user_id', async (req, res) => {

    let user_id = req.param('user_id');
    let area_id = req.param('area_id');

    connection.query(
        `UPDATE veterinarian (area_id)\
                        SET ('${user_id.area_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});


router.put('/users/vet/skills:user_id', async (req, res) => {

    let user_id = req.param('user_id');
    let skills = req.param('skills');

    connection.query(
        `UPDATE veterinarian (skills)\
                        SET ('${user_id.skills}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});


router.put('/users/vet/years_experience:user_id', async (req, res) => {

    let user_id = req.param('user_id');
    let years_experience = req.param('years_experience');

    connection.query(
        `UPDATE veterinarian (years_experience)\
                        SET ('${user_id.years_experience}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});


router.put('/users/vet/ratings:user_id', async (req, res) => {

    let user_id = req.param('user_id');
    let ratings = req.param('ratings');

    connection.query(
        `UPDATE veterinarian (ratings)\
                        SET ('${user_id.ratings}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});
*/
module.exports = router 
