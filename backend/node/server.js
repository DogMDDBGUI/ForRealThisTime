const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

//mysql connection
var connection = mysql.createConnection({
  host: 'backend-db',
  port: '3306',
  user: 'manager',
  password: 'Password',
  database: 'db'
});

//set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

//create the express.js object
const app = express();

//create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

//Attempting to connect to the database.
connection.connect(function (err) {
  if (err)
    logger.error("Cannot connect to DB!");
  logger.info("Connected to the DB!");
});

//GET /
app.get('/', (req, res) => {
  res.status(200).send('Go to 0.0.0.0:3000.');
});


//POST /reset
app.post('/reset', (req, res) => {
  connection.query('drop table if exists test_table', function (err, rows, fields) {
    if (err)
      logger.error("Can't drop table");
  });
  connection.query('CREATE TABLE `db`.`test_table` (`id` INT NOT NULL AUTO_INCREMENT, `value` VARCHAR(45), PRIMARY KEY (`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);', function (err, rows, fields) {
    if (err)
      logger.error("Problem creating the table test_table");
  });
  res.status(200).send('created the table');
});

//POST /multplynumber
app.post('/multplynumber', (req, res) => {
  console.log(req.body.product);

  connection.query('INSERT INTO `db`.`test_table` (`value`) VALUES(\'' + req.body.product + '\')', function (err, rows, fields) {
    if (err){
      logger.error("Problem inserting into test table");
    }
    else {
      res.status(200).send(`added ${req.body.product} to the table!`);
    }
  });
});

//GET /checkdb
app.get('/values', (req, res) => {
  connection.query('SELECT value FROM `db`.`test_table`', function (err, rows, fields) {
    if (err) {
      logger.error("Error while executing Query");
      res.status(400).json({
        "data": [],
        "error": "MySQL error"
      })
    }
    else{
      res.status(200).json({
        "data": rows
      });
    }
  });
});

/*
// ROUTES FOR  API

// create router
var router = express.Router();


// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});



//USERS


router.get('/users/password', function (req, res) {
    var id = req.param('id');
	con.query("SELECT password FROM users WHERE id = ?",id, function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});



router.post('/users/vet', async (req, res) => {

	var id = req.param('id');
	var email = req.param('email');
	var password = req.param('password');
	var first_name = req.param('first_name');
	var last_name = req.param('last_name');
    var role_id = req.param('role_id');
    var years_experience = req.param('years_experience');
    var area_id = req.param('area_id');
    var ratings = req.param('ratings');
  
	con.query("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)", [id, email, password, first_name, last_name, role_id],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
    });
    
    con.query("INSERT INTO veterinarion VALUES (?, ?, ?, ?)", [id, years_experience, area_id, ratings],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});

router.post('/users/dogowner', async (req, res) => {

	var id = req.param('id');
	var email = req.param('email');
	var password = req.param('password');
	var first_name = req.param('first_name');
	var last_name = req.param('last_name');
    var role_id = req.param('role_id');
    var vet_id = req.param('vet_id');
  
	con.query("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)", [id, email, password, first_name, last_name, role_id],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
    });
    
    con.query("INSERT INTO dog_owner VALUES (?, ?)", [id, vet_id],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});


router.put('/users/password/:id', async (req, res) => {
    var id = req.param('id');
    var password = req.param('password');
   
	con.query("UPDATE users SET password = ? WHERE id = ? ", [password,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});

router.put('/users/first_name/:id', async (req, res) => {
    var id = req.param('id');
    var first_name = req.param('first_name');
   
	con.query("UPDATE users SET first_name = ? WHERE id = ? ", [first_name,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});

router.put('/users/last_name/:id', async (req, res) => {
    var id = req.param('id');
    var last_name = req.param('last_name');
   
	con.query("UPDATE users SET last_name = ? WHERE id = ? ", [last_name,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});

router.put('/users/email/:id', async (req, res) => {
    var id = req.param('id');
    var email = req.param('email');
   
	con.query("UPDATE users SET email = ? WHERE id = ? ", [email,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});


router.delete('/users/:id', async (req, res) => {
  var id = req.param('id');
  
	con.query("DELETE FROM users WHERE id = ? ", id,function (err, result, fields) {
		if (err) 
			return console.error(error.message);
		res.end(JSON.stringify(result)); 
    });
    con.query("DELETE FROM vetinarians WHERE id = ? ", id,function (err, result, fields) {
		if (err) 
			return console.error(error.message);
		res.end(JSON.stringify(result)); 
    });
    con.query("DELETE FROM dogowner WHERE id = ? ", id,function (err, result, fields) {
		if (err) 
			return console.error(error.message);
		res.end(JSON.stringify(result)); 
	});
});


//APPOINTMENTS

router.post('/appointments', async (req, res) => {

    var id = req.param('id')
	var dog_id = req.param('dog_id');
	var time = req.param('time');
	var date = req.param('date');
	var vet_id = req.param('vet_id');
	var status = req.param('status');
  
	con.query("INSERT INTO dogs VALUES (?, ?, ?, ?, ?, ?)", [id, dog_id, time, date, status, vet_id],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
    });
    
});

router.put('/appointments/:dog_id', async (req, res) => {
    var id = req.param('id');
    var dog_id = req.param('dog_id');
   
	con.query("UPDATE appointments SET dog_id = ? WHERE id = ? ", [dog_id,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});
router.put('/appointments/:dog_id', async (req, res) => {
    var id = req.param('id');
    var dog_id = req.param('dog_id');
   
	con.query("UPDATE appointments SET dog_id = ? WHERE id = ? ", [dog_id,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});
router.put('/appointments/status', async (req, res) => {
    var id = req.param('id');
    var status = req.param('status');
   
	con.query("UPDATE appointments SET status = ? WHERE id = ? ", [status,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});
router.put('/appointments/date', async (req, res) => {
    var id = req.param('id');
    var date = req.param('date');
    var time = req.param('time');
   
	con.query("UPDATE appointments SET date = ?, time = ? WHERE id = ? ", [date,time,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});
router.put('/appointments/vet', async (req, res) => {
    var id = req.param('id');
    var vet_id = req.param('vet_id');
   
	con.query("UPDATE appointments SET vet_id = ? WHERE id = ? ", [vet_id,id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});


//DOGS

router.post('/dogs', async (req, res) => {

	var id = req.param('id');
	var breed_id = req.param('breed_id');
	var owner_id = req.param('owner_id');
	var name = req.param('name');
	var age = req.param('age');
    var gender = req.param('gender');
    var conditions = req.param('conditions');
  
	con.query("INSERT INTO dogs VALUES (?, ?, ?, ?, ?, ?, ?)", [id, breed_id, owner_id, name, age, gender, conditions],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
    });
    
});

router.put('/dogs/conditions', async (req, res) => {
    var dog_id = req.param('dog_id');
    var conditions = req.param('conditions');
   
	con.query("UPDATE dogs SET conditions = ? WHERE dog_id = ? ", [conditions,dog_id],function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.end(JSON.stringify(result)); 
	});
});


router.delete('/dogs/:dog_id', async (req, res) => {
    var dog_id = req.param('dog_id');
    
      con.query("DELETE FROM dogs WHERE dog_id = ? ", id,function (err, result, fields) {
          if (err) 
              return console.error(error.message);
          res.end(JSON.stringify(result)); 
        });
  });







// REGISTER  ROUTES -------------------------------
app.use('/api', router);


*/




//connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error('Internal Server Error');
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
