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
    res.send('status:200, message: '+time); 
})

app.get('/hello/:id',(req, res) => {
    res.send('status:200, message: Hello, ' + req.params.id);
})

app.get('/search', (req, res) => {
if (req.query.s == ''){
    res.status(500).send('error:true, you have to provide a search')
}
else {
    res.status(200).send('ok, data: '+req.query.s)
}
})
app.get('/movies/create', (req, res) => {

})
app.get('/movies/update', (req, res) => {
    
});
app.get('/movies/delete', (req, res) => {
    
});
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
];
app.get('/movies/read', (req, res) => {
    res.status(200).send(movies);
});


