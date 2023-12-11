import style from "./page.module.css";
export default function Tegno() {
  return (
    <>
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={`${style.title_box} text-center`}>
                <h3 className={style.title_a}>Tegnologías</h3>
                <p className={style.subtitle_a}>
                  Como desarrollador web apasionado, utilizo las últimas y más
                  potentes tecnologías para dar vida a experiencias digitales
                  excepcionales. Mi enfoque se basa en la creación de soluciones
                  robustas y atractivas que impulsan la presencia en línea de tu
                  negocio. Algunas de las tecnologías clave que incorporo en mi
                  trabajo son:
                </p>
                <div className={style.line_mf}></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-filetype-jsx"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>React.ts</h2>
                  <p className={`${style.s_description} text-center`}>
                    Implemento bibliotecas y frameworks como React.js para
                    construir interfaces de usuario reactivas y componentes
                    reutilizables, proporcionando una experiencia de usuario
                    fluida.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-filetype-js"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>JavaScript</h2>
                  <p className={`${style.s_description} text-center`}>
                    Desarrollo funcionalidades dinámicas e interactivas con
                    JavaScript moderno, aprovechando las características de ES6
                    y versiones posteriores para mejorar el rendimiento y la
                    legibilidad del código.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-filetype-sql"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>postgresql</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como especialista en bases de datos, mi enfoque se centra en
                    la excelencia técnica y la gestión eficiente de datos.
                    Dentro de mis servicios, destaco mi experiencia y
                    competencia en PostgreSQL
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-code-square"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>node.js</h2>
                  <p className={`${style.s_description} text-center`}>
                    Utilizo Node.js para el desarrollo de aplicaciones del lado
                    del servidor, permitiendo una ejecución eficiente de
                    JavaScript en ambos lados, cliente y servidor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-filetype-tsx"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>TypeScript</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como desarrollador web con experiencia especializada en
                    TypeScript, ofrezco soluciones de desarrollo robustas y
                    eficientes para aplicaciones web modernas. TypeScript
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-filetype-py"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>django</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como desarrollador web con un enfoque especializado en el
                    marco de trabajo Django, ofrezco soluciones potentes y
                    eficientes para el desarrollo de aplicaciones web. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
