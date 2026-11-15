import style from "./style.module.scss"
import MyPhoto from "../../../assets/MyPhoto.jpeg"

export function BannerSection() {
    return (
        <section id="top" className={style.containerBannerSection}>
            <div className={`${style.containerBanner} container`}>
                <div className={style.containerText}>
                    <p className={style.hello}>&gt; hello_world, eu sou</p>
                    <h1 className={style.name}>
                        Alexsander <span className="gradientText">Sampaio</span>
                    </h1>
                    <p className={style.role}>
                        Desenvolvedor <strong>Full Stack</strong>
                        <span className={style.cursor} aria-hidden="true" />
                    </p>
                    <div className={style.actions}>
                        <a className="btn" href="#projectSection">Ver projetos</a>
                        <a className="btn ghost" href="https://wa.me/5511940264105" target="_blank" rel="noreferrer">
                            Fale comigo
                        </a>
                    </div>
                </div>
                <div className={style.containerImage}>
                    <div className={style.orbit} aria-hidden="true">
                        <span />
                    </div>
                    <div className={style.ring}>
                        <img className={style.imgBanner} src={MyPhoto} alt="Foto de Alexsander Sampaio" />
                    </div>
                    <span className={`${style.chip} ${style.chipTop}`}>&lt;React /&gt;</span>
                    <span className={`${style.chip} ${style.chipBottom}`}>node.js</span>
                </div>
            </div>
        </section>
    )
}
