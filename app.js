const express = require('express')
const { exec } = require('child_process')

const app = express()
const port = 3000

app.get('/htop', (req, res) => {
  const fullName = 'karan singh'
  const username = 'karans1882002@gmail.com'
  const serverTimeIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  exec('top -b -n 1', (error, stdout) => {
    if (error) {
      return res.send(Error executing top command: ${error.message})
    }
    res.send(`
      <h1>Name: ${fullName}</h1>
      <h2>Username: ${username}</h2>
      <h3>Server Time (IST): ${serverTimeIST}</h3>
      <hr />
      <pre>${stdout}</pre>
    `)
  })
})

app.listen(port, () => {
  console.log(Server running on http://localhost:${port})
})
