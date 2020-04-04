const express = require("express");
const app = express();
const fs = require('fs')

const url = require('url')
const querystring = require("querystring")

app.get("/favicon.ico", function(req, res) {
    res.status(200)
    res.end();
    return;
})

app.get("/test", function(req, res) {
    // const query = req.query
    // res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.status(200);
    res.json(null)
    // res.json("1")
    // res.send(fs.readFileSync(__dirname + '/pages/hello.html', "utf-8"));
    // return;
})

app.listen(3000)