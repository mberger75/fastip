import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

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
                url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
            />
            <Marker position={position}></Marker>
        </MapContainer>
    );
}

export default Map;
