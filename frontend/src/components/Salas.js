import {useState, useEffect, useContext, useRef } from 'react';
import { SocketContext } from '../context/SocketContext';

export const Salas = ({setSala}) => {

    //TODO: Al cambiar de página y volver se pierde lista de salas...

    const [salas, setSalas] = useState([]);
    const { socket } = useContext( SocketContext );
    const txtSala = useRef();

    useEffect(() => {

        socket.emit('get-lista-sala');

        socket.on('lista-salas', (data) => {
            setSalas(data.map((s) => s.nombre));
            //setSala(data[0]);
        });
        return ()=> socket.off('lista-salas');
    }, [socket]);

    //TODO: ¿Escuchar update-salas¿?

    const cambioSala = (event) => {
        
        setSala(event.target.value);
        // TODO: COSAS
    }

    const nuevaSala = (event) => {
        event.preventDefault();
        const data = Array.from(new FormData(event.target));
        const {nuevaSala } = Object.fromEntries(data);
        socket.emit("crear-sala", nuevaSala, (response) => {
            console.log(response.status);
            txtSala.current.value = "";
        });
        



    }
   
    // TODO: Marcar sala activa, revisar href

    return(
        <div className='container'>
            <select name="sala" onChange={ (event) => cambioSala(event)} className="form-control">
                {salas.map(sala => <option value={sala}>{sala}</option>)}
            </select>
            <form onSubmit={ (event)=> nuevaSala(event) }>
                <input ref={txtSala} name="nuevaSala" type="text" className='form-control' />
                <button type='submit' className='btn btn-primary form-control'>Crear sala</button>
            </form>
        </div>
    )

}