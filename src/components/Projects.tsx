import { ExternalLink, FolderGit2} from "lucide-react";
import Carousel from "./Carousel"
import { ProjectCard } from "./Projectcard";
import Section from "./Section"
import { Card, CardContent ,CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations();
    const projects = t.raw("projectData");
        
    const slides = projects.map((project:any, index:number) => (
        <div key={index} className="p-2 h-full">
            <ProjectCard {...project} />
        </div>
    ));
    return (
        <>
            <Section id="projects" className="p-6 md:pt-[100px] pt-[110px]" >
                <Card className="!gap-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                            <FolderGit2 className=" text-gray-700 dark:text-gray-200" /> {t('projects')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <Carousel
                                slides={slides}
                                spacing={20}
                                autoplay={true}
                                interval={3000}
                                showArrows={false}
                                showDots={false}
                                className=""
                            />
                            <a
                                href="https://github.com/aligholip0ur"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex hover:scale-95 duration-500 items-center justify-center text-center gap-1 text-blue-600 dark:text-blue-400 hover:underline  text-md"
                            >
                                <ExternalLink className="text-md" />
                                {t('viewmoreprojects')}
                            </a>
                        </div>

                    </CardContent>
                </Card>
            </Section>
        </>
    )
}