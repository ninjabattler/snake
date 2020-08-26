const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) =>{

    console.log('[SERVER]> ' + data)

  })
  // will run when connected to the server
  conn.on('connect', (client)=>{

    console.log('Connection has been established');

    conn.write("Name: JRT");

  })
  return conn;
}

module.exports = connect;