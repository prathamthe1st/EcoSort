import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const map = L.map("map").setView(currentLocation, 13);
      setMap(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      L.marker(currentLocation)
        .addTo(map)
        .bindPopup("You are here!")
        .openPopup();
    }
  }, [currentLocation]);

  return <div id="map" style={{ height: "400px", width: "400px" }}></div>;
}

export default Map;
