import { TechList } from "./TechList"
import style from ".././../../components/sections/TechSection/style.module.scss"
import { technologies } from "../../../data/technologies"

export function TechSection() {
    return (
        <section id="tecnoSection">
            <div className={`${style.listContainer} container listContainer padding marginContainer`}>
                <div className={style.textContainer}>
                    <h1 className="title2 titleMargin">Tecnologias</h1>
                </div>
                <ul className={style.ul}>
                    {technologies.map(item => (
                        <TechList key={item.id} name={item.name} img={item.img} />
                    ))}
                </ul>
            </div>
        </section>
    )
}