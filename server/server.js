import express from 'express';
import mysql from 'mysql'
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app =express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'signup'
  })

app.post('/register',(req, res) => {
  const sql= "INSERT INTO Login (`username`, `password`) VALUES (?)"
  bycrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if (err) return res.json({Error: "Error for hashing password"});
    
    const values =[
      req.body.username,
      req.body.password,
      hash
    ]
    db.query(sql [values], (err, result) => {
      if (err) return res.json({Error: "Inserting data Error om server"});
      return res.json({Status: "Success"});
    })
  })
})
  return res.json({Status: "Success"})

app.listen(8800, () => {
  console.log("Running...");
})

