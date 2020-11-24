import React, { Fragment, useState } from "react";
import { Polygon, Popup, useMapEvent } from "react-leaflet";
import NumberMarker from "./NumberMarker";

const MyPolygon = () => {
  const purpleOptions = { color: "purple" };

  const [polygon, setCoord] = useState([]);
  const [isFinish, setFinish] = useState(false);

  useMapEvent("click", (e) => {
    setCoord([...polygon, e.latlng]);
  });

  const onFinishArea = () => {
    setFinish(true);
  };

  const onCloseFinish = () => {
    setFinish(false);
    setCoord([]);
  };

  const finishPopup = !isFinish ? null : (
    <Popup position={polygon[polygon.length - 1]} onClose={onCloseFinish}>
      {polygon.map((point, index) => {
        return (
          <Fragment key={index}>
            <span>{index + 1} :</span>
            <span>
              [ {point.lat}, {point.lng} ]
            </span>
            <br />
          </Fragment>
        );
      })}
    </Popup>
  );

  return polygon.length === 0 ? null : (
    <>
      {!isFinish && (
        <Popup position={polygon[polygon.length - 1]}>
          <button onClick={onFinishArea}>Finish</button>
        </Popup>
      )}

      <Polygon pathOptions={purpleOptions} positions={polygon}></Polygon>
      {finishPopup}
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

export default MyPolygon;
