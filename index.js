

const http = require('http');
const fs = require('fs/promises');

const PORT = 3000;

const requireListener = async (req, res) => {
    const {url} = req;

    if(url === './index.html') {
        try {
            const data = await fs.readFile('./views/index.html', 'utf8');
            res.end(data);
        } catch (error) {
            res.statusCode = 404;
        res.end();
        }
       
    } else {
        res.statusCode = 404;
        res.end();
    }
   
}

const server = http.createServer(requireListener);

server.listen(PORT);
