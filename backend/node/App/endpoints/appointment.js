const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 

router.get('/:id', (req, res) => {
    let id = req.params.id;
    connection.query(
        `SELECT appointment.id, time, date, name AS dog_name, first_name AS vet_first_name, last_name AS vet_last_name, owner_id, status, vet_id 
        FROM ((appointment 
        INNER JOIN users ON appointment.vet_id = users.id) 
        INNER JOIN dog ON appointment.dog_id = dog.id)
        WHERE vet_id = ${id} or owner_id = ${id};`,
        (err, rows, fields) => {
            if (err) throw err
            res.end(JSON.stringify(rows));
        }
    );
})

router.post('/', (req, res) => { // receive event data from the frontend
    let newAppt = req.body;
    if (!newAppt.time || 
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
        `INSERT INTO appointment (time, date, dog_id, status, vet_id)\
                        VALUES ('${newAppt.time}', '${newAppt.date}', '${newAppt.dog_id}', '${newAppt.status}', '${newAppt.vet_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

//adding puts

router.put('/status/:id', (req, res) => {

    let id = req.params.id;
    let status  = req.body.status;

    connection.query(
        `UPDATE appointment\
            SET status = '${status}'\
            WHERE id = '${id}';`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Update Successfully"});
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
