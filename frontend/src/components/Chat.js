import {useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const Chat = ({sala}) => {

    //const [salas, setSalas] = useState([]);
    const { socket } = useContext( SocketContext );

    useEffect(() => {
        socket.on('recibir-mensaje', (mensaje) => {
            console.log(mensaje);
        });
    }, [socket]);

    const enviarMensaje = (event) => {
        event.preventDefault();
        const data = Array.from(new FormData(event.target));
        const { mensaje } = Object.fromEntries(data);

        event.target.mensaje.value = '';

        socket.emit('enviar-mensaje', { mensaje, sala });
    }

    //TODO: revisar
    useEffect(()=>{
        if(sala !== "") {
            socket.emit("entrar-sala", sala);
        }
    }, [sala]);

    return (
        <div className='container'>
            <div className='row'>
                <form onSubmit={( event ) => enviarMensaje(event)}>
                <div className='col-12'><textarea className='form-control' /></div>           
                <div className='col-md-9'><input name="mensaje" type='text' className='form-control' /></div>
                <div className='col-md-3'><button type='submit' className='btn btn-primary form-control' >Enviar</button>
                </div>
                </form>
            </div>
        </div>
    )



}