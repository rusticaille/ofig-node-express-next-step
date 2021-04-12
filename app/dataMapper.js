const client = require('./database');

exports.getAllFigurines = (callback) => {
    
    client.query(`SELECT * FROM "figurine" ORDER BY "name" ASC`, (error, result) => {
        callback(error, result.rows);
    })

    
}

exports.getOneFigurine = (idFig, callback) => {
    
    client.query(`SELECT * FROM "figurine" WHERE "id"=$1`, [idFig], (error, result) => {
        callback(error, result.rows[0]);
    });

}

exports.getReview = (idFig, callback) => {

    client.query(`SELECT * FROM "review" WHERE "figurine_id"=$1`, [idFig], (error, result) => {
        callback(error, result.rows);
    });
}

exports.getCategory = ( callback) => {

    client.query(`SELECT COUNT (*) FROM "figurine" GROUP BY "category" ORDER BY "category" ASC`, (error, result) => {
        callback(error, result.rows);
    });
}

exports.filterCategory = (categoryName, callback) => {
    client.query(`SELECT * FROM "figurine" WHERE "category"=$1`, [categoryName], (error, result) => {
        callback(error, result.rows);
    });
}


 
