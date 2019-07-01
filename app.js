const express = require("express");
const app = express();
const port = 3000;

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about')
});

app.get('/attandees', (req, res)=>{
    res.render('attandees', {person:{
                                        name:'Enrica',
                                        lastName: 'Berti',
                                        date: 2019}
    });
});

app.listen(port, () => console.log(`Server started on port: ${port}`))