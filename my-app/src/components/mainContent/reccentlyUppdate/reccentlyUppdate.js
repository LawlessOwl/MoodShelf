import React from "react";
import style from "../style/mainContent.module.css"
import styles from "./styles/reccentlyUppdate.module.css"

export const Uppdate = () => {
    return (
        <div className={style.reccentlyUppdate}>
        <h2>Недавно добавлены</h2>
            <ul className={styles.booksBody}>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/goblinSlayer.webp" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Убийца гоблинов</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/classroom.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Добро пожаловать в класс превосходства</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/konosuba.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Этот замечательный мир!</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/overlord.jpg" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>Повелитель</h5>
                </li>
                <li className={styles.booksItem}>
                    <img alt="" src="books-cover/slime.webp" className={styles.booksCovers}></img>
                    <h5 className={styles.textLine}>О моём перерождении в слизь</h5>
                </li>
            </ul>
        </div>
    )
}