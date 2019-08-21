const express = require('express');
let app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use("/login", express.static(__dirname + '/public'));

app.get('/', (req , res)=> {
   res.send('Hello world');
});

app.post('/login', (req , res)=>{
    console.log(req.body);
    res.redirect("/");
});



app.listen(3000, ()=>
   console.log('Its working')
);