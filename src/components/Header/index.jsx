import style from "./style.module.scss"
import myLogo from "../../assets/myLogo.png"

const links = [
    { label: "Sobre", href: "#aboutSection" },
    { label: "Stack", href: "#tecnoSection" },
    { label: "Projetos", href: "#projectSection" },
]

export function Header() {
    return (
        <header className={style.header}>
            <div className={`${style.headerContainer} container`}>
                <a href="#top" className={style.brand}>
                    <img className={style.imgMyLogo} src={myLogo} alt="Logo de Alexsander Sampaio" />
                    <span className={style.brandText}>ALEX<span>.dev</span></span>
                </a>
                <nav className={style.nav}>
                    {links.map((link, i) => (
                        <a key={link.href} className={style.navLink} href={link.href}>
                            <span className={style.navIndex}>0{i + 1}.</span>
                            {link.label}
                        </a>
                    ))}
                    <a className={style.navCta} href="https://wa.me/5511940264105" target="_blank" rel="noreferrer">
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    )
}
