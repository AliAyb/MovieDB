const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/test', (req, res) => {
    res.send('status:200, message:ok')
})

app.get('/time', (req, res) => {
    var today = new Date(); 
    if(today.getMinutes() < 10){
        minutes = "0" + today.getMinutes();
        }else{
            minutes = "" + today.getMinutes();
        }
        if(today.getHours() < 10){
            hours = "0" + today.getHours();
        }else{
            hours = "" + today.getHours();
        }
    var time = today.getHours() + ":" + today.getMinutes(); 
    res.send('status:200, message:'+time); 
})


