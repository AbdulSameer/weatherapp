import './App.css';
import React,{useState} from 'react';
import Banner from './components/Banner';
import LocationField from './components/LocationField';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState(""); // Initialize location state

  const handleLocationChange = (value) => {
    setLocation(value); // Update location state when location is changed
  };

  return (
    <>
      <Banner />
      <LocationField onLocationChange={handleLocationChange} />
      <Weather location={location} />
    </>
  );
}


export default App;
