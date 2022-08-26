import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

const geolocationAPI = navigator.geolocation;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGhydXZ2anlvdGkiLCJhIjoiY2w3OWd0NnJrMDQ2ZjQxcHVzbWJnOWhzZyJ9._WVq0SJBALvxB3YLP8TvgQ";
const areaPins = {
  type: "geojson",
  data: {
    type: "Feature",
    geometry: {
      type: "Polygon",
      // These coordinates outline Maine.
      coordinates: [
        [
          [-67.13734, 45.13745],
          [-66.96466, 44.8097],
          [-68.03252, 44.3252],
          [-69.06, 43.98],
          [-70.11617, 43.68405],
          [-70.64573, 43.09008],
          [-70.75102, 43.08003],
          [-70.79761, 43.21973],
          [-70.98176, 43.36789],
          [-70.94416, 43.46633],
          [-71.08482, 45.30524],
          [-70.66002, 45.46022],
          [-70.30495, 45.91479],
          [-70.00014, 46.69317],
          [-69.23708, 47.44777],
          [-68.90478, 47.18479],
          [-68.2343, 47.35462],
          [-67.79035, 47.06624],
          [-67.79141, 45.70258],
          [-67.13734, 45.13745],
        ],
      ],
    },
  },
};

export default function FloodForcastInundation() {
  const mapContainer = useRef(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [mapReady, setMapReady] = useState(null);
  const [mapCenter, setMapCenter] = useState([-68.137343, 45.137451]);
  //   const [areaPins, setAreaPins] = useState([]);
  const [mapObject, setMap] = useState();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-68.137343, 45.137451],
      zoom: 12,
    });
    try {
      map.addControl(new mapboxgl.FullscreenControl());
      setMap(map);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (mapObject) {
      mapObject.setCenter(mapCenter).setZoom(10);
    }

    // // eslint-disable-next-line no-restricted-syntax
    // for (const feature of geojson.features) {
    //   const el = document.createElement('div');
    //   el.className = 'marker';
    //   const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    //     'Construction on the Washington Monument began in 1848.'
    //   );

    //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(mapObject);

    //   // el.addEventListener('click', () => {
    //   //   // eslint-disable-next-line no-alert
    //   //   //  alert("Marker Clicked.");
    //   //   handleOpen();
    //   // });
    // }
  }, [mapCenter, mapObject]);

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          console.log("Something went wrong getting your position!", error);
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, [geolocationAPI]);

  useEffect(() => {
    console.log(mapObject);
    if (mapObject) {
      // Add a new layer to visualize the polygon.
      mapObject.on("load", () => {
        mapObject.addSource("maine", areaPins);

        mapObject.addLayer({
          id: "maine",
          type: "fill",
          source: "maine", // reference the data source
          layout: {},
          paint: {
            "fill-color": "#0080ff", // blue color fill
            "fill-opacity": 0.5,
          },
        });
        // Add a black outline around the polygon.
        mapObject.addLayer({
          id: "outline",
          type: "line",
          source: "maine",
          layout: {},
          paint: {
            "line-color": "#000",
            "line-width": 3,
          },
        });

        const el = document.createElement("div");
        el.className = "marker";
        new mapboxgl.Marker(el)
          .setLngLat([-68.137343, 45.137451])
          .addTo(mapObject);
      });
    }
  }, [mapObject]);

  return (
    <section id="map" style={{ marginTop: 8, width: "50%" }}>
      <div className="container mx-auto">
        <div className="map_and_form">
          <div className="iframe">
            <div ref={mapContainer} style={{ height: "80vh" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
