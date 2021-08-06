import React from 'react'
import '../styles/registerprev.scss'
import RegLogo from '../img/Vector.svg'
import RegImg from '../img/photo_2019-11-18_09-07-46 1.jpg'

export default function RegisterPrev() {
    return (
        <div>
            <div className="container">
                <div className="register-prev">
                    <div className="info-block">
                        <h1 className="register-title">Зареєструвати команду</h1>
                        <p className="register-subtitle">Йоу, вже зібрали команду та хочете поборотися за 1-ше місце?</p>
                        <p style={{ width: '340px' }}>Тоді хутко заповнюйте форму реєстрації команди</p>
                        <button className="btn btn-register"><span className="psevdo">РЕЄСТРАЦІЯ</span></button>
                    </div>
                    <div className="register-logo">
                        <img src={RegLogo} alt="Register Logo" />
                    </div>
                    <div className="register-img">
                        <img src={RegImg} alt="Register Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
