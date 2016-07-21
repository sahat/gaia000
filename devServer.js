const path = require('path');
const express = require('express');
const request = require('request');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/api', (req, res) => {
  request.get({ url: 'http://www.gaia.com/api/videos/term/119931', json: true }, function(err, request, body) {
    const results = {
      term: body.term,
      titles: body.titles.slice(0,16)
    };
    res.send(results);
  });
});

app.use('/public', express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000');
});
