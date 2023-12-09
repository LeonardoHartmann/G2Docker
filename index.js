const express = require('express')
const app = express()
const port = 3000
const config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'nubank'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Eduardo')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('<h1>Unisep node</h1>')
})

app.listen(port, () => {
  console.log('Rodando na porta' + port)
})