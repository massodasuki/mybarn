const app = require('express')()
const http = require('http').createServer(app)
const requestIp = require('request-ip');

app.get('/', (req, res) => {

    const clientIp = requestIp.getClientIp(req); 
    console.log(clientIp);
    res.send(clientIp)
})


http.listen(process.env.PORT)