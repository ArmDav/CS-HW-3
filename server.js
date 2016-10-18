const http = require('http');

const httpServer = http.createServer(function(req, res) {

      if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Main Page\n');
    } else if(req.url === '/home') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Home page\n');
    } else if(req.url === '/course') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Here should be list of courses\n');
    } else if(req.url === '/course/course1') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Material of Course1\n');
	} else if(req.url === '/course/course2') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Material of course2\n');	
    } else if(req.url === '/course/course3') {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Material of course3\n');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("page doesn't exist");
    }
});

httpServer.listen(3001);