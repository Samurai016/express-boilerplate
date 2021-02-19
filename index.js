const express = require('express');
const cors = require('cors');
const enforce = require('express-sslify');
const app = express();

// CONFIGURATION
app.use(cors());
// Comment this line if your browser give you a ERR_SSL_PROTOCOL_ERROR error
// This line force the browser to use https instead of http
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// ENDPOINTS
app.get('/api/endpoint', function(req, res) {
    // Request handler
    res.status(200).send('Success');
});

// STATIC FILES
// Uncomment this line to serve static files like documentation or assets
//app.use(express.static('folder-path'));

// STARTER
var listener = app.listen(process.env.PORT || 3000, () => console.log(`Your server is running on port ${listener.address().port}!`));