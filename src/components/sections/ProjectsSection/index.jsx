import { PojectList } from "./ProjectList"
import style from "./style.module.scss"
import { projects } from "../../../data/projects"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function ArrowIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

export function ProjectsSection() {
    return (
        <section id="projectSection" className={style.containerProjecSection}>
            <div className="container">
                <div className="sectionHead">
                    <span className="sectionTag">03 · portfólio</span>
                    <h2 className="sectionTitle">Projetos</h2>
                </div>
                <div className={style.carousel}>
                <button type="button" className={`${style.arrow} ${style.prev}`} aria-label="Projeto anterior">
                    <ArrowIcon />
                </button>
                <Swiper
                    className={style.swiper}
                    modules={[Navigation, Pagination, Keyboard]}
                    grabCursor={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{ 760: { slidesPerView: 2 } }}
                    pagination={{ clickable: true }}
                    navigation={{ prevEl: `.${style.prev}`, nextEl: `.${style.next}` }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    rewind={true}
                >
                    {projects.map((project, i) => (
                        <SwiperSlide key={project.id} className={style.slide}>
                            <PojectList
                                index={i}
                                title={project.name}
                                paragraph={project.description}
                                git={project.git}
                                img={project.img}
                                vercel={project.vercel}
                                vercelIcon={project.vercelIcon}
                                githubIcon={project.githubIcon}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button type="button" className={`${style.arrow} ${style.next}`} aria-label="Próximo projeto">
                    <ArrowIcon />
                </button>
                </div>
                <p className={style.hint}>
                    <kbd>←</kbd> <kbd>→</kbd> use as setas do teclado para navegar
                </p>
            </div>
        </section>
    )
}
