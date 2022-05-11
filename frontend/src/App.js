import './App.css';
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from 'react';

// https://tincode.es/blog/manejo-de-salas-con-socket-io-y-react-hooks

function App() {
  
  const ENDPOINT = "http://localhost:3333";
  const socket = io(ENDPOINT);
  let ejecutado = false;

  const lblOnline = useRef();
  const lblOffline = useRef();
  const txt = useRef();

  useEffect(() => {
    // useEffect se ejecuta 2 veces... apaño para que esto se ejecute 1
    console.log("useEffect", ejecutado);
    if(!ejecutado) {
      
      socket.on('connect', () => {
        console.log('Conectado');
        lblOnline.current.style.display = '';
        lblOffline.current.style.display = 'none';  
      });

      socket.on('disconnect', () => {
        console.log('Desconectado');
  
        lblOnline.current.style.display = 'none';
        lblOffline.current.style.display = '';
      });

      socket.on('enviar-mensaje', (payload) => {
        console.log(payload);
      });

      ejecutado = true;
    }    
  }, [socket]);

  const enviar = (e) => {
    const mensaje = txt.current.value;
    const payload = {
      mensaje,
      id: '1234',
      fecha: new Date()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
      console.log('recibido', id);
    });
  }


  return (
    <div>
      <h1>Smapchat</h1>
      <hr />
      <p>
        Server Status: <span ref={lblOnline} className="lblOnline">Online</span><span ref={lblOffline} className="lblOffline">Offline</span>
      </p>
      <div>
        <input type="text" ref={txt} className="mi-input" placeholder="Escribe mensaje" />
        <button onClick={enviar}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
