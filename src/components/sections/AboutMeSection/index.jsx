import style from "./style.module.scss"

const stats = [
    { value: "40+", label: "projetos entregues" },
    { value: "Full", label: "stack: back + front" },
    { value: "∞", label: "curiosidade" },
]

export function AboutMe() {
    return (
        <section id="aboutSection">
            <div className="container">
                <div className="sectionHead">
                    <span className="sectionTag">01 · perfil</span>
                    <h2 className="sectionTitle">Sobre mim</h2>
                </div>
                <div className={style.grid}>
                    <div className={`${style.card} glass brackets`}>
                        <div className={style.cardBar} aria-hidden="true">
                            <span /><span /><span />
                            <p>about_me.txt</p>
                        </div>
                        <p className={`paragraph ${style.text}`}>
                            Um desenvolvedor Full Stack e também um apreciador de games, sou uma pessoa curiosa desde criança, que sempre tenta entender como as coisas funcionam e o seu porquê. Comecei estudar programação pois via muitas pessoas falando sobre essa profissão e também pois sempre quis entender esse mundo que nos filmes e mídia aparentava ser um “bicho de sete cabeças” e algo que só pessoas muito inteligentes conseguiriam realizar. Ao ter o primeiro contato percebi que era complicado mas não impossível, comecei com cursos básicos até um mais avançado e hoje em dia já realizei mais de 40 projetos entre back e front end.
                        </p>
                    </div>
                    <ul className={style.stats}>
                        {stats.map(stat => (
                            <li key={stat.label} className={`${style.stat} glass`}>
                                <strong className="gradientText">{stat.value}</strong>
                                <span>{stat.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
