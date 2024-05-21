import React from 'react'
import styles from "./index.module.scss"
const EatCook = () => {
  return (
    <section className={styles.cooks}>
      <div className="container">
        <div className={styles.cook}>
            <div className={styles.cook_left}>

                <h3>OUR STORY</h3>
                <h1>Welcome</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind tex</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <button>Learn More aBOUT us</button>
            </div>
            <div className={styles.cook_right}>
    <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default EatCook
