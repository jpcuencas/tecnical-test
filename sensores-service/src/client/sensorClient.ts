import * as http from 'http';
import sensorService from '../services/sensorService';

const server = http.createServer(async (req: any, res: any) => {
  if (req.url === '/api/sensor/:id' && req.method === 'GET') { 
    if ('params' in req) {
      const id = req.params.id;
      const responseData = await sensorService.getSensorById(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseData));
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request');
    }
  } else if (req.url === '/api/sensor/:id' && req.method === 'DELETE') {
    if ('params' in req) {
      const id = req.params.id;
      const responseData = await sensorService.deleteSensor(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseData));
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request');
    }
  } else {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
