const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'employeesystem',
})

app.post('/cadastro', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const gender = req.body.gender
    const position = req.body.position
    const wage = req.body.wage

    db.query(
        "INSERT INTO employees (name, age, gender, position, wage) VALUES (?,?,?,?,?)",
        [name,age,gender,position,wage],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Valores inseridos")
            }
        }
    )
})

app.get('/funcionarios', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () =>{

})