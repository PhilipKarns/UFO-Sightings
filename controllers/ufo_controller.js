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
module.exports = router;