const { text } = require('express');

const http = require('http');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader("Content-Type", "text/html");

res.write("<label>Input Number:</label><input type='number' id='fnum'><BR><button onclick='myFunction()'>Click

me</button> <p id='demo'></p>")

res.end("<script>function myFunction() {var

arr=['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];document.getElementById('demo').inner

HTML ='The day is '+ arr[document.getElementById('fnum').value%7];}</script>")

});

server.listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);

});
