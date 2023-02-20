const http = require('http');

const PORT = 3000;

const requireListener = (req, res) => {
    // console.log("REQUIRE IS HERE")
    // const {url, method} = req;
    // console.log(url, method);
    res.statusCode = 418;
    res.end("Hello from server");
}

const server = http.createServer(requireListener);

server.listen(PORT);
