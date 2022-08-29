import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';

import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import 'leaflet/dist/leaflet.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({ loc }) {
    const position = loc.split(',');

    return (
        <MapContainer
            className="map"
            center={position}
            zoom={9}
            scrollWheelZoom={true}
            closePopupOnClick
        >
            <TileLayer
                attribution=''
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}></Marker>
        </MapContainer>
    );
}

export default Map;
