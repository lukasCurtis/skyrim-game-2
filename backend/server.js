const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


// Handle Production
if(process.env.NODE_ENV === 'production'){
    //assign static folder with vue.js app build
    app.use(express.static(__dirname + '/public'));
  
    //Handle Single Page Application nature of vue.js
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//Run Server
app.listen(port, () => {
    console.log('Starting server on port ' + port );
});
  
  