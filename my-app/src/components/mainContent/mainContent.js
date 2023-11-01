import React from "react";
import style from "./style/mainContent.module.css"
import { Uppdate } from "./reccentlyUppdate/reccentlyUppdate";
import { BestGenres } from "./bestGenres/bestGenres";
import { Genres } from "./genres/genres";

export const MainContent = () => {
    return (
        <div className={style.mainContentBox}>
            <Uppdate/>
            <BestGenres/>
            <Genres/>
      </div>
    )
}