import style from "./page.module.css";

export default function Services() {
  return (
    <>
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={`${style.title_box} text-center`}>
                <h3 className={style.title_a}>Servicios</h3>
                <p className={style.subtitle_a}>
                  Como ingeniero de sistemas altamente calificado, ofrezco
                  servicios especializados para optimizar y potenciar la
                  eficiencia de tus sistemas informáticos. Mi enfoque se centra
                  en proporcionar soluciones tecnológicas innovadoras y
                  personalizadas que impulsarán el rendimiento de tu empresa.
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
                    <i className="bi bi-browser-edge"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>Web Design frontend</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como diseñador frontend, mi objetivo es transformar ideas en
                    experiencias visuales cautivadoras y funcionales en la web.
                    Ofrezco servicios especializados para potenciar la presencia
                    en línea de tu negocio, destacando la estética y la
                    usabilidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-code-slash"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>Web Development Backend</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como desarrollador backend especializado, ofrezco servicios
                    que potenciarán la robustez y funcionalidad de tu aplicación
                    o sitio web. Mi enfoque se centra en la implementación de la
                    lógica empresarial, la gestión de datos y la seguridad.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-database-check"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>Data bases</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como profesional especializado en bases de datos, ofrezco
                    servicios integrales para optimizar la gestión y el
                    aprovechamiento de la información crítica de tu negocio. Mi
                    enfoque se centra en el diseño eficiente, la implementación
                    robusta y el mantenimiento continuo de bases de datos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.service_box}>
                <div className={style.service_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-cloud-arrow-up"></i>
                  </span>
                </div>
                <div className={style.service_content}>
                  <h2 className={style.s_title}>Servicios en la nube</h2>
                  <p className={`${style.s_description} text-center`}>
                    Como especialista en servicios en la nube, ofrezco
                    soluciones innovadoras para optimizar la infraestructura
                    tecnológica de tu empresa, permitiéndote aprovechar al
                    máximo los beneficios de la nube.
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
