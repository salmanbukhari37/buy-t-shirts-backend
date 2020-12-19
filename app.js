const express = require("express");
const app = express();

app.use(express.static( __dirname + '/public' ) );

app.get('/', (req, res) => {
    // console.log('Hey');
    res.send("Hey");
})

// app.get('/images', (req, res) => {
//     // console.log('Hey');
    
//     res.send("Hey");
// })

app.listen(4001, () => {
    console.log("App server started");
})