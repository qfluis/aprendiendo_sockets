import './App.css';
import {io } from "socket.io-client";
import {useEffect, useRef} from 'react';

function App() {

  const lblOnline = useRef();
  const lblOffline = useRef();
  const txt = useRef();
  const btnEnviar = useRef();

  const ENDPOINT = "http://localhost:3333";
  const socket = io(ENDPOINT, {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });

  // https://socket.io/docs/v3/handling-cors/

  /*
  btnEnviar.addEventListener( 'click', () => {
    const mensaje = txt.value;
    const payload = {
        mensaje,
        id: '1234',
        fecha: new Date()
    }
    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log('desde el server', id);
    });
  });
  */

  useEffect(()=>{
    socket.on('connect', () => {
      console.log('Conectado');
  
      lblOnline.style.display = '';
      lblOffline.style.display = 'none';
  
    });
  
    socket.on('disconnect', () => {
      console.log('Desconectado');
  
      lblOnline.style.display = 'none';
      lblOffline.style.display = '';
    });
    
    /*
    socket.on('enviar-mensaje', (payload) => {
      console.log(payload);
    });
    */

  },[]);

    
  return (
    <div>
      <h1>Holiwi</h1>
      <h1>Socket Client Holiwi 👋</h1>
      <hr/>
      <p>
          Server Status: <span ref={lblOnline} className="lblOnline">Online</span><span ref={lblOffline} className="lblOffline">Offline</span>
      </p>
      <div>
          <input type="text" ref={txt} className="mi-input" placeholder="Escribe mensaje" />
          <button ref={btnEnviar}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
