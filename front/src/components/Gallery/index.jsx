import React from 'react'
import styles from "./index.module.scss"
const Gallery = () => {
  return (
    <section >
        <div className="container">
           <div className={styles.gallery_head}>
           <h1>Gallery</h1>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           <div className={styles.gallery_img}>
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg.webp" alt="" />
            <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg.webp" alt="" />

           </div>
           
           </div>
        </div>
    </section>
  )
}

export default Gallery
