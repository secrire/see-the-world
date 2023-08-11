import React, { useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import env from "../../utils/env.js";
import { useSelectedCityContext } from "../../stores/selectedCityStore";

mapboxgl.accessToken = env.MAPBOX_API_KEY;

const Map = ({ setMarker }) => {
  const { selectedCity } = useSelectedCityContext();

  // The container option tells Mapbox GL JS to render the map inside a specific DOM element. Here, the app expects to receive a mapContainer useRef. Later you will assign the ref to an HTML element that will act as the map container.
  const mapContainer = useRef(null);

  // you also created a map useRef to store the initialize the map. The ref will prevent the map from reloading when the user interacts with the map.
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-v8",
      center: [0, 0], // Initial center coordinates
      zoom: 1, // Initial zoom level
    });
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const selectedCoordinates = [
        selectedCity.longitude,
        selectedCity.latitude,
      ];

      // Add a marker for the selected city
      const marker = new mapboxgl.Marker()
        .setLngLat(selectedCoordinates)
        .addTo(map.current);

      setMarker(marker);

      // Fly to the selected city
      map.current.flyTo({
        center: selectedCoordinates,
        zoom: 4,
        essential: true,
      });
    } else {
      // Back to initial center coordinates & zoom level
      map.current.flyTo({
        center: [0, 0],
        zoom: 1,
        essential: true,
      });
    }
  }, [selectedCity]);

  return (
    <>
      {/* The mapContainer ref specifies that App should be drawn to the HTML page in a new <div> element. */}
      <div ref={mapContainer} className="map-container" />
    </>
  );
};

export default Map;
