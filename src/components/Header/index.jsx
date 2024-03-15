import style from "./style.module.scss"
import myLogo from "../../assets/myLogo.png"

export function Header() {
    return (
        <header>
            <div className={`${style.headerContainer} container`} >
                <img className={style.imgMyLogo} src={myLogo} alt="Imagem da minha logo" />
                <div className={style.titleContainer}>
                    <a className="title1 border" href="#aboutSection">Sobre</a>
                    <a className="title1 border" href="#tecnoSection">Stack</a>
                    <a className="title1 border" href="#projectSection">Projetos</a>
                    <a className="title1 border" href="https://wa.me/5511940264105" target="_blank">Contato</a>
                </div>
            </div>
        </header >
    )
}