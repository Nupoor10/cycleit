import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import toast from "react-hot-toast";
import axios from "axios";
import './Recycle.css'
const apiKey = import.meta.env.VITE_GEOAPIFY_KEY;

const Recycle = () => {
  const [position, setPosition] = useState([]);
  const [city, setCity] = useState('');
  const [points, setPoints] = useState([]);

  const geocodeCity = async () => {
    try {
      const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${city}&lang=en&limit=1&format=json&apiKey=${apiKey}`);
      if (response && response?.data?.results[0]?.place_id) {
        const placeID = response.data.results[0].place_id;
        const newPosition = [response.data.results[0].lat, response.data.results[0].lon];
        setPosition(newPosition);
        return placeID;
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      toast.error("Error geocoding city. Please try again.");
      return null;
    }
  };

  const fetchRecyclingCenters = async (placeID) => {
    try {
      const response = await axios.get(`https://api.geoapify.com/v2/places?categories=service.recycling&filter=place:${placeID}&limit=20&apiKey=${apiKey}`);
      if (response && response?.data?.features) {
        const places = response.data.features
        setPoints(prevPoints => [
            ...prevPoints,
            ...places.map(item => ({
              lat: item.geometry.coordinates[1],
              lon: item.geometry.coordinates[0],
              address: item.properties?.formatted
            })),
          ]);
      }
    } catch (error) {
      console.error("Recycling centers fetch error:", error);
      toast.error("Error fetching recycling centers. Please try again.");
    }
  };

  const getPlaces = async () => {
    const placeID = await geocodeCity();
    if (placeID) {
      await fetchRecyclingCenters(placeID);
    }
  };

  return (
    <div className="recycle__page__container">
      <h1>Find Recycling Centres near You!</h1>
      <p>Enter your city in the format below : Paris, France</p>
      <div className="search__area">
        <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
        <button className="secondary__btn" onClick={getPlaces}>Search</button>
      </div>
      {(position.length === 2) ? (
        <MapContainer id="map" center={[position[0], position[1]]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.length > 0 &&
          points.map((item, index) => (
            <Marker
              key={index}
              position={[ item?.lat, item?.lon ]}
            >
              <Popup>{item?.address}</Popup>
            </Marker>
          ))}
      </MapContainer>
      ) : "Enter a City to View Map"}
      
    </div>
  );
};

export default Recycle;
