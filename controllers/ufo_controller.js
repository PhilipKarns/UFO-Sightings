// Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models');

router.get("/", function (req, res) {
	models.sightings.findAll({}).then(function(sightings) {
		var hbsObject = {sightings : sightings};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.get("/shape/:shape", function(req,res) {
    models.sightings.findAll({
    where: {
        shape: req.params.shape
    }
	}).then(function(results){
	    res.json(results)
	});
});

router.get("/date/:date", function(req,res){
    models.sightings.findAll({ 
    where: {
        Date: req.params.date
    }
    }).then(function(results){
    res.json(results);
    console.log(results);
	});
});

router.get("/state/:state", function(req,res){
    models.sightings.findAll({
        where: {
            state: req.params.state 
        }
    }).then(function(results){
    res.json(results)
	});
});

router.get("/city/:city", function(req,res){
    models.sightings.findAll({
        where: {
            city: req.params.city
        }
	}).then(function(results){
	    res.json(results)
	});
});

router.post("/", function (req, res) {
    console.log(req.body);
    models.sightings.create({
      Date: req.body.date,
      City: req.body.city,
      State: req.body.state,
      Shape: req.body.shape,
      Duration: req.body.duration,
      Summary: req.body.summary
    }).then(function(dbSighting) {
        //res.json(dbSighting);
        res.redirect("/");
    });//dbsighting
})//post
module.exports = router;