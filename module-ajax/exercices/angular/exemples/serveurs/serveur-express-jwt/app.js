const pg = require('pg');
const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

// Clé secréte à utiliser pour chiffrer les tokens (connue uniquement du serveur)
const privateKey = 'db7e49706fdfe014df83a3260bb6c921';

// Middleware qui ajoute l'en-tête de réponse Allow-Cross-Origin
app.use(cors()); 
// Middleware qui parse le JSON contenu dans le corps de la requête
app.use(bodyParser.json()); 
// Middleware pour la connection à la base de données
app.use(function(request, response, next){
  request.pg = {};
  request.pg.pool = new pg.Pool({
    connectionString: 'postgresql://postgres:123456@localhost:5432/ajax_module_u_only'
  });
  request.pg.pool.connect((error, client, release) => {
    if (error) {
      response.status(500);
      // On fourni un argument, on passe au middleware d'ERREUR suivant
      next(error);
    } else {
      request.pg.client = client;
      // On passe au middleware suivant
      next();
    }
  });
});

// Déclaration de routes :
app.post('/login', function(request, response, next){
  // Dans la requête on devrait trouver un JSON de la forme :
  /*
  * {
  *    email: uneadresses@email.com
  *    password: un_mot_de_passe
  * }
  */
  const email = request.body.email;
  const password = request.body.password;

  request.pg.client.query('SELECT id,password FROM users WHERE email=$1', [
    email
  ], (error, results) => {
    if (error) {
      response.status(500);
      next(error);
    } else {
      // Si un utilisateur a cet e-mail;
      if (results.rowCount > 0) {
        // Si l'utilisateur trouvé a ce mot de passe;
        if (password.toString() === results.rows[0].password.toString()) {
          delete results.rows[0].password;
          // On créé un jeton avec les données utilisateur;
          const token = jwt.sign(results.rows[0], privateKey);
          // On envoi ça au client.
          return response
            .json({
              token: token
            })
            .end(() => {
              request.pg.client.release();
              request.pg.pool.end();
            });
        }
      }
      return response
        .json({
          error: "Invalid email or password."
        })
        .end(() => {
          request.pg.client.release();
          request.pg.pool.end();
        });
    }
  })
});

// Ce middleware est exécuté par Express pour toutes les
// requêtes correspondant à des URL commençant par /private/*
app.use('/private/*', function(request, response, next){
  const authorization = request.get('Authorization');
  let token;
  if (authorization) {
    token = authorization.trim().split(' ').pop();
  }
  jwt.verify(token, privateKey, (error, decoded) => {
    if (error) {
      // Si le décodage du token échoue;
      response.status(403);
      // On saute au middleware d'ERREUR (en "bas de code").
      // (Pour ce faire il suffit de fournir un paramétre au callback next)
      next(error);
    } else {
      // Sinon, on ajoute le token original et décodé à une propriété de request
      request.token = {
        original: token,
        decoded: decoded
      };
      // Et on saut au middleware suivant.
      next();
    }
  });
});

app.get('/private/token/verify', function(request, response){
  // Si on peut répondre à cet URL c'est que le token est validé par le middleware
  return response.json({});
});

app.get('/private/user', function(request, response, next){
  const id = parseInt(request.token.decoded.id, 10);
  request.pg.client.query('SELECT firstname, lastname, birthdate FROM users WHERE id=$1', [
    id
  ], (error, results) => {
    if (error) {
      response.status(500);
      next(error);
    } else {
      if ( results.rowCount ) {
        // Un utilisateur avec l'id contenu dans le token a été trouvé
        return response
          .json({
            data: results.rows[0]
          })
          .end(() => {
            request.pg.client.release();
            request.pg.pool.end();
          })
      } else {
        // Aucun n'utilisateur avec cet id trouvé ?
        request.pg.client.release();
        request.pg.pool.end();
        // Aller au middleware suivant (qui doit être celui que gére l'erreur 404)
        next();
      }
    }
  });
});


// Gestion d'autres erreurs - Le premier argument est l'erreur survenue
app.use(function(error, request, response, next){
  return response
    .json({
      error: error.message
    });
});

// Gestion des erreur 404 - Toujours à la fin de toutes les autres routes
app.use(function(request, response, next){ // middleware qui renvoie une erreur 404 sous la forme d'un JSON
  return response
    .status(404)
    .json({
      error: 'Not Found'
    });
});

app.listen(8080, function(){
  console.log('Serveur démarré sur 8080');
});