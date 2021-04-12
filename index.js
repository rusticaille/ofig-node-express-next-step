// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const app = express();

const session = require('express-session');

app.use(session({
  secret: process.env.SECRET_SESSION,
  saveUninitialized: false,
  resave: false
}));

// servir les fichiers statiques qui sont dans "integration"
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));


// peu importe la route je vais faire ces traitements
app.use((req, res, next) => {

  // si la session historique n'existe pas alors cree la avec tableau vide
  if(!req.session.favoris) req.session.favoris = [];
  next();
})


// on importe le router
const router = require('./app/router');
// routage !
app.use(router);

// un peu de config
const PORT = process.env.PORT || 5000;


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
