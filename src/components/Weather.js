import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather({ location }) {
  const [locationData, setLocationData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location) return; // Skip the API call if location is not set

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}&aqi=no`;

    axios
      .get(apiUrl)
      .then((res) => {
        setLocationData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [location]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Extract the location name from the locationData
  const cityName = locationData?.location?.name || "Unknown Location";

  return (
    <div>
      <h2>{cityName}</h2> {/* Display the location name */}
      <p>Local Time: {locationData.location.localtime}</p>
      <p>Temperature: {locationData.current.temp_c}°C</p>
      <p>Condition: {locationData.current.condition.text}</p>
    </div>
  );
}

export default Weather;
