 const mongoose = require("mongoose");


mongoose.connect('mongodb://nantebi:studios112@ds121834.mlab.com:21834/kibbeking')

var kibbekingSchema = new mongoose.Schema({
	name: String,
	description: String,
	image: String,
	payper: String,
	type: String,
	price: Number
})

 module.exports = mongoose.model("Dish", kibbekingSchema);