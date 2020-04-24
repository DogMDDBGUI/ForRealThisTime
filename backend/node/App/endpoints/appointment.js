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

//adding puts

router.put('/appointment/status:id', (req, res) => {

    let id = req.param('id');
    var status = req.param('status');

    connection.query(
        `UPDATE appointment (status)\
                        SET ('${id.status}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});

router.put('/appointment/vet_id:id', (req, res) => {

    let id = req.param('id');
    let vet_id = req.param('vet_id');

    connection.query(
        `UPDATE appointment (vet_id)\
                        SET ('${id.vet_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});

router.put('/appointment/dog_id:id', (req, res) => {

    let id = req.param('id');
    let dog_id = req.param('dog_id');

    connection.query(
        `UPDATE appointment (dog_id)\
                        SET ('${id.dog_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});

module.exports = router 
