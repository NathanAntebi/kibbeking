const express = require("express")
const Router = express.Router()
const dishes = require("../models/dish.js")

Router.get("/", (req, res) => {
	res.render("landing")
})

Router.get("/dishes", (req, res) => {
	dishes.find({}, function(err, dishes){
		if(err){
			console.log(err);
		}else{
			res.render("dishes", {dishes: dishes})
		}
	})
})

Router.get("/dishes/:id", (req, res) => {
	dishes.findById(req.params.id, function(err, dish){
		if(err){
			console.log(err);
		}else{
			res.render("show", {dish:dish})
		}
	})
})

module.exports = Router;