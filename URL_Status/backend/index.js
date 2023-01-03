const express = require('express')
const axios = require('axios')
const routes = require('./routes/urls')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({extended: false}));

// app.use(routes)
app.use(express.json())
app.post('/urls', (req, res) => {

  var data = JSON.stringify({
    url: req.body.url,
    followRedirect: true,
  });

  var config = {
    method: "post",
    url: "https://api.geekflare.com/brokenlink",
    headers: {
      "x-api-key": "222fdfe0-5407-4cd7-9859-737c9bbd6828",
      "Content-Type": "application/json",
    },
    data: data,
  };
  
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json({data: response})
    })
    .catch(function (error) {
      console.log(error);
    });

  res.json(req.body) 
})

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
