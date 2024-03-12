import { PojectList } from "./ProjectList";
import style from "../ProjectsSection/style.module.scss";
import { projects } from "../../../data/projects";
import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectFade } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade"
register();
export function ProjectsSection() {
    return (
        <section id="projectSection">
            <div className={`${style.containerProjectCards} container marginContainer`}>
                <h1 className="title2 titleMargin">Projetos</h1>
                <Swiper
                    grabCursor={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    <div className={`${style.containerCards}`}>
                        {projects.map(project => (
                            <SwiperSlide key={project.id} style={{ display: 'flex' }} className={`${style.containerSwiperSlide}`}>
                                <PojectList title={project.name} paragraph={project.description} git={project.git} img={project.img} vercel={project.vercel} vercelIcon={project.vercelIcon} githubIcon={project.githubIcon} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section >

    )
}