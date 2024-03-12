import style from "./style.module.scss"

export function AboutMe() {
    return (
        <section id="aboutSection">
            <div className={`${style.containerText} container marginContainer`}>
                <div className={style.titleContainer}>
                    <h1 className="title2">Sobre mim</h1>
                </div>
                <div className={style.paragraphContainer}>
                    <p className="paragraph aboutMeFormatted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo cum ipsum omnis assumenda fugiat, architecto accusamus nesciunt magni perspiciatis rem veniam neque sapiente voluptatem similique blanditiis voluptatibus error a! </p>
                </div>
            </div>
        </section>
    )
}