import style from "./style.module.scss"

export function TechList({ name, img, index, invert }) {
    return (
        <li className={`${style.techCard} glass`}>
            <span className={style.index}>{String(index + 1).padStart(2, "0")}</span>
            <div className={style.iconWrap}>
                <img className="iconImg" src={img} alt="" style={invert ? { filter: "invert(1)" } : undefined} />
            </div>
            <h3 className={style.name}>{name}</h3>
        </li>
    )
}
