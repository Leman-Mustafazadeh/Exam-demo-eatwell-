import React from 'react'
import styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.head}>
            <div className={styles.head_left}>
                <h1>EATWELL
</h1>
            </div>
            <div className={styles.head_right}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Offer</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
