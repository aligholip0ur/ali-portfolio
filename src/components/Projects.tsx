"use client";
import { ExternalLink, FolderGit2, FolderKanban } from "lucide-react";
import Carousel from "./Carousel"
import { ProjectCard } from "./Projectcard";
import Section from "./Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";
const projectData = [
    {
        title: "TodoList",
        description: "A TodoList Which Created With React and Tailwind css",
        image: "/pics/Screenshot 2025-07-14 151715.png",
        link: "https://advanced-to-do-list-react-mu.vercel.app/",
    },
    {
        title: "MusicPlayer",
        description: "A MusicPlayer which Made with JS & Html&Css",
        image: "/pics/Screenshot 2025-07-14 152438.png",
        link: "https://music-player-zeta-two.vercel.app/",
    },
    {
        title: "AdminPanel&UserManagement",
        description: `An AdminPanel Which Created With Next Js & Supabase DataBase\nEmail: ali1383gho@gmail.com,\nPass: 123456`,
        image: "/pics/Screenshot 2025-07-14 153733.png",
        link: "https://user-management-dashboard-lilac.vercel.app/",
    },
    {
        title: " SignIn&LocationSaverApiWith React",
        description: `A SignIn App with Map & Location Saver`,
        image: "/pics/Screenshot 2025-07-14 162301.png",
        link: "https://sign-in-location-saver-achare-api.vercel.app/",
    },
    {
        title: "WishList React & KanBanChart",
        description: `A WisList Which U can Drag&Drop According Ur depends`,
        image: "/pics/Screenshot 2025-07-15 140707.png",
        link: "https://wish-lisitwith-kanban-chart.vercel.app/",
    },
    {
        title: "Weather App with weather Api",
        description: `A Weather App which U can Write The Name of Country/City & Get the Weather Info`,
        image: "/pics/Screenshot 2025-07-14 162811.png",
        link: "https://weather-app-api-phi.vercel.app/",
    },
    {
        title: "Todo List with Zustand",
        description: `A Todo List which has many options & developes with Zustand`,
        image: "/pics/Screenshot 2025-08-11 181624.png",
        link: "https://todo-list-with-zustand-mu.vercel.app/",
    },
  
];


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