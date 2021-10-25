import React from 'react'
import "./Inscrpcion.css"

function Inscripcion() {
    return (
        <div>
          <section id="Contact" className="content-section">
            <div className="container">
              <div className="block-heading">
                <h1>INSCRIPCIÓN</h1>
                <h2>
                  ¡Completá tus datos!
                </h2>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-6 col-lg-6 pt-4 pb-4">
                  

                <section className="newsletter">
                  <form className="newsletter-form">
                    <fieldset>
                      <input type="email" className="newsletter-email" placeholder="mail@mail.com"/>
                      <button type="submit" className="newsletter-submit"><span>Enviar</span></button>
                    </fieldset>
                  </form>
                </section>


                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Inscripcion
