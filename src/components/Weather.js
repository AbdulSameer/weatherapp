import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather({ location }) {
  const [locationData, setLocationData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) return; // Skip the API call if location is not set

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=6b8ea123bb004345b9d194504232012&q=${location}&aqi=no`;

    axios
      .get(apiUrl)
      .then((res) => {
        setLocationData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [location]);
  const cityName = locationData?.location?.name || "Unknown Location";
  if (loading)
    return (
      <div className="text-center">
        <h2>{cityName}</h2> {/* Display the location name */}
        <p>Local Time: {locationData.location.localtime}</p>
        <p>Temperature: {locationData.current.temp_c}°C</p>
        <p>Condition: {locationData.current.condition.text}</p>
      </div>
    );
  if (error) return <div className="text-center">Error: Please enter the correct location</div>;
}

export default Weather;
