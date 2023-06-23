import { useHistory } from "react-router-dom";
import styles from "../home.module.css";
import weatherData from "../../voivodeships.json";

function Home() {
  const history = useHistory();

  const handleReadMore = () => {
    history.push('./cities')
    window.location.reload(false);
  };

  return (
    <>
      <div className={styles.homeContainer}>
        <ul className={styles.homeNavbar}>
          <li>
            <button onClick={() => handleReadMore("/home")}>Home</button>
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
              }}
            />
            <div className={styles.voivodeshipInfo}>
              <h2>{cities.voivodeship}</h2>
              <button
                className={styles.buttonVoivodeships}
                onClick={() => handleReadMore()}
              >
                read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
