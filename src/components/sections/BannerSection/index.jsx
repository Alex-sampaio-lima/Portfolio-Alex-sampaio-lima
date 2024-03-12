import bannerImage from "../../../assets/banner-img.png"
import style from "../../sections/BannerSection/style.module.scss"
import { username } from "../../../data/user"
import MyPhoto from "../../../assets/MyPhoto.webp"

export function BannerSection() {

    return (
        <section>
            <div className={`${style.containerBanner} container marginContainer`}>
                <div className={style.containerText}>
                    <h3 className="title3"></h3>
                    <h1 className="title5">Alexsander Sampaio</h1>
                    <span className="paragraph">Desenvolvedor Full Stack</span>
                    <button className="btn" type="button">Saiba mais</button>
                </div>
                <div className={style.containerImage}>
                    <img className={style.imgBanner} src={MyPhoto} alt="Imagem do Banner" />
                </div>
            </div>
        </section>
    )
}