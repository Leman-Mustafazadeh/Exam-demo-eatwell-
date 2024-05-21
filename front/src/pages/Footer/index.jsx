import React from 'react'
import styles from "./index.module.scss"
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className={styles.foot}>
                <div className={styles.foot_left}>
                    <h3>ABOUT US</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?</p>
                </div>

                <div className={styles.foot_head}>
                    <h3>THE RESTAURANT</h3>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Chefs</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
                </div>


                <div className={styles.foot_head}>
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li><a href="">Foods</a></li>
                        <li><a href="">Drinks</a></li>
                        <li><a href="">Breakfast</a></li>
                        <li><a href="">Brunch</a></li>
                        <li><a href="">Dinner</a></li>
                    </ul>
                </div>


                <div className={styles.foot_head}>
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li><a href="">Foods</a></li>
                        <li><a href="">Drinks</a></li>
                        <li><a href="">Breakfast</a></li>
                        <li><a href="">Brunch</a></li>
                        <li><a href="">Dinner</a></li>
                    </ul>
                </div>


               
            </div>

            <div className={styles.foot_link}>
                <ul>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <p className={styles.copy}>© Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>  by Colorlib</p>
        </div>
    </footer>
  )
}

export default Footer
