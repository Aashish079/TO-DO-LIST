const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{

    let today = new Date();
    let currentDay = today.getDay();

    if(currentDay===6 || currentDay===0){
        res.send("Yay it's weekend!");
    }
    else{
        res.sendFile(__dirname + '/index.html');
    }

})



app.listen(PORT, ()=>{
    console.log(`The server is listening at ${PORT}`);
});