const app = require('express')()
const http = require('http').createServer(app)
const requestIp = require('request-ip');

app.get('/', (req, res) => {

    const clientIp = requestIp.getClientIp(req.connection.remoteAddress);
    console.log(req.socket);
    res.send(clientIp)
})


http.listen(3000)