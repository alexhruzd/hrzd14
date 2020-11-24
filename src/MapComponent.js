import React, { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import NumberMarker from "./NumberMarker";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

const MyPolygon = () => {
  const [polygon, setCoord] = useState([]);
  const purpleOptions = { color: "purple" };

  useMapEvent("click", (e) => {
    setCoord([...polygon, e.latlng]);
  });
  return polygon.length === 0 ? null : (
    <>
      <Popup position={polygon[polygon.length - 1]}>Finish</Popup>

      <Polygon pathOptions={purpleOptions} positions={polygon}></Polygon>
      {polygon.map((point, index) => (
        <NumberMarker
          key={index + 1}
          position={point}
          number={index + 1}
        ></NumberMarker>
      ))}
    </>
  );
};

const MapComponent = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <MyPolygon></MyPolygon>
    </MapContainer>
  );
};

export default MapComponent;
