import { TechList } from "./TechList"
import style from "./style.module.scss"
import { technologies } from "../../../data/technologies"

export function TechSection() {
    return (
        <section id="tecnoSection">
            <div className="container">
                <div className="sectionHead">
                    <span className="sectionTag">02 · stack</span>
                    <h2 className="sectionTitle">Tecnologias</h2>
                </div>
                <ul className={style.ul}>
                    {technologies.map((item, i) => (
                        <TechList key={item.id} index={i} name={item.name} img={item.img} invert={item.invert} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
