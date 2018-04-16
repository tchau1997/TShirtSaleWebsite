var express = require('express');
var router = express.Router();

var shirtController = require('../controllers/shirtsController');
router.get('/', function (req, res) {
    shirtController.getAll(function (Shirts) {
        console.log(Shirts);
        res.render('design', {
            Shirts: Shirts,
            isDesign: true
        });
    });
});

// router.get('/:id', function (req, res) {
//     articlesController.getById(parseInt(req.params.id), function (article) {
//         var page = parseInt(req.query.page);
//         if(isNaN(page)){
//             page = 1;
//         }
//         var limit = 5;
//         var pagination = {
//             limit: limit,
//             page: page,
//             totalRows: article.Comments.length
//         }
//         var offset = (page - 1) * limit;
//         article.Comments = article.Comments.slice(offset, offset + limit);
//         res.render('details', {
//             article: article,
//             pagination: pagination
//         });
//     });
// })
module.exports = router;