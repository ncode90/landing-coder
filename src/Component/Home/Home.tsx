import React, { useEffect, useState } from "react";
import Hero from '../Hero/Hero'
import Presentamos from '../Presentamos/Presentamos'
import Expertos from '../Expertos/Expertos'
import Apoyan from '../Apoyan/Apoyan'
import Inscripcion from '../Inscripcion/Inscripcion'
import Load from '../Load/Load'

function Home() {

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
            <Hero/>
            <Presentamos/>
            <Expertos/>
            <Apoyan/>
            <Inscripcion/>
        </>
        )}
        </div>
    )
}

export default Home
