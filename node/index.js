const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Fernando')`
connection.query(sql)

app.get('/', (req,res)=> {
  const query = `SELECT * FROM people`
  connection.query(query, (err, result) => {
    if (err) throw err;
    
    let resultList = '<ul>';
    result.forEach(item => {
      resultList += `<li>${item.id} - ${item.name}</li>`
    });
    resultList += '</ul>'
    res.send('<h1>Full Cycle Rocks!</h1>' + resultList)
  });
  
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})