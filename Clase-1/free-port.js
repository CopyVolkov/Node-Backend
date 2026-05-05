const net = require('net')

function findAvailablePort(desiredPort) {
    return new Promise((resolve) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const port = server.address().port
            server.close(() => resolve(port))
        })

        server.on('error', () => {
            // Si falla, intenta con el siguiente puerto
            resolve(findAvailablePort(desiredPort + 1))
        })
    })
}

module.exports = { findAvailablePort }
