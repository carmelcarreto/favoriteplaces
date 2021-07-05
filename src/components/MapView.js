import React from 'react';
import { Map, TileLayer } from "react-leaflet";

const MapView = () => {
    return(

        <Map center={{lat: '17.6533977', lng: '-99.5463054'}} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>
    );
}
 
export default MapView;