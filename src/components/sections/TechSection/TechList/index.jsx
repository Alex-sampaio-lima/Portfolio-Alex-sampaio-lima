import style from "../../../../components/sections/TechSection/TechList/style.module.scss"

export function TechList({ name, img }) {
    return (
        <>
            <li className={style.techContainer}>
                <button className="btn2" type="button">
                    <h2 className="title4">{name}</h2>
                    <img className="iconImg" src={img} alt="Icon da imagem" />
                </button>
            </li>
        </>
    )
}