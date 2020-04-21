/**
 * On installe le module express
 * Voir : https://expressjs.com/
 * npm i express
 */
const express = require("express");
/**
 * Pour autoriser les requêtes depuis n'importe quelle origine
 * Voir : https://expressjs.com/en/resources/middleware/cors.html
 * npm i cors
 */
const cors = require("cors");
/**
 * Pour traiter le corps des requêtes
 * Voir : https://expressjs.com/en/resources/middleware/body-parser.html
 * npm i body-parser
 */
const bodyParser = require("body-parser");
/**
 * On installe le module pg (qui contient pg-native, pg-types, etc...)
 * Voir : https://node-postgres.com/
 * npm i pg
 */
const { Pool } = require('pg');

// Création du client postgreSQL
const pool = new Pool({
  connectionString: 'postgresql://postgres:123456@localhost:5432/ajax_module_pc',
});

const app = express();

// Ajoute Access-Control-Allow-Origin: * à toutes les en-tête de réponse HTTP
app.use(cors());
// Ajoute la gestion des contenus de requête HTTP au format JSON
app.use(bodyParser.json())

app.get("/persons", function(request, response){
  pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM persons"
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "persons": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
});

app.post("/person", function(request, response){
  const required = [
    "firstname",
    "lastname",
    "birthdate",
    "address_id"
  ];


  if ( request.body ) {
    let missingField = [];
    for(let field of required) {
      if (! request.body.hasOwnProperty(field)) {
        missingField.push(field);
      }
    }
    if ( missingField.length ) {
      response.json({
        status: "Error",
        message: `The fields ${missingField.join(", ")} are missing.`
      });
    } else {
      pool.connect()
      .then(() => {
        return pool.query(
          "INSERT INTO persons(firstname, lastname, birthdate, address_id) VALUES($1,$2,$3,$4) RETURNING *",
          [
            request.body.firstname,
            request.body.lastname,
            request.body.birthdate,
            request.body.address_id
          ]
        );
      }).then((results) => {
        response.json({
          "status": "OK",
          "data": {
            "person": results.rows
          }
        });
      })
      .catch((error) => {
        response.json({
          status: "Error",
          message : error.message
        });
      });
    }
   } else {
    response.json({
      status: "Error",
      message: "Please provide data to save."
    });
   }
});

app.get("/person/:person", function(request, response){
  if (! isNaN(request.params.personId)) {
    const personId = parseFloat(request.params.person);

    pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM person WHERE id=$1",
        [
          personId
        ]
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "person": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
  } else {
    response.json({
      status: "Error",
      message: "Please provide a valid person identifier"
    });
  }
});

app.get("/addresses", function(request, response){
  pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM addresses"
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "addresses": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
});

app.post("/address", function(request, response){
  const required = [
    "street",
    "country",
    "zipcode"
  ];

  if ( request.body ) {
    let missingField = [];
    for(let field of required) {
      if (! request.body.hasOwnProperty(field)) {
        missingField.push(field);
      }
    }
    if ( missingField.length ) {
      response.json({
        status: "Error",
        message: `The fields ${missingField.join(", ")} are missing.`
      });
    } else {
      pool.connect()
      .then(() => {
        return pool.query(
          "INSERT INTO addresses(street, country, zipcode) VALUES($1,$2,$3) RETURNING *",
          [
            request.body.street,
            request.body.country,
            request.body.zipcode
          ]
        );
      }).then((results) => {
        response.json({
          "status": "OK",
          "data": {
            "address": results.rows
          }
        });
      })
      .catch((error) => {
        response.json({
          status: "Error",
          message : error.message
        });
      });
    }
   } else {
    response.json({
      status: "Error",
      message: "Please provide data to save."
    });
   }
});

app.get("/address/:address", function(request, response){
  if (! isNaN(request.params.address)) {
    const addressId = parseFloat(request.params.address);

    pool.connect()
    .then(() => {
      return pool.query(
        "SELECT * FROM addresses WHERE id=$1",
        [
          addressId
        ]
      );
    }).then((results) => {
      response.json({
        "status": "OK",
        "data": {
          "address": results.rows
        }
      });
    })
    .catch((error) => {
      response.json({
        status: "Error",
        message : error.message
      });
    });
  } else {
    response.json({
      status: "Error",
      message: "Please provide a valid address identifier"
    });
  }
});

app.listen(1337, () => {
  console.log("Express server started on 1337");
});