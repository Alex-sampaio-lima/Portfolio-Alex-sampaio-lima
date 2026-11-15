import { PojectList } from "./ProjectList"
import style from "./style.module.scss"
import { projects } from "../../../data/projects"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function ProjectsSection() {
    return (
        <section id="projectSection" className={style.containerProjecSection}>
            <div className="container">
                <div className="sectionHead">
                    <span className="sectionTag">03 · portfólio</span>
                    <h2 className="sectionTitle">Projetos</h2>
                </div>
                <Swiper
                    className={style.swiper}
                    modules={[Navigation, Pagination]}
                    grabCursor={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{ 760: { slidesPerView: 2 } }}
                    pagination={{ clickable: true }}
                    navigation
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
            </div>
        </section>
    )
}
