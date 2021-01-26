const express = require("express")
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const path = require("path")
const nodemailer = require("nodemailer")



const app = express()


app.use('/public', express.static(path.join(__dirname,'public')))

app.engine('handlebars',exphbs(  {  extname: "handlebars",
defaultLayout: 'default'
}))
app.set('view engine','handlebars')

// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req, res) => {
	res.render("home")
})
app.get('/gallery',(req, res) => {
	res.render("gallery")
})
app.get('/contact',(req, res) => {
	res.render("contact")
})
var port = process.env.PORT || 8000

app.listen(port, function() {
    console.log("App is running on port " + port);
});