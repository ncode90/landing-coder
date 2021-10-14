import React from 'react'
import ma1 from '../../assets/images/marcas/mercadolibre.png'
import ma2 from '../../assets/images/marcas/google.png'
import ma3 from '../../assets/images/marcas/accenture.png'

function Apoyan() {
    return (
        <div>
          <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h1>
                  LAS COMPAÑIAS QUE NOS ACOMPAÑAN
                </h1>
              </div>
              <div className="row">
                <div className="col-10 d-flex justify-content-center text-center">
                  <div className="col-md-4 col-sm-6 mt-4 mb-4">
                    <img src={ma1} alt="Mercado Libre" className="img-fluid"/>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4 mb-4">
                    <img src={ma2} alt="Google" className="img-fluid"/>
                  </div>
                  <div className="col-md-4 col-sm-6 mt-4 mb-4">
                    <img src={ma3} alt="Accenture" className="img-fluid"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Apoyan
