import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import YoutubeEmbed from "./YoutubeEmbed";
import './Video.css'
import Load from '../Load/Load'

function Exp() {

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
                        <div className="col-sm-12 col-md-10 col-lg-10 mt-2">
                            {/* 
                            <h2 className="mb-2">
                                NOMBRE DEL EXPERTO
                            </h2>
                            */}
                            <YoutubeEmbed embedId="rokGy0huYEA" />
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

export default Exp
