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
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
];
app.get('/movies/read', (req, res) => {
    res.status(200).send(movies);
});
app.get('/movies/read/by-date', (req, res) => {
    movies.sort(function(a, b){return a.year - b.year});
    res.status(200).send(movies);
})
app.get('/movies/read/by-rating', (req, res) => {
    movies.sort(function(a, b){return b.rating - a.rating});
    res.status(200).send(movies);
})
app.get('/movies/read/by-title', (req, res) => {
    movies.sort(function(a, b){return a.title.localeCompare(b.title)});
    res.status(200).send(movies);
})
app.get('/movies/read/id/:id' , (req, res) => {

    if(req.params.id < movies.length){
     res.status(200).send(movies[req.params.id]);
    }else{
     res.status(404).send('error:true, message:the movie ' + req.params.id + ' does not exist');
    }
 
 })
app.get('/movies/add', (req, res) => {
    if(req.query.title == ''|| typeof req.query.title === 'undefined'|| 
    req.query.year == ''  || typeof req.query.year === 'undefined'|| !(/([0-9]{4})/.test(req.query.year))
     || isNaN(req.query.year) ){
        res.status(403).send('error:true, message:you cannot create a movie without providing a title and a year')
    }
    else if (req.query.rating == "" || typeof req.query.rating === 'undefined'){
        movie = {title: req.query.title, year: req.query.year, rating: 4}
        movies.push(movie)
        res.send(movies)
    }
    else {
        movie = {title: req.query.title, year: req.query.year, rating: req.query.rating}
        movies.push(movie)
        res.send(movies)

    }
})
app.get('/movies/delete/:id', (req,res) => {
    if(req.params.id<=0 || req.params.id>movies.length)
    res.status(404).send("error:true, message:the movie "+req.params.id+" does not exist");
    else{
        movies.splice(req.params.id-1,1);
        res.send(movies);
    }
})


