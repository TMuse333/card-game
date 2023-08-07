

const express = require("express")

const bodyParser = require('body-parser')

const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(express.json())
app.use(cors())



const db = mysql.createPool({
    host: "localhost",      // <-- Host Name
    user: "root",           // <-- User Name
    password: "shiftTeam902",   // <-- Password
    database: "card_dataBase",
})

app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert",(req, res)=> {

const username = req.body.username
const score = req.body.score;

    const sqlInsert = "INSERT INTO game_stats (username, score) VALUES (?,?)"
    db.query(sqlInsert,[username,score], (err,result)=> {
        if (err) {
        //    console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        } else {
         //   console.log(result);
            res.status(200).send("Data inserted successfully");
        }
    });
 });

 


 

app.get("/api/get",(req,res)=> {
    const sqlSelect = 
    "SELECT * FROM game_stats ORDER BY score DESC";
    db.query(sqlSelect,(err, result) => {
     //   console.log(result.data)
        res.send(result)
    })
})


app.listen(5174, () => {
    console.log("running on port 5174 playa lets get it")

})

// db.getConnection((err, connection) => {
//     if (err) {
//         console.error("Error connecting to the database:", err.message);
//     } else {
//         console.log("Connected to the database!");
//         connection.release(); // Release the connection
//     }
// });








