import React from 'react'
import './styles/NotFound.css'
import NotFoundImg from './images/NotFoundImg.png'
import SadBoy from './images/SadBoy.png'
import CrazyMoon from './images/CrazyMoon.png'
import CrazySun from './images/CrazySun.png'
import Header from '../components/Header'

const NotFound = () => {
    return (
        <div>
            <body class="bg-purple">
            <Header className='Header'/>
        <div class="stars">
            <div className="central-body">
                <h1>Te perdiste?</h1>
                <a href="/" className="active">INICIO</a>
                <img class="image-404" src={NotFoundImg} width="300px"/>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_moon" src={CrazyMoon} width="150px"/>
                    <img class="object_sun" src={CrazySun} width="200px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src={SadBoy} width="150px"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>

        </div>

    </body>
        </div>
    )
}

export default NotFound