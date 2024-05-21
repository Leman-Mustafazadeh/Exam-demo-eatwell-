import React from 'react'
import styles from "./index.module.scss"
const EatWell = () => {
  return (
  <div className={styles.relative}>
      <section className={styles.demos}>
      <div className="container">
        <div className="demowell">
            <div className={styles.demowell_head}>
                <h1>Welcome To EatWell</h1>
                <p>Come and eat well with our delicious & healthy foods.</p>
                <button>Reservation</button>
            </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default EatWell
