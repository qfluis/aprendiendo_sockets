import { useMemo, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const useSocket = ( serverPath ) => {
  // useMemo evita que cada vez que se recarga el socket vuelva a conectarse
  const socket = useMemo ( () => io.connect( serverPath,{
    transports: ['websocket']
  }), [ serverPath ]);  

  //const socket = useMemo( () => io.connect( serverPath ), [ serverPath ] );
  
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', ()=> {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', ()=> {
      setOnline(false);
    });
  }, [socket]);



  return {
      socket,
      online
  }

}