import { useState } from 'react'
import {styles} from './home.module.css'
import {wethers} from './wethers.data'


function home () {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Wether App React</h1>
        <div>
          {wethers.map(globalWether => {
            return (
              <div className={styles.item}>
                <div key={globalWether.id} className={styles.key}></div>
                <div
                  className={styles.view}
                  style={{
                    backgroundImage: `url(${globalWether.image})`
                  }}/>
                <div className={styles.wetherInfo}>
                  <h2>{globalWether.name}</h2>
                  <p>{globalWether.city}</p>
                  <link to={globalWether.wether}>
                  <button>read more</button>
                  </link>
                </div>
              </div>
            )})}
        </div>
      </div>
  )
}

export default home