import style from "../ProjectList/style.module.scss"
import gitIcon from "../../../../assets/git-icon.png"

export function PojectList({ title, paragraph, git, img, vercel, vercelIcon, githubIcon }) {
    return (
        <>
            <li className={`${style.projectCard}`}>
                <div className={`${style.containerProjectImg}`}>
                    <img className={`${style.projectImg}`} src={img} alt="Imagem do Projeto" />
                </div>
                <div className={style.imageContainer}>
                    <p className="title4">{title}</p>
                </div>
                <h2 className="paragraph">{paragraph}</h2>
                <div className={`${style.containerProjectLink}`}>
                    <a href={vercel} className="text1 cyan" target="_blank">
                        <img className={`${style.iconProjectImg} inverter-color`} src={vercelIcon} alt="Icon do Vercel" />
                    </a>
                    <a href={git} className="text1 cyan" target="_blank">
                        {/* <img src={gitIcon} alt="Logo do github" /> */}
                        <img className="inverter-color" src={githubIcon} alt="Icon do Github" />
                    </a>
                </div>
            </li >
        </>
    )
}