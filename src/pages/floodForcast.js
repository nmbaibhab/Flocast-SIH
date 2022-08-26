import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-unresolved
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGhydXZ2anlvdGkiLCJhIjoiY2w3OWd0NnJrMDQ2ZjQxcHVzbWJnOWhzZyJ9._WVq0SJBALvxB3YLP8TvgQ";
const areaPins = [
  {
    Item: {
      longitude: -70,
      latitude: 42.35,
      ImageUrl:
        "https://www.researchgate.net/publication/334097989/figure/fig1/AS:774821986181121@1561743365796/Flood-Disaster-in-Hiroshima-2018-right-Reference-URL-2.png",
      Pin: "751024",
      Description: "Dummy Data",
    },
  },
  {
    Item: {
      longitude: -71.9,
      latitude: 42.35,
      ImageUrl:
        "https://ca-times.brightspotcdn.com/dims4/default/644a83e/2147483647/strip/true/crop/2577x1718+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffc%2F6b%2F8bc02171e36b8914215dc1616b67%2F9814c3f7e9264fecbd9ba77930b669ea",
      Pin: "751024",
      Description: "Dummy Data",
    },
  },
  {
    Item: {
      longitude: -70.9,
      latitude: 41.35,
      ImageUrl:
        "https://www.researchgate.net/publication/334097989/figure/fig1/AS:774821986181121@1561743365796/Flood-Disaster-in-Hiroshima-2018-right-Reference-URL-2.png",
      Pin: "751024",
      Description: "Dummy Data",
    },
  },
  {
    Item: {
      longitude: -70.9,
      latitude: 43.35,
      ImageUrl:
        "https://drr.ikcest.org/static/upload/f4/f4f9fc24-1e93-11ec-afcf-00163e0618d6_m.jpg",
      Pin: "751024",
      Description: "Dummy Data",
    },
  },
  {
    Item: {
      longitude: -70.9,
      latitude: 42.35,
      ImageUrl:
        "https://www.researchgate.net/publication/334097989/figure/fig1/AS:774821986181121@1561743365796/Flood-Disaster-in-Hiroshima-2018-right-Reference-URL-2.png",
      Pin: "751024",
      Description: "Dummy Data",
    },
  },
  {
    Item: {
      longitude: -70.9,
      latitude: 42.35,
      ImageUrl:
        "https://ca-times.brightspotcdn.com/dims4/default/a9fca4a/2147483647/strip/true/crop/6016x4016+0+0/resize/1486x992!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fce%2Ffd%2Fb0912bba7e60e34ff5201a0c85e8%2F4ac74444906145deab378dc8d018c50b",
      Pin: "751024",
      Description: "Dummy Data",
    },
  },
];

// const geojson = {
//   type: 'FeatureCollection',
//   features: [
//     {
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [142.8235, 43.6203],
//       },
//       properties: {
//         title: 'Mapbox',
//         description: 'Hokaido 1, Japan',
//       },
//     },
//     {
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [142.8535, 43.1203],
//       },
//       properties: {
//         title: 'Mapbox',
//         description: 'Hokaido 2, Japan',
//       },
//     },
//   ],
// };

export default function FloodForcast() {
  const mapContainer = useRef(null);
  const [markerLngLat, setMarkerLngLat] = useState([-70.9, 42.35]);
  // const [mapCenter, setMapCenter] = useState([138.2529, 36.2048]);
  const [mapCenter, setMapCenter] = useState([-70.9, 42.35]);
  //   const [areaPins, setAreaPins] = useState([]);
  const [mapObject, setMap] = useState();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: markerLngLat,
      zoom: 7,
    });
    try {
      map.addControl(new mapboxgl.FullscreenControl());
    } catch (error) {
      console.log(error);
    }

    setMap(map);
  }, []);

  useEffect(() => {
    if (mapObject) {
      mapObject.setCenter(mapCenter).setZoom(8);
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
  }, []);

  useEffect(() => {
    if (mapObject) {
      console.log(areaPins);
      areaPins.forEach((element) => {
        const coordinates = [element.Item.longitude, element.Item.latitude];
        const popup = new mapboxgl.Popup({ offset: -5 }).setHTML(
          `<div class="card text-left">

              <img class="card-img-top" src=${element.Item.ImageUrl} alt="Card image cap">
              <div class="card-body">
                <strong class="text-muted">${element.Item.Pin}</strong>
                <span class="d-block">
                  <i class="fa fa-map-marker start"></i>
                  <small class="text-truncate">${element.Item.Description}</small>
                </span>
              </div>
            </div>`
        );
        const el = document.createElement("div");
        el.className = "marker";
        new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .setPopup(popup)
          .addTo(mapObject);
      });
    }
  }, [mapObject]);

  return (
    <section id="map" style={{ marginTop: 8 }}>
      <div className="container">
        <div className="map_and_form">
          <div className="iframe">
            <div ref={mapContainer} style={{ height: "80vh" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
