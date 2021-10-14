import React from "react"
import Slide from "./Slide";
import Onda from '../../assets/images/background/onda.png'
import './Expertos.css';


function Expertos() {
    return (
        <div>
          <section id="Testimonials" className="content-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="block-heading">
                    <h1>NUESTROS EXPERTOS</h1>
                    <h2>
                      ¡Preparados para el futuro!
                    </h2>
                  </div>
                </div>
                <Slide/>
              </div>
            </div>
            <img className="onda" src={Onda} alt="Onda"/>
          </section>
        </div>
    )
}

export default Expertos