import React from 'react'
import './styles/NotFound.css'
import NotFoundImg from './images/NotFoundImg.png'

const NotFound = () => {
    return (
        <div>
            <body class="bg-purple">
        
        <div class="stars">
            <div class="central-body">
                <h1>Parece que te haz perdido en el espacio</h1>
                <img class="image-404" src={NotFoundImg} width="300px"/>
                <a href="/" class="btn-go-home">VOLVER AL INICIO</a>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div class="glowing_stars">
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