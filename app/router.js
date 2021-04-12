const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');
const route = require('color-convert/route');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// page panier
router.get('/bookmarks', bookmarksController.bookmarksPage);

//page ajouter aux favoris
router.get('/bookmarks/add/:id', bookmarksController.addToFavorite);

//supprimer une figurine des favoris
router.get('/bookmarks/delete/:id', bookmarksController.deleteFavorite);

//accueil filtré par catégories
router.get('/category/:category', mainController.filterByCategory);


// on exporte le router 
module.exports = router;