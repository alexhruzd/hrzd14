import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import MyPolygon from "../MyPolygon";

import "./MapComponent.css";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.7.1/dist/images/";

const MapComponent = () => {
  const [isAreaMode, setAreaMode] = useState(false);
  return (
    <MapContainer center={[53.902, 27.561]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <div className="area_mode">
        <label htmlFor="checkbox_area">Area Mode: </label>
        <input
          type="checkbox"
          name="checkbox_area"
          id="checkbox_area"
          value={isAreaMode}
          onChange={() => setAreaMode(!isAreaMode)}
        />
      </div>

      {isAreaMode && <MyPolygon></MyPolygon>}
    </MapContainer>
  );
};

export default MapComponent;
