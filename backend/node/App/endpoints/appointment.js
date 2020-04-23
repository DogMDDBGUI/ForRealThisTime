const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 


router.post('/appointment', (req, res) => { // receive event data from the frontend
    let newAppt = req.body;
    console.log(newAppt);
    if (!newAppt.id || 
        !newAppt.time || 
        !newAppt.date || 
        !newAppt.dog_id || 
        !newAppt.status || 
        !newAppt.vet_id) {
        res.status(400).json({
          "code": 400,
          "response":"Please provide input for all fields."
        });
        return;
    }

    connection.query(
        `INSERT INTO appointment (id, time, date, dog_id, status, vet_id)\
                        VALUES ('${newAppt.id}', '${newAppt.time}', '${newVet.date}', '${newAppt.dog_id}', '${newAppt.status}', '${newAppt.vet_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

module.exports = router 
