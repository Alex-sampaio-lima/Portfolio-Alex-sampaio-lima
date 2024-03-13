import style from "./style.module.scss"

export function AboutMe() {
    return (
        <section id="aboutSection">
            <div className={`${style.containerText} container marginContainer`}>
                <div className={style.titleContainer}>
                    <h1 className="title2">Sobre mim</h1>
                </div>
                <div className={style.paragraphContainer}>
                    <p className="paragraph aboutMeFormatted littleText">
                        Um desenvolvedor Full Stack e também um apreciador de games, sou uma pessoa curiosa desde criança, que sempre tenta entender como as coisas funcionam e o seu porquê. Comecei estudar programação pois via muitas pessoas falando sobre essa profissão e também pois sempre quis entender esse mundo que nos filmes e mídia aparentava ser um “bicho de sete cabeças” e algo que só pessoas muito inteligentes conseguiriam realizar. Ao ter o primeiro contato percebi que era complicado mas não impossível, comecei com cursos básicos até um mais avançado e hoje em dia já realizei mais de 40 projetos entre back e fron end. </p>
                </div>
            </div>
        </section>
    )
}