import React from 'react';
import L from "leaflet";
import { Marker } from 'react-leaflet';

const NumberMarker = (props) => {

  const {position, number} = props;

  const numIcon = L.divIcon({
    className: "number-icon",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    html: `${number}`,
  });

  return (
    <Marker position={position} icon={numIcon}></Marker>
  );
}

export default NumberMarker;
