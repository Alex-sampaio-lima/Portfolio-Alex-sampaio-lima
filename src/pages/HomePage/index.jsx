import { DefaultTemplate } from "../../components/DefaultTemplate"
import { AboutMe } from "../../components/sections/AboutMeSection"
import { BannerSection } from "../../components/sections/BannerSection"
import { ProjectsSection } from "../../components/sections/ProjectsSection"
import { TechSection } from "../../components/sections/TechSection"

export function HomePage() {

    return (
        <div className="size-p">
            <DefaultTemplate>
                <BannerSection />
                <AboutMe />
                <TechSection />
                <ProjectsSection />
            </DefaultTemplate>
        </div>
    )
}