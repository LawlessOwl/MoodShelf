import React from "react";
import style from "./style/mainContent.module.css"

export const MainContent = () => {
    return (
        <div className={style.mainContentBox}>
            <div className={style.reccentlyUppdate}>
                <h2>Недавно добавлены</h2>
                    <ul>
                        <li>aa</li>
                        <li>aa</li>
                        <li>aa</li>
                        <li>aa</li>
                        <li>aa</li>
                    </ul>
            </div>
            <div className={style.bestGenres}>
                <h2>Лучшее в жанре</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </div>
            <div className={style.genres}>
                <h2>Жанры</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </div>
      </div>
    )
}