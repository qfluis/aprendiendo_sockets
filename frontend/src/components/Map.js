import React from 'react'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import './Map.css';

export const Map = () => {
    //const map = useMap();
    //nvar map = L.map('map').setView([51.505, -0.09], 13);
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
}
