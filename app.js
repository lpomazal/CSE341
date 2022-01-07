const http = require('http');

//const routes = require('.\\routes');

const server = http.createServer((req, res) =>{
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="post"><input tupe="text" name="username"><button type="submit"><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    // Html response "page not found"
    if (url === '/create-user'){
        const body =[];
        req.on('data', chunk =>{
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]); // username= whatever is inputed
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(4000);
//on 4000 because my computer is using 3000 for itself