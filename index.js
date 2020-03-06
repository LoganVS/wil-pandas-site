const express = require('express');
const app = express();
const http = require('http').Server(app);
const { exec } = require('child_process');

let successCount = 0;

app.get('/', function(req, res){
  exec('docker run wil-pandas-site:latest', function(error, stdout, stderr) {
    if (error) {
      res.send(`Error! ${error}`);
    } else if (stdout) {
      successCount++;
      res.send(`Stdout: ${stdout} ${successCount}`);
    } else {
      res.send(`Stderr: ${stderr}`);
    }
  })
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
