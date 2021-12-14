const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.sendFile('/public/index.html');
});
 
app.listen(port, () => console.log('listen at http://localhost:${port}'));