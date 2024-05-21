import React from 'react'
import styles from "./index.module.scss"
const News = () => {
  return (
  <section className={styles.news}>
    <div className="container">
        <h1>News</h1>
        <p className={styles.news_tag}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
   
    <div className={styles.news_item}>
        <div className={styles.news_head}>
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg.webp" alt="" />
         <div className={styles.news_title}>
         <h2>We Have Dilecious Food</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Read More</button>
         </div>
        </div>

        <div className={styles.news_head}>
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg.webp" alt="" />
         <div className={styles.news_title}>
         <h2>Chef Special Menu</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Read More</button>
         </div>
        </div>

        <div className={styles.news_head}>
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg.webp" alt="" />
         <div className={styles.news_title}>
         <h2>Merriage Celebrations</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Read More</button>
         </div>
        </div>
    </div>
    </div>
  </section>
  )
}

export default News
