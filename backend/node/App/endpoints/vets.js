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

module.exports = router 
