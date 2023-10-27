import React from "react";
import style from "./style/topRated.module.css"

export const TopRated = () => {
    return (
        <div className={style.boxBackground}>
            <div className={style.box}>
                <div className={style.topRatedItem}></div>
                <div className={style.topRatedItem}></div>
                <div className={style.topRatedItem}></div>
                <div className={style.topRatedItem}></div>
            </div>
        </div>
    )
}