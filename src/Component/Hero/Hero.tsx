import React from 'react'
import Logo from '../Logo/Logo' 

function Hero() {
    return (
        <div>
            <section id="Banner">
                <Logo/>
                <div className="container content-wrap text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h1 className="animTitle">
                                ENTREMOS JUNTOS A ESTA NUEVA DIMNENSIÓN
                            </h1>
                            <a className="btn btn-primary btn-xl smooth-scroll animBtn" href="#Contact">
                                ¡Inscribite!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
        </div>
    )
}

export default Hero
