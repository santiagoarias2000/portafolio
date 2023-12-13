
import style from './page.module.css'
export default function Contact (){
    return(<>
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" >
      <div className={style.overlay_mf}></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className={style.contact_mf}>
              <div id="contact" className={style.box_shadow_full}>
                <div className="row">
                  <div className="col-md-6">
                    <div className={style.title_box_2}>
                      <h5 className={style.title_left}>
                        Contactame
                      </h5>
                    </div>
                    <div>
                      <form action="forms/contact.php" method="post" role="form" className={style.php_email_form}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className={style.form_control} id="name" placeholder="Nombre" required/>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className={style.form_control} name="email" id="email" placeholder="Contacto" required/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className={style.form_control} name="message"  placeholder="Mensaje" required></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">Enviar Mensaje</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${style.title_box_2} pt-4 pt-md-0`}>
                      <h5 className={style.title_left}>
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more_info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                      </p>
                      <ul className={style.list_ico}>
                        <li><span className="bi bi-geo-alt"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                        <li><span className="bi bi-phone"></span> (617) 557-0089</li>
                        <li><span className="bi bi-envelope"></span> contact@example.com</li>
                      </ul>
                    </div>
                    <div className={style.socials}>
                      <ul>
                        <li><a href=""><span className={style.ico_circle}><i className="bi bi-facebook"></i></span></a></li>
                        <li><a href=""><span className={style.ico_circle}><i className="bi bi-instagram"></i></span></a></li>
                        <li><a href=""><span className={style.ico_circle}><i className="bi bi-twitter"></i></span></a></li>
                        <li><a href=""><span className={style.ico_circle}><i className="bi bi-linkedin"></i></span></a></li>
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
    </>)
}