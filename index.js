const http = require('http')
require('dotenv').config()

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/api/auth":
            
        break;

        case "/api/membre":
            
        break;

        default:
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({
                statusCode: 404,
                message: "Not found"
            }))
    }
})

const PORT = parseInt(process.env.PORT_SERVER)
server.listen(PORT, () => {
    console.log(`${ new Date }: server running on http://localhost:${ PORT }`)
})
