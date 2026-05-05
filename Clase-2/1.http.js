const http = require('http')
const { findAvailablePort } = require('../Clase-1/free-port')
const { chars } = require('prelude-ls')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statuisCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.statuisCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>CONTACTO</h1>')
  } else {
    res.statuisCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort)
  .then((port) => {
    server.listen(port, () => {
      console.log(`Server is listening on port ${desiredPort}`)
    })
  })
