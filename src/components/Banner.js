import React from "react";

function Banner() {
  return (
    <div>
      <div className="text-center text-4xl text-blue-350">
        <h1>Weather App</h1>
      </div>
      <div
        className="h-[14vh] md:h-[30vh] bg-center bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url(https://tpet.co.uk/wp-content/uploads/edd/2019/07/tp-f-0461-weather-banner.jpg)`,
        }}
      />
    </div>
  );
}

export default Banner;
