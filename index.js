var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró...1,2,3');
    console.log(request.url);
    console.log(request);
    //console.log(JSON.stringify(request));
      response.writeHead(200,"Content-Type:text/html");

    if(request.method = 'GET'){
    response.writeHead(200,"Content-Type:text/html");
    //response.writeHEAD(404,"Content-Type:text/html");
    response.write("<style> h1 {color:blue}</style>");
    response.write("<h1>Hola ICO FES Arag&oacute;n, la mejor carrera.</h1>");
}else{
    response.write("No es GET!!!");
}
    response.end();

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
