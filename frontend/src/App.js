import './App.css';
import { io } from "socket.io-client";
import {useEffect} from 'react';

function App() {
  const socket = io("ws://localhost:3333");

  const alCargar = useEffect(()=>{
    io.on('connection', (socket) => {
      console.log('a user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  },[]);  
  
  return (
    <h1>Holiwi</h1>
    


  );
}

export default App;
