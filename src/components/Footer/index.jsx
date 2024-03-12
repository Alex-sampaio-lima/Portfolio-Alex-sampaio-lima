import { user } from "../../data/user"
import logoWhatsapp from "../../assets/whatsapp-icon.svg"
import logoLinkedin from "../../assets/linkedin-icon.svg"
import logoGithub from "../../assets/github-icon-1.png"
import style from "../Footer/style.module.scss"

export function Footer() {
    return (
        <footer >
            <div className={`${style.contactContainer} container marginContainer line`}>
                <div className={style.contactList}>
                    <h1 className="title2 titleMargin">Contato</h1>
                    <a href="https://wa.me/5511940264105" target="_blank">
                        <img className={style.imgContact} src={logoWhatsapp} alt="logo do WhastApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexsander-sampaio-lima-b43219241/" target="_blank">
                        <img className={style.imgContact} src={logoLinkedin} alt="logo do Linkedin" />
                    </a>
                    <a href="https://github.com/Alex-sampaio-lima" target="_blank">
                        <img className={style.imgContact} src={logoGithub} alt="logo do GitHub" />
                    </a>
                </div>
                <div>
                    <p className="paragraph">Todos os direitos reservados - @{user}</p>
                </div>
            </div>
        </footer >
    )
}
