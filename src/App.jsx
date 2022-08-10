import React, { useState } from "react";

import { useJsApiLoader } from "@react-google-maps/api";

import { Shops } from "./components/Shops";
import { Map } from "./components/Map";

import "./App.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [center, setCenter] = useState({
    lat: 47.218638,
    lng: 38.899008,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return (
    <div className="container">
      <Shops setCenter={setCenter} />
      {isLoaded ? <Map center={center} /> : <h2>Loading....</h2>}
    </div>
  );
};

export default App;
