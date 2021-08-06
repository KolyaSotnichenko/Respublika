import React from 'react'
import '../styles/header.scss'
import Logo from '../img/RESPUBL1KA.svg'
import Chat from '../img/Group 84.svg'


export default function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} height='25' width='200' alt="Logo" />
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-items">
                        <li className="navbar-items__item"><a className="link" href="#">Главная</a></li>
                        <li className="navbar-items__item"><a className="link" href="#">Галерея</a></li>
                        <li className="navbar-items__item"><a className="link" href="#"><span style={{ color: '#EF6A20', marginLeft: '5px' }}>Live</span>Таблица</a></li>
                        <li className="navbar-items__item"><a className="link" href="#">Команды</a></li>
                        <li className="navbar-items__item"><a className="link" href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className="chat">
                    <div className="chat-item">
                        <a href="#"><img src={Chat} alt="" /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}
