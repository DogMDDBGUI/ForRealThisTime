const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 


router.post('/users/dogOwner', (req, res) => { // receive event data from the frontend
    let newOwner = req.body;
    console.log(newOwner);
    if (!newOwner.user_id || 
        !newOwner.vet_id) {
        res.status(400).json({
          "code": 400,
          "response":"Please provide input for all fields."
        });
        return;
    }

    connection.query(
        `INSERT INTO dogOwner (user_id, vet_id)\
                        VALUES ('${newOwner.user_id}', '${newOwner.vet_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

//adding puts

router.put('/users/dogOwner/vet_id:user_id', async (req, res) => {

    let user_id = req.param('user_id');
    let vet_id = req.param('vet_id');

    connection.query(
        `UPDATE dogOwner (years_experience)\
                        SET ('${user_id.vet_id}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});

module.exports = router 
