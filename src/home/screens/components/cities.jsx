import React from 'react';
import { Link } from 'react-router-dom';

import weatherData from '../../voivodeships.json';
import styles from '../cities.module.css';

function Cities() {
  return (
    <div className={styles.container}>
      <h1>Weather App React</h1>
      <div className={styles.gridContainer}>
        {Object.entries(weatherData).map(([voivodeship, cities]) =>
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
                <Link to={city.weather} className={styles.button}>
                  read more
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cities;