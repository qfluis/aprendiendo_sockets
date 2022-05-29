import React, { useEffect, useState, useContext } from 'react'
import { SocketContext } from '../context/SocketContext';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import './Map.css';


function MyMapa() {
    const map = useMap()
    const { socket } = useContext( SocketContext );
    

    useEffect(()=>{
        map.addEventListener("click",(e) =>{
            
            const {lat, lng} = e.latlng;
            console.log({lat,lng});
            socket.emit("crear-sala", {nombre:"ei",lat,lng});
            
            //Marker.
        });
    },[]);

    
    

    return null
  }


export const Map = () => {

    const [salas, setSalas] = useState([]);
    const { socket } = useContext( SocketContext );

    useEffect(()=>{
        socket.emit('get-lista-sala');
        socket.on('lista-salas', (data) => setSalas(data));            
    },[]);

    const entrarEnSala = (sala) => {
        console.log(sala);
        // TODO acceder a chat desde aquí
        // TODO acceder a sala por Id
        // TODO modificar en backend lo necesario
    }

    return (
        <>        
        <MapContainer className="map-container" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <MyMapa />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                salas.map(sala => 
                    <Marker position={[sala.lat, sala.lng]}>
                        <Popup>
                            <h4>{sala.nombre}</h4>
                        <button class="btn btn-secondary" onClick={()=>entrarEnSala(sala)}>Acceder</button>
                        </Popup>
                    </Marker>
                )
            }
            {/*}
            <Marker position={[0,0]}>
                <Popup>Holiwi</Popup>
        </Marker>*/}

        </MapContainer>
        </>
    )



    /*


    return (
        <div className='container'>
        <h3>Join / Create Room</h3>
        <MapContainer className="map-container" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
        </div>
    )
    */


}
