"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, ExternalLink } from "lucide-react";
import Section from "./Section";
import DownloadButton from "./DownLoadBottom";
const About: React.FC = () => {
  return (
    <>
      <Section id="about" className="flex  md:h-screen p-6 justify-center items-center ">
        <div className="md:flex md:flex-col md:gap-3 lg:gap-8">
          <Card className="mt-15 md:mt-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-between  text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                <div className="flex gap-2 md:text-2xl">
                  <Code className="mt-1 dark:text-gray-200 text-gray-700" />
                  <span>About Me!</span>
                </div>
                <div>
                  <DownloadButton></DownloadButton>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed  text-gray-700 dark:text-gray-300 ">
                Front-End developer with 3 years successful track record in designing and developing attractive and
                user-friendly interfaces. Skilled in creating responsive websites that offer an exceptional user
                experience. Ability to collaborate effectively with multidisciplinary teams and attention to detail to
                achieve project goals. Looking for new opportunities to improve skills and provide innovative
                solutions in the field of information technology.
                Currently continuing the learning process and working on various projects with {" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span> and {" "}
                create engaging, optimized, and user-friendly experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="hidden  md:block">
            <CardHeader className="">
              <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                <Briefcase className=" text-gray-700 dark:text-gray-200" />
                Work Experiences
              </CardTitle>
            </CardHeader>
            <CardContent className="grid  md:grid-cols-2 gap-5">
              {/* Experience 1 */}
              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className=" text-gray-700 dark:text-gray-200" />
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                    Junior   Front-End Developer at AtiNegar
                  </h4>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400 my-2">
                  2024-2025
                </CardDescription>
                <p className="text-base text-gray-700 dark:text-gray-300 my-3">
                  In this Project of Factopry we worked on an AdminPanel
                  <br></br>
                  Tools Used:{"   "}
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">JavaScript</span>,{" "}
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Asp.net MVC</span>,
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Bootstrap</span>
                </p>
                <a
                  href="https://github.com/sample/techtrend-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className=" text-gray-700 dark:text-gray-200" />
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                    Front-End Developer at AvihangCo
                  </h4>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400 my-2">
                  2025-2026
                </CardDescription>
                <p className="text-base text-gray-700 dark:text-gray-300 my-3">
                  Tools Used:{"   "}

                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">React</span>,{" "}
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Redux Toolkit</span>,
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Tailwind Css</span>
                </p>
                <a
                  href="https://github.com/sample/techtrend-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>

            </CardContent>
          </Card>
        </div>

      </Section>
      <Section className="p-6 md:hidden" >
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
              <Code className="w-6 h-6 dark:text-gray-200 text-gray-700" />
              Work Experiences
            </CardTitle>
          </CardHeader>
          <CardContent className="grid  md:grid-cols-2 gap-2">
            {/* Experience 1 */}
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className=" text-gray-700 dark:text-gray-200" />
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                  Front-End Developer at AtiNegar
                </h4>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                2024-2025
              </CardDescription>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Javascript</span>,{" "}
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Asp.net MVC</span>,
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">BootStrap</span>
              </p>
              <a
                href="https://github.com/sample/techtrend-project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            </div>

            {/* Experience 2 */}
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                  Junior Front-End Developer at AvihangCo
                </h4>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                2025-2026              </CardDescription>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">React</span>,{" "}
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">TailWind Css</span>,
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Redux ToolKit</span>
              </p>
              <a
                href="https://github.com/sample/webwave-project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap.LINEBREAK 1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
};

export default About;