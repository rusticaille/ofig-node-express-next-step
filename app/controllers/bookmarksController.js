const path = require('path');
const dataMapper = require('../dataMapper');



// méthode voir page favoris
exports.bookmarksPage = (req, res) => {

  res.render('favoris', {favoris:req.session.favoris});

}


// méthode ajout favoris
exports.addToFavorite = (req, res) => {


  const idFig = Number(req.params.id);
  
  dataMapper.getOneFigurine(idFig, (error, figurine) => {
    if(error) console.log(error);
      else {

        const selectedFig = req.session.favoris.find(currentFig => currentFig.id === idFig);

        if (selectedFig) {          
          res.redirect('/bookmarks');
        } else {
          req.session.favoris.push(figurine);
          res.redirect('/bookmarks');
        }
      }
  });
  
}

//supprimer une figurine des favoris
exports.deleteFavorite = (req, res) => {

  const idFig = Number(req.params.id);
  const selectedFigIndex = req.session.favoris.findIndex(currentFig => currentFig.id === idFig);

  if(selectedFigIndex){
    req.session.favoris.splice(selectedFigIndex, 1);
    res.redirect('/bookmarks');
  } else {
    res.redirect('/bookmarks');
  }
  
}