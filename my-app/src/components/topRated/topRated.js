import React from "react";
import style from "./style/topRated.module.css"

export const TopRated = () => {
    return (
        <div className={style.boxBackground}>
            <ul className={style.box}>
                <li className={style.topRatedItem}></li>
                <li className={style.topRatedItem}></li>
                <li className={style.topRatedItem}></li>
                <li className={style.topRatedItem}></li>
            </ul>
        </div>
    )
}