import { useState } from 'react';
import styles from './home.module.css';
import weatherData from './voivodeships.json';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>Weather App React</h1>
      <div className={styles.gridContainer}>
        {Object.entries(weatherData).map(([voivodship, cities]) => {
          return Object.entries(cities).map(([city, weather]) => {
            return (
              <div className={styles.item} key={city}>
                <div className={styles.key}></div>
                <div
                  className={styles.view}
                  style={{
                    backgroundImage: `url(${weather.image})`,
                  }}
                />
                <div className={styles.weatherInfo}>
                  <h2>{weather.city}</h2>
                  <p>{weather.voivodeship}</p>
                  <a href={weather.weather}>
                    <button className={styles.button}>read more</button>
                  </a>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Home;