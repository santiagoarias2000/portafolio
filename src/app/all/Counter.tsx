import style from "./page.module.css";

export default function Counter() {
  return (
    <>
      <div className={`section_counter ${style.paralax_mf} ${style.bg_image_two}`}>
        <div className="overlay-mf"></div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className={`${style.counter_box} pt-4 pt-md-0`}>
                <div className={style.counter_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-check"></i>
                  </span>
                </div>
                <div className={style.counter_num}>
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="450"
                    data-purecounter-duration="1"
                    className={`${style.counter} purecounter`}
                  >
                    4
                  </p>
                  <span className={style.counter_text}>
                    Páginas Desarrolladas
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className={`${style.counter_box} pt-4 pt-md-0`}>
                <div className={style.counter_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-journal-richtext"></i>
                  </span>
                </div>
                <div className={style.counter_num}>
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="25"
                    data-purecounter-duration="1"
                    className={`${style.counter} purecounter`}
                  >
                    1.5
                  </p>
                  <span className={style.counter_text}>
                    Años de Experiencia
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className={`${style.counter_box} pt-4 pt-md-0`}>
                <div className={style.counter_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-people"></i>
                  </span>
                </div>
                <div className={style.counter_num}>
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="550"
                    data-purecounter-duration="1"
                    className={`${style.counter} purecounter`}
                  >
                    4
                  </p>
                  <span className={style.counter_text}>Años Desarrollando</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className={`${style.counter_box} pt-4 pt-md-0`}>
                <div className={style.counter_ico}>
                  <span className={style.ico_circle}>
                    <i className="bi bi-award"></i>
                  </span>
                </div>
                <div className={style.counter_num}>
                  <p
                    data-purecounter-start="0"
                    data-purecounter-end="48"
                    data-purecounter-duration="1"
                    className={`${style.counter} purecounter`}
                  >
                    14
                  </p>
                  <span className={style.counter_text}>Certificados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
