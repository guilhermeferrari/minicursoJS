const restify = require('restify')
const server = restify.createServer();

server.get("/home", (req, res, next) => {
    res.send("aaa")
    next()
})

server.listen(3000)