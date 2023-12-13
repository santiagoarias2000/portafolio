import style from "./page.module.css";
import imagenguia from "../../assets/guiaelectoralpag.png";
import imagenauto from "../../assets/autobochica.png";
import imagenbot from "../../assets/boturing.png";
import imagenhit from "../../assets/hitdatapag.png";

export default function Portafolio() {
  return (
    <>
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={`${style.title_box} text-center`}>
                <h3 className={style.title_a}>Portfolio</h3>
                <p className={style.subtitle_a}>
                  ¡Hola! Soy Santiago Arias, un apasionado ingeniero de sistemas
                  especializado en el desarrollo de aplicaciones web
                  innovadoras. A lo largo de mi carrera, he creado diversas
                  soluciones digitales que combinan un diseño intuitivo con un
                  rendimiento excepcional. Explora mi portafolio para descubrir
                  una variedad de aplicaciones web que he desarrollado, desde
                  plataformas empresariales hasta proyectos personales. Cada
                  aplicación refleja mi compromiso con la excelencia técnica y
                  la satisfacción del usuario.
                </p>
                <div className={style.line_mf}></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={style.work_box}>
                <a
                  href="https://guiaelectoraldecolombia.com/"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  target="_blank"
                >
                  <div className={style.work_img}>
                    <img
                      src={imagenguia.src}
                      alt="imagen.png"
                      className={style.img_fluid}
                      width={420}
                      height={220}
                    />
                  </div>
                </a>
                <div className={style.work_content}>
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className={style.w_title}>
                        Guia Electoral de Colombia
                      </h2>
                      <div className={style.w_more}>
                        <span className={style.w_ctegory}>
                          PWA en React.tsx
                        </span>{" "}
                        / <span className={style.w_date}>18 Sep. 2022</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className={style.w_like}>
                        <a href="/">
                          {" "}
                          <span className="bi bi-plus-circle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.work_box}>
                <a
                  href="https://autobochicafrontend-d64c7.web.app/"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  target="_blank"
                >
                  <div className={style.work_img}>
                    <img
                      src={imagenauto.src}
                      alt="imagen.png"
                      className={style.img_fluid}
                      width={420}
                      height={220}
                    />
                  </div>
                </a>
                <div className={style.work_content}>
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className={style.w_title}>Auto Bochica</h2>
                      <div className={style.w_more}>
                        <span className={style.w_ctegory}>
                          PWA en React.tsx
                        </span>{" "}
                        / <span className={style.w_date}>18 Ago. 2023</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className={style.w_like}>
                        <a href="/">
                          {" "}
                          <span className="bi bi-plus-circle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.work_box}>
                <a
                  href="https://boturing-675da.web.app/login"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  target="_blank"
                >
                  <div className={style.work_img}>
                    <img
                      src={imagenbot.src}
                      alt="imagen.png"
                      className={style.img_fluid}
                      width={420}
                      height={220}
                    />
                  </div>
                </a>
                <div className={style.work_content}>
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className={style.w_title}>Boturing</h2>
                      <div className={style.w_more}>
                        <span className={style.w_ctegory}>
                          PWA en React.jsx
                        </span>{" "}
                        / <span className={style.w_date}>10 Ene. 2022</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className={style.w_like}>
                        <a href="/">
                          {" "}
                          <span className="bi bi-plus-circle"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.work_box}>
                <a
                  href="https://hitdata.com.co"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  target="_blank"
                >
                  <div className={style.work_img}>
                    <img
                      src={imagenhit.src}
                      alt="imagen.png"
                      className={style.img_fluid}
                      width={420}
                      height={220}
                    />
                  </div>
                </a>
                <div className={style.work_content}>
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className={style.w_title}>Hit Data</h2>
                      <div className={style.w_more}>
                        <span className={style.w_ctegory}>
                          Pagina en React.jsx
                        </span>{" "}
                        / <span className={style.w_date}>12 Dic. 2023</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className={style.w_like}>
                        <a href="/">
                          {" "}
                          <span className="bi bi-plus-circle"></span>
                        </a>
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
