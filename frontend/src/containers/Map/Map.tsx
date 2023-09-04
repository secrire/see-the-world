import { useRef, useEffect } from "react";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import mapboxgl, {
  Map as MapboxMap,
  Marker as MapboxMarker,
  LngLatLike,
} from "mapbox-gl";
//
import env from "../../utils/env";
import { useSelectedCityContext } from "../../stores/selectedCityStore";

mapboxgl.accessToken = env.MAPBOX_API_KEY;

type MapProps = {
  setMarker: React.Dispatch<React.SetStateAction<MapboxMarker | null>>;
};

const Map = ({ setMarker }: MapProps) => {
  const { selectedCity } = useSelectedCityContext();

  // The container option tells Mapbox GL JS to render the map inside a specific DOM element. Here, the app expects to receive a mapContainer useRef. Later you will assign the ref to an HTML element that will act as the map container.
  const mapContainer = useRef<HTMLDivElement | null>(null);

  // you also created a map useRef to store the initialize the map. The ref will prevent the map from reloading when the user interacts with the map.
  const map = useRef<MapboxMap | null>(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/satellite-v8",
      center: [0, 0] as LngLatLike, // Initial center coordinates
      zoom: 1, // Initial zoom level
    });
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const selectedCoordinates = [
        Number(selectedCity.longitude),
        Number(selectedCity.latitude),
      ] as LngLatLike;

      // Add a marker for the selected city
      const tempMarker = new mapboxgl.Marker()
        .setLngLat(selectedCoordinates)
        .addTo(map.current as MapboxMap);

      setMarker(tempMarker);

      // Fly to the selected city
      map.current?.flyTo({
        center: selectedCoordinates,
        zoom: 4,
        essential: true,
      });
    } else {
      // Back to initial center coordinates & zoom level
      map.current?.flyTo({
        center: [0, 0] as LngLatLike,
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
