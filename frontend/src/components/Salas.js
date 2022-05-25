import {useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const Salas = ({setSala}) => {

    //TODO: Al cambiar de página y volver se pierde lista de salas...

    const [salas, setSalas] = useState([]);
    const { socket } = useContext( SocketContext );

    useEffect(() => {
        socket.on('lista-salas', (data) => {
            setSalas(data);
            setSala(data[0]);
        });
        return ()=> socket.off('lista-salas');
    }, [socket]);

    //TODO: ¿Escuchar update-salas¿?

    const cambioSala = (event) => {
        
        //console.log(event.target.value);
        setSala(event.target.value);
        //console.log(event.target.sala.value);
        // TODO: COSAS
    }

    const nuevaSala = (event) => {
        event.preventDefault();
        const data = Array.from(new FormData(event.target));
        const {nuevaSala } = Object.fromEntries(data);
        console.log(nuevaSala);
        // TODO: CREAR SALA (socket.emit)
        //TODO: actualizar lista salas...
    }

    // TODO: SELECCIÓN DE SALA...
    
    // TODO: Marcar sala activa, revisar href

    return(
        <div className='container'>
            <select name="sala" onChange={ (event) => cambioSala(event)} className="form-control">
                {salas.map(sala => <option value={sala}>{sala}</option>)}
            </select>
            <form onSubmit={ (event)=> nuevaSala(event) }>
                <input name="nuevaSala" type="text" className='form-control' />
                <button type='submit' className='btn btn-primary form-control'>Crear sala</button>
            </form>
        </div>
    )

}