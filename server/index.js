const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const auth = require('http-auth');
const basic = auth.basic({
    realm: "Menu Next Door Can Be Deploy On Heroku.",
	  file: __dirname + "/.htpasswd"
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
