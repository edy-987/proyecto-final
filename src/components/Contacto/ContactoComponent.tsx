import "./ContactoComponent.css";

const ContactoComponent = () => {
  return (
    <section className="contact-wrapper">

      <div className="contact-header">
        <h1>Contacto</h1>
        <p>
          Contacta con nuestro equipo y en muy breve te daremos respuesta.
          <br />
          Gracias por tu tiempo.
        </p>
      </div>

      <div className="contact-content">

        <div className="contact-banner">
          <img src="/src/assets/img/presentaciones0_4512.jpg" alt="Contacto Tolsen" />
        </div>

        <div className="contact-form-box">

          <h2 className="contact-form-title">Formulario de contacto</h2>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Nombre y apellido *</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Asunto *</label>
                <input type="text" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Teléfono *</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Mensaje *</label>
                <textarea required></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>País</label>
                <select>
                  <option>Uruguay</option>
                  <option>Bolivia</option>
                  <option>Argentina</option>
                  <option>Chile</option>
                  <option>Perú</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ width: "48%" }}>
              <label>Empresa</label>
              <input type="text" />
            </div>

            <div className="form-submit">
              <button type="submit">Enviar</button>
            </div>

            <p className="privacy-text">
              Los datos suministrados son confidenciales y serán tratados como privados.
              <br />
              Gracias por el interés.
            </p>

          </form>
        </div>
      </div>

    </section>
  );
};

export default ContactoComponent;