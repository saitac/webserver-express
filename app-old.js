const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    let salida = {
        nombre: 'Salvador',
        apellidos: 'Aita Campodonico',
        url: req.url
    };
    res.write(JSON.stringify(salida));
    // res.write('Hola Mundo!');
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');