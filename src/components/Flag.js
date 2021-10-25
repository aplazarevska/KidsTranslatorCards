import React, { useState, useEffect } from 'react';

const Flag = ({ countryCode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    // Get flag image
    fetch("https://restcountries.eu/rest/v2/lang/es")
    .then(response => response.json())
    .then(data => {
      // setCompleteData(data);
      console.log(data);
      setIsLoaded(true);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  !isLoaded && setIsLoaded(true);

  return (
    <div>
        {/* <img
          src={completeData.filter(country => country.cca2 === countryCode)[0].flag}
          alt="Country Flag"
          style={{width: "30px"}}
        /> */}
      {isLoaded && countryCode &&
        <img
          src="https://res.cloudinary.com/dt5gwt7vu/image/upload/v1633148957/flags/jpn.svg"
          alt="Country Flag"
          style={{width: "30px"}}
        />
      }
    </div>
  )
}

export default Flag;
