var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var authServer = 'http://localhost:11001', tiEbankingServer = 'http://localhost:11002';

app.all("/oauth/*", function(req, res){
apiProxy.web(req, res, {target: authServer});
});

app.all("/tieb/*", function(req, res){
apiProxy.web(req, res, {target: tiEbankingServer});
});

app.use(express.static(__dirname + '/dist'));
console.log("Running");
app.listen(process.env.PORT || 3000);
