const express = require('express');
const app = express();
const http = require('http').Server(app);
const { exec } = require('child_process');

let successCount = 0;

app.get('/', function(req, res){
  const code = req.query.code || "1 + 1";

  exec(`docker run --env CODE="${code}" wil-pandas-site`, function(error, stdout, stderr) {
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
