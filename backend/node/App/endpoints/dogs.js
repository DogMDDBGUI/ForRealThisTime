const connection = require('../model/dbConn') // connected db 
const express = require('express')
const router = express.Router() // express route handler 


router.get('/breeds/', (req, res) => {
    connection.query(
        `SELECT id, name 
        FROM breed;`,
        (err, rows, fields) => {
            if(err) throw err
            res.end(JSON.stringify(rows))
        }
    );
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    connection.query(
        `SELECT id, breed_id, owner_id, dog.name, age, gender, conditions, imageURL 
        FROM dog 
        WHERE id = '${id}';`,
        (err, rows, fields) => {
            if(err) throw err
            res.end(JSON.stringify(rows[0]))
        }
    );
})

router.post('/', (req, res) => { // receive event data from the frontend
    let newDog = req.body;
    if (!newDog.breed_id || 
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
        `INSERT INTO dog (breed_id, owner_id, name, age, gender, conditions, imageURL)\
                        VALUES ('${newDog.breed_id}', '${newDog.owner_id}', '${newDog.name}', '${newDog.age}', 
                                '${newDog.gender}', '${newDog.conditions}', '${newDog.imageURL}');`,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Add Dog Successfully"});
        }
    );
})

//starting puts

router.put('/', (req, res) => {
    let dog = req.body;

    connection.query(
        `UPDATE dog
         SET name = '${dog.name}',
             gender = '${dog.gender}',
             breed_id = '${dog.breed_id}',
             imageURL = '${dog.imageURL}',
             age = '${dog.age}',
             conditions = '${dog.conditions}'
         WHERE id = '${dog.id}';
        `,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Update Successfully"});
        }
    );
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;

    connection.query(
        `DELETE FROM dog WHERE id = ${id};
        `,
        (err, rows, fields) => {
            if (err) throw err
            res.json({"code": "200", "msg": "Delete Successfully"});
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
