// Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
	models.sightings.findAll({}).then(function(sightings) {
		var hbsObject = {sightings : sightings};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.get("/:shape", function(req,res) {
    models.sightings.findAll({
    where: {
        shape: req.params.shape
    }
	}).then(function(results){
	    res.json(results)
	});
});

router.get('/:date', function(req,res){
    models.sightings.findAll({ 
    where: {
        Date: req.params.date
    }
    }).then(function(results){
    res.json(results)
	});
});

router.get(":/state", function(req,res){
    models.sightings.findAll({
        where: {
            state: req.params.state 
        }
    }).then(function(results){
    res.json(results)
	});
});

router.get(':/city', function(req,res){
    models.sightings.findAll({
        where: {
            city: req.params.city
        }
	}).then(function(results){
	    res.json(results)
	});
});

module.exports = router;