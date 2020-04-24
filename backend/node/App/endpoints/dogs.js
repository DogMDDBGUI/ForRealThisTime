const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 


router.post('/dogs', (req, res) => { // receive event data from the frontend
    let newDog = req.body;
    console.log(newDog);
    if (!newDog.id || 
        !newDog.breed_id || 
        !newDog.owner_id || 
        !newDog.name || 
        !newDog.age || 
        !newDog.gender ||
        !newDog.conditions ||
        !newDog.imageURL) {
        res.status(400).json({
          "code": 400,
          "response":"Please provide input for all fields."
        });
        return;
    }

    connection.query(
        `INSERT INTO dog (id, breed_id, owner_id, name, age, gender, conditions, imageURL)\
                        VALUES ('${newDog.id}', '${newDog.breed_id}', '${newDog.owner_id}', '${newDog.name}', '${newDog.age}', 
                                '${newDog.gender}', '${newDog.conditions}', '${newDog.imageURL}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
}) 

//starting puts

router.put('/dog/imageURL:id', async (req, res) => {

    let id = req.param('id');
    let imageURL = req.param('imageURL');

    connection.query(
        `UPDATE dog (imageURL)\
                        SET ('${id.imageURL}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});


router.put('/dog/conditions:id', async (req, res) => {

    let id = req.param('id');
    let conditions = req.param('conditions');

    connection.query(
        `UPDATE dog (conditions)\
                        SET ('${id.conditions}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});


router.put('/dog/age:id', async (req, res) => {

    let id = req.param('age');
    let age = req.param('age');

    connection.query(
        `UPDATE dog (age)\
                        SET ('${id.age}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Register Successfully"});
        }
    );
});

module.exports = router 
