import React from "react";
import { useHistory } from "react-router-dom";

import weatherData from "../../voivodeships.json";
import styles from "../cities.module.css";

function Cities() {
  const history = useHistory();

  const handleReadMore = (path) => {
    history.push(path);
  };

  return (
    <div className={styles.container}>
      <h1>Weather App React</h1>
      <div className={styles.gridContainer}>
        {Object.entries(weatherData).map(([cities]) =>
          cities.map((city) => (
            <div className={styles.item} key={city.city}>
              <div className={styles.key} />
              <div
                className={styles.view}
                style={{
                  backgroundImage: `url(${city.image})`,
                }}
              />
              <div className={styles.weatherInfo}>
                <h2>{city.city}</h2>
                <button
                  className={styles.button}
                  onClick={() => handleReadMore(city.weather)}
                >
                  read more
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cities;
