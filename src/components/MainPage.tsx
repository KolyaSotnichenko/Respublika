import React from 'react'
import '../styles/mainpage.scss'
import Photo from '../img/photo_2020-09-15_14-35-54 1.jpg'

export default function MainPage() {
    return (
        <div className="container">
            <div className="info">
                <div className="slider-block">
                    <p className="slider-subtitle">Аграрна республіка - незабутній фестиваль студенства.</p>
                    <ul className="slider-list">
                        <li><p>окремий державний устрій</p></li>
                        <li><p>15 команд</p></li>
                        <li><p>180 учасників</p></li>
                        <li><p>20 міністрів</p></li>
                        <li><p>10 організаторів</p></li>
                        <li><p>4 незабутніх дні</p></li>
                    </ul>

                    <h1 className="slider-title">АГРАРНА РЕСПУБЛІКА</h1>
                    <h3 style={{ fontSize: '32px' }}>2021</h3>

                    <div className="slider-btn">
                        <p className="btn-1">01</p>
                        <span></span>
                        <p className="btn-2">05</p>
                    </div>
                </div>
                <div className="image-block">
                    <div className="photo">
                        <img src={Photo} alt="" />
                        <button className="btn btn-photo"><span className="psevdo">Посмотреть</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
