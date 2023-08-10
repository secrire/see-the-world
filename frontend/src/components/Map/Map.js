import React, { useRef, useEffect, useState } from "react";
import { Typography } from "@mui/material";
// import mapboxgl from "mapbox-gl";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// import ReactMapGL, { Marker } from "react-map-gl";
// import Map from "react-map-gl";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoidXNoaTczMSIsImEiOiJja2Mwa2llMmswdnk4MnJsbWF1YW8zMzN6In0._Re0cs24SGBi93Bwl_w0Ig";

const Map = (props) => {
  // The container option tells Mapbox GL JS to render the map inside a specific DOM element. Here, the app expects to receive a mapContainer useRef. Later you will assign the ref to an HTML element that will act as the map container.
  // const mapContainer = useRef(null);

  // // you also created a map useRef to store the initialize the map. The ref will prevent the map from reloading when the user interacts with the map.
  // const map = useRef(null);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/satellite-v8",
  //     center: [0, 0], // Initial center coordinates
  //     zoom: 2, // Initial zoom level
  //   });

  //   // map.current.on('move', () => {
  //   //   setLng(map.current.getCenter().lng.toFixed(4));
  //   //   setLat(map.current.getCenter().lat.toFixed(4));
  //   //   setZoom(map.current.getZoom().toFixed(2));
  //   // });

  //   // Define an array of cities
  // const cities = [
  //   {
  //     name: "Sydney",
  //     coordinates: [151.209900, -33.865143]
  //   },
  //   {
  //     name: "New York",
  //     coordinates: [-73.935242, 40.730610]
  //   },
  //   // Add more cities...
  // ];

  // // Randomly pick a city
  // const randomCity = cities[Math.floor(Math.random() * cities.length)];

  // // Add a marker for the randomly selected city
  // new mapboxgl.Marker()
  //   .setLngLat(randomCity.coordinates)
  //   .addTo(map.current);

  // // Fly to the randomly selected city
  // map.current.flyTo({
  //   center: randomCity.coordinates,
  //   zoom: 3,
  //   essential: true
  // });

  // });

  // // Create a map instance
  // const map = new mapboxgl.Map({
  //   container: "map",  // container ID
  //   style: "mapbox://styles/mapbox/streets-v11",
  //   center: [0, 0], // Initial center coordinates
  //   zoom: 2 // Initial zoom level
  // });

  // // Add a marker for the randomly selected city
  // new mapboxgl.Marker()
  //   .setLngLat(randomCity.coordinates)
  //   .addTo(mapContainer);

  return (
    // <>
    //   {/* The mapContainer ref specifies that App should be drawn to the HTML page in a new <div> element. */}
    //   <div ref={mapContainer} className="map-container" />
    // </>

    <>
      <Typography variant="h4">Welcome to My Map</Typography>
      {/* <div id="map" /> */}
    </>
  );
};

export default Map;
