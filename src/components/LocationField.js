import React, { useState } from "react";

function LocationField({ onLocationChange }) {
    const [location, setLocation] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setLocation(value);
        onLocationChange(value); // Pass the entered location to the parent component
    };

    return (
        <div className="text-center">
            <input 
                type="text" 
                value={location} 
                onChange={handleChange} 
                className="border bg-gray-200 border-4 text-center p-1 m-2"
                placeholder="Enter Location"
            />
        </div>
    );
}

export default LocationField;
