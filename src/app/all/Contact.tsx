import style from "./page.module.css";


export default function Contact() {


  return (
    <>
      <section
        id="contact"
        className={`${style.paralax_mf} ${style.footer_paralax}  ${style.sect_mt4} route`}
      >
        <div className={style.overlay_mf}></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={style.contact_mf}>
                <div id="contact" className={style.box_shadow_full}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={style.title_box_2}>
                        <h5 className={style.title_left}>Contactame</h5>
                      </div>
                      <div>
                        <form
                          action="forms/contact.php"
                          method="post"
                          role="form"
                          className={style.php_email_form}
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className={style.form_control}
                                  id="name"
                                  placeholder="Nombre"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className={style.form_control}
                                  name="email"
                                  id="email"
                                  placeholder="Contacto"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className={style.form_control}
                                  name="message"
                                  placeholder="Mensaje"
                                  required
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Enviar Mensaje
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${style.title_box_2} pt-4 pt-md-0`}>
                        <h5 className={style.title_left}>Conóceme un poco más</h5>
                      </div>
                      <div className="more_info">
                        <p className="lead">
                          Mi fascinación por el desarrollo de software va más
                          allá de la escritura de código; es una travesía
                          constante de aprendizaje y crecimiento. Me encanta
                          explorar nuevas tecnologías y enfrentar desafíos que
                          me impulsen a superar mis límites. Cada proyecto es
                          una oportunidad para expandir mis habilidades y
                          contribuir al emocionante mundo del desarrollo.
                          Siempre estoy listo para abrazar nuevas ideas y seguir
                          aprendiendo, porque creo que la verdadera excelencia
                          viene de la combinación de la pasión y la búsqueda
                          continua del conocimiento. ¡Bienvenido a mi viaje de
                          desarrollo!
                        </p>
                        <ul className={style.list_ico}>
                          <li>
                             <a href="https://maps.app.goo.gl/5fZnAChDm38w31Z17" target="_blank" rel="noopener noreferrer"><span className="bi bi-geo-alt"></span> Calle 2a numero 12 - 18 Tunja, Boyacá</a>
                          </li>
                          <li>
                            <span className="bi bi-phone"></span> +573164448635
                          </li>
                          <li>
                            <span className="bi bi-envelope"></span>santiago.ariasm@usantoto.edu.co
                          </li>
                        </ul>
                      </div>
                      <div className={style.socials}>
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/santiagoandres.ariasmancilla" target="_blank" rel="noopener noreferrer">
                              <span className={style.ico_circle}>
                                <i className="bi bi-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className={style.ico_circle}>
                                <i className="bi bi-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className={style.ico_circle}>
                                <i className="bi bi-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span className={style.ico_circle}>
                                <i className="bi bi-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
