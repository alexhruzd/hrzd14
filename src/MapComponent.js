import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import MyPolygon from "./MyPolygon";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

const MapComponent = () => {
  return (
    <MapContainer center={[53.902, 27.561]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyPolygon></MyPolygon>
    </MapContainer>
  );
};

export default MapComponent;
