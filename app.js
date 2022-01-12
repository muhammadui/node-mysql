const express = require("express")
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.set("view-engine", "ejs")
app.get('/', (req, res) => {
    res.render('index.ejs')
    // console.log("It's working")
})


// Create Connection to MySQL database
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database : "Newsletter",
    multipleStatement: true
})
// connect to database
mysqlConnection.connect((err) => {
    if(!err) {
        console.log('Successful connected to the database')
    } else {
        console.log("Connection Failed to the db")
        console.log(err)
    }
})
app.listen(3005);