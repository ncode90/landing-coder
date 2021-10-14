import React from 'react'

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
                  <div className="form-wrap">
                    <form action="" method="post">
                      <div className="fname floating-label">
                        <input type="text" className="floating-input" name="full name" />
                        <label>Nombre</label>
                      </div>
                      <div className="fname floating-label">
                        <input type="text" className="floating-input" name="full name" />
                        <label>Apellido</label>
                      </div>
                      <div className="email floating-label">
                        <input type="email" className="floating-input" name="email" />
                        <label>Email</label>
                      </div>
                      <div className="contact floating-label">
                        <input type="tel" className="floating-input" name="contact" />
                        <label>Celular</label>
                      </div>
                      <div className="company floating-label">
                        <textarea className="floating-input" name="company"></textarea>
                        <label>Mensaje</label>
                      </div>
                      <div className="submit-btn">
                        <button type="submit">Inscribirse</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Inscripcion
