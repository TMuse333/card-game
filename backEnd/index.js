const express = require("express")


const app = express()

const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",      // <-- Host Name
    user: "root",           // <-- User Name
    password: "shiftTeam902",   // <-- Password
    database: "card_dataBase",
})

app.get("/",(req,res) => {
    






})


app.listen(5174, () => {
    console.log("running on port 5174 playa")

})

// db.getConnection((err, connection) => {
//     if (err) {
//         console.error("Error connecting to the database:", err.message);
//     } else {
//         console.log("Connected to the database!");
//         connection.release(); // Release the connection
//     }
// });








