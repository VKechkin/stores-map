import React, { useRef, useCallback } from "react";

import { GoogleMap, Marker } from "@react-google-maps/api";

import "./style.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultOptions = {
  fullscreenControl: false,
  zoomControl: false,
  panControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickablleIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
};

const Map = ({ center }) => {
  const mapRef = useRef(undefined);

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  const onUnmount = useCallback(() => (mapRef.current = undefined), []);

  return (
    <div className="map-wrapper">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export { Map };
