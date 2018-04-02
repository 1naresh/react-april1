const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname,  'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
});
app.get('/user',function(req,res){
    res.send({"name":"naresh","age":"22.5"})
})
app.get('/user1',function(req,res){
    res.send({"name":"nareshaaa","age":"22"})
})
app.listen(100,function(){
    console.log("server is listening to prot 100")
})