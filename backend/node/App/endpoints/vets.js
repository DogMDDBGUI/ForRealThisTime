const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 


router.post('/users/vet', (req, res) => { // receive event data from the frontend
    let newVet = req.body;
    console.log(newVet);
    if (!newVet.user_id || 
        !newVet.years_experience || 
        !newVet.area_id || 
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
                        VALUES ('${newVet.user_id}', '${newVet.years_experience}', '${newVet.area_id}', '${newVet.skills}', '${newVet.ratings}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

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
