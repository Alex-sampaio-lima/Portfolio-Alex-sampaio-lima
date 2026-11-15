import style from "./style.module.scss"

export function PojectList({ index, title, paragraph, git, img, vercel, vercelIcon, githubIcon }) {
    return (
        <article className={`${style.projectCard} glass brackets`}>
            <div className={style.imageWrap}>
                <img className={style.projectImg} src={img} alt={`Prévia do projeto ${title}`} />
                <span className={style.badge}>PRJ_{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className={style.body}>
                <h3 className="title4">{title}</h3>
                <p className={`paragraph ${style.description}`}>{paragraph}</p>
                <div className={style.links}>
                    <a href={vercel} className={style.link} target="_blank" rel="noreferrer">
                        <img className={`${style.vercelIcon} inverter-color`} src={vercelIcon} alt="" />
                        Deploy
                    </a>
                    <a href={git} className={style.link} target="_blank" rel="noreferrer">
                        <img className={`${style.githubIcon} inverter-color`} src={githubIcon} alt="" />
                        Código
                    </a>
                </div>
            </div>
        </article>
    )
}
