const express = require("express"),
	  mongoose = require("mongoose"),
	  ejs = require("ejs"),
	  dishes = require("./models/dish.js"),
	  dishRoutes = require("./routes/dishes.js")
	  bodyParser = require("body-parser");

	  const app = express();

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(dishRoutes)
	

var port = process.env.PORT || 5000 ;
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})