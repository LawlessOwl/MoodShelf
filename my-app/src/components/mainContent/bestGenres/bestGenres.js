import React from "react";
import style from "../style/mainContent.module.css"
import styles from "./styles/bestGenres.module.css"

export const BestGenres = () => {
    return (
        <div className={style.bestGenres}>
            <h2>Лучшее в жанре</h2>
                <ul className={styles.booksBody}>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/grimgarOfAshesAndIllusion.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Гримгар пепла и иллюзий</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/joblessReincarnation.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Реинкарнация безработного: История о приключениях в другом мире</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/spiceAndWolf.webp" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Волчица и пряности</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/reZero.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Re:Zero. Жизнь с нуля в альтернативном мире</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/rokkaNoYuusha.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Герои шести цветов</h5>
                </li>
                </ul>
        </div>
    )
}