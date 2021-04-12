const path = require('path');
const dataMapper = require('../dataMapper');


// méthode pour la page d'accueil
exports.homePage = (req, res) => {

  dataMapper.getAllFigurines((error, figurines) => {

    if(error) console.log(error);
    else {
     dataMapper.getCategory((error2, categories) => {
      if(error2) console.log(error2);
      else {

        res.render('accueil', {figurines, categories});
      }
     });
    } 
  });

}


// méthode pour l'article
exports.articlePage = (req, res) => {
  const idFig = Number(req.params.id);
  
  dataMapper.getOneFigurine(idFig, (error, figurine) => {
    if(error) console.log(error);
      else {
        dataMapper.getReview(idFig, (error2, reviews) => {
          if(error2) console.log(error2);
          else {
            dataMapper.getCategory((error3, categories) => {
              if(error3) console.log(error3);
              else {
        
                res.render('article', {figurine, categories, reviews});
              }
             });
          }
        })
      }
  });  
}


exports.filterByCategory = (req,res) => {
  const category = req.params.category;
  dataMapper.filterCategory(category, (error, figurineInsideCategory) => {
    if(error) console.log(error);
    else {
      dataMapper.getCategory((error3, categories) => {
      if(error3) console.log(error3);
      else {
        res.render('accueil', { figurines:figurineInsideCategory, categories});
      }
    });
  }
});
}
  
