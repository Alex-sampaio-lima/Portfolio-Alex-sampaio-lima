import { user } from "../../data/user"
import logoWhatsapp from "../../assets/whatsapp-icon.svg"
import logoLinkedin from "../../assets/linkedin-icon.svg"
import logoGithub from "../../assets/github-icon-1.png"
import style from "./style.module.scss"

const contacts = [
    { label: "WhatsApp", href: "https://wa.me/5511940264105", icon: logoWhatsapp },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alexsander-sampaio-lima-b43219241/", icon: logoLinkedin },
    { label: "GitHub", href: "https://github.com/Alex-sampaio-lima", icon: logoGithub },
]

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={`${style.contactContainer} container`}>
                <div className={style.cta}>
                    <span className="sectionTag">04 · contato</span>
                    <h2 className={style.ctaTitle}>
                        Vamos construir <span className="gradientText">o futuro</span> juntos?
                    </h2>
                </div>
                <ul className={style.contactList}>
                    {contacts.map(contact => (
                        <li key={contact.label}>
                            <a className={style.contactLink} href={contact.href} target="_blank" rel="noreferrer" aria-label={contact.label}>
                                <img className={style.imgContact} src={contact.icon} alt="" />
                                <span>{contact.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${style.bottom} container`}>
                <p>© {new Date().getFullYear()} {user} — Todos os direitos reservados</p>
                <p className={style.signature}>built with React + Vite</p>
            </div>
        </footer>
    )
}
