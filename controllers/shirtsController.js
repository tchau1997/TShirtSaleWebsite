var controller = {};

var models = require('../models');

controller.getAll = function(callback){
    models.Shirt
    .findAll()
    .then(function(Shirts){
        callback(Shirts);
    })
};

controller.getById = function(id, callback){
    models.Shirt
    .findOne({ 
        where: {id: id},
    })
    .then(function(Shirt){
        callback(Shirt);
    });
};
module.exports = controller;