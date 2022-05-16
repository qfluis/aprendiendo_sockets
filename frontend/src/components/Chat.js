import {useEffect, useContext, useRef, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { Mensaje } from './Mensaje';

export const Chat = ({sala}) => {
    
    const [listaMensajes, setListaMensajes] = useState([{usuario: 'yolo', mensaje:'valgo',suMensaje:true}, {usuario: 'you', mensaje:'win',suMensaje:false}]);

    //const [salas, setSalas] = useState([]);
    const { socket } = useContext( SocketContext );
    const chatArea = useRef();

    useEffect(() => {
        socket.on('recibir-mensaje', ({usuario, mensaje}) => {
            console.log(listaMensajes);// TODO: hacerlo bonito
            setListaMensajes(listaMensajes => [...listaMensajes, {usuario, mensaje,suMensaje:true}]);
            console.log(listaMensajes);
        });
    }, [socket]);

    const enviarMensaje = (event) => {
        event.preventDefault();
        const data = Array.from(new FormData(event.target));
        const { mensaje } = Object.fromEntries(data);

        event.target.mensaje.value = '';

        const usuario = socket.id; // TODO: cambiar

        socket.emit('enviar-mensaje', { usuario, mensaje, sala });
        //TODO: acuse de recibo con callback ?
        setListaMensajes(listaMensajes => [...listaMensajes, {usuario, mensaje,suMensaje:false}]);
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
                <div className='col-12' ref={chatArea}>
                    {listaMensajes.map( m => <Mensaje usuario={m.usuario} mensaje={m.mensaje} suMensaje={m.suMensaje} /> )}     
                </div>           
                <div className='col-md-9'><input name="mensaje" type='text' className='form-control' /></div>
                <div className='col-md-3'><button type='submit' className='btn btn-primary form-control' >Enviar</button>
                </div>
                </form>
            </div>
        </div>
    )



}