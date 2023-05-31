import { useState } from 'react'
import styles from './home.module.css'
import {weathers} from './weathers.data'


function Home () {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Weather App React</h1>
        <div className={styles.container}>
          {weathers.map(globalWeather => {
            return (
              <div className={styles.item}>
                <div key={globalWeather.id} className={styles.key}></div>
                <div
                  className={styles.view}
                  style={{
                    backgroundImage: `url(${globalWeather.image})`
                  }}/>
                <div className={styles.weatherInfo}>
                  <h2>{globalWeather.name}</h2>
                  <p>{globalWeather.city}</p>
                  <a href={globalWeather.wether}>
                    <button className={styles.button}>read more</button>
                  </a>
                </div>
              </div>
            )})}
        </div>
      </div>
  )
}

export default Home;