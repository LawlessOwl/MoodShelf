import React from "react";
import style from "./../header/Style/header.module.css"
export const Header = () => {
    return (
    <header className={style.headerBox}>
      <h3>MoodShelf</h3>
      <p>Прочитано</p>
      <p>Сейчас читают</p>
      <p>Каталог</p>
      <input type="search" placeholder="Что ищем?"></input>
      <p>Войти</p>
    </header>
    )
}