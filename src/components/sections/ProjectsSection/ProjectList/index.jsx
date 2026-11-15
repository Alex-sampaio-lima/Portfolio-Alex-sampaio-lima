import style from "./style.module.scss"

export function PojectList({ index, title, paragraph, git, img, vercel, vercelIcon, githubIcon }) {
    return (
        <article className={`${style.projectCard} glass brackets`}>
            <div className={style.imageWrap}>
                <img className={style.projectImg} src={img} alt={`Prévia do projeto ${title}`} />
                <span className={style.badge}>PRJ_{String(index + 1).padStart(2, "0")}</span>
                <span className={style.openHint} aria-hidden="true">Abrir site ↗</span>
            </div>
            <div className={style.body}>
                <h3 className="title4">
                    {/* o ::after deste link cobre o card inteiro, deixando tudo clicável */}
                    <a href={vercel} className={style.cardLink} target="_blank" rel="noreferrer" aria-label={`Abrir o site do projeto ${title}`}>
                        {title}
                    </a>
                </h3>
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
