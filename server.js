const express = require ('express');
const app = express();

app.get ('/get', (req, res) => {
    console.log("Get request worked");
    res.send("Output: get");
    
});

app.post ('/post', (req, res) => {
    console.log("Post request worked");
    req.headers;
    res.send("Output: post");
});

app.listen(4460);