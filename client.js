const net = require('net');

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
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

    //conn.write("Move: up");

  })
  return conn;
}

module.exports = {connect};