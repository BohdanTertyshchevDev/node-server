const http = require('http');
const fs = require('fs/promises');

const PORT = 3000;

const requireListener = (req, res) => {
    const {url} = req;

    if(url === './index.html') {
        fs.readFile('./views/index.html', 'utf8')
        .then((data) => {
            res.end(data)
        })
    } else {
        res.statusCode = 404;
        fs.readFile('./views/error.html', 'utf8')
        .then((data) => {
            res.end(data)
        })
    }

    res.statusCode = 404;
    res.end("Hello from server");
}

const server = http.createServer(requireListener);

server.listen(PORT);
