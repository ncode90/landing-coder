import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import CountDownTimer from './CountDownTimer';
import './Countdown.css'
import Load from '../Load/Load'

function Regresiva() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
        {loading && <Load/>} 
        {!loading && (
        <>
            <section id="Banner" className="content-section">
                <Logo/>
                <div className="container content-wrap text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 col-md-10 col-lg-10">
                            <h1>
                                CADA VEZ FALTA MENOS
                            </h1>
                            <h1>
                                <CountDownTimer hours={70} minutes={20} seconds={40}/>
                            </h1>
                            <p>
                                cuenta regresiva
                            </p>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>
         </>
        )}
        </div>
    )
}

export default Regresiva
