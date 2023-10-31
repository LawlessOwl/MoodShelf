import React from "react";
import style from "./style/topRated.module.css"

export const TopRated = () => {
    return (
        <div className={style.boxBackground}>
            <ul className={style.box}>
                <li className={style.topRatedItem}>
                    <img alt="" src="books-cover/rokkaNoYuusha.jpg" className={style.booksCovers}></img>
                    <h5>Герои шести цветов</h5>
                </li>
                <li className={style.topRatedItem}>
                    <img alt="" src="books-cover/noGameNoLife.jpg" className={style.booksCovers}></img>
                    <h5>Нет игры нет жизни!</h5>
                </li>
                <li className={style.topRatedItem}>
                    <img alt="" src="books-cover/reZero.jpg" className={style.booksCovers}></img>
                    <h5>Re:Zero. Жизнь с нуля в альтернативном мире</h5>
                </li>
                <li className={style.topRatedItem}>
                    <img alt="" src="books-cover/spiceAndWolf.webp" className={style.booksCovers}></img>
                    <h5>Волчица и пряности</h5>
                </li>
            </ul>
        </div>
    )
}