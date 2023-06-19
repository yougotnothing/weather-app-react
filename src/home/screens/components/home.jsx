import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../home.module.css';
import weatherData from '../../voivodeships.json';

function Home() {

  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.homeNavbar}>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
      </div>
      <h1>Weather App React</h1>
      <div className={styles.gridHomeContainer}>
        {Object.entries(weatherData).map(([voivodeship, cities]) => (
          <div className={styles.card} key={voivodeship}>
            <div className={styles.key} />
            <div
              className={styles.crest}
              style={{
                backgroundImage: `url(${cities.crest})`,
              }} />
            <div className={styles.voivodeshipInfo}>
              <h2>{cities.voivodeship}</h2>
              <Link to="/cities" className={styles.buttonVoivodeships}>
                read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;