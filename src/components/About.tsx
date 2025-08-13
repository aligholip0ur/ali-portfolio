import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Briefcase, ExternalLink } from "lucide-react";
import Section from "./Section";
import DownloadButton from "./DownLoadBottom";
import { useTranslations } from "next-intl";
const About: React.FC = () => {
  const t = useTranslations();
  return (
    <>
      <Section id="about" className="flex  p-6 pt-[30px] md:pt-[80px] justify-center items-center  ">
        <div className="md:flex md:flex-col md:gap-3 lg:gap-8">
          <Card className="mt-15 md:mt-10 !gap-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-between  text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                <div className="flex gap-2 md:text-2xl">
                  <Code className="mt-1 dark:text-gray-200 text-gray-700" />
                  <span className="whitespace-nowrap">{t('aboutme')}</span>
                </div>
                <div>
                  <DownloadButton></DownloadButton>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed  text-gray-700 dark:text-gray-300 ">
                {t('abouttext')}
                <br />
                {t('abouttext2')}
              </p>
            </CardContent>
          </Card>
          <Card className="hidden  md:block">
            <CardHeader className="">
              <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                <Briefcase className=" text-gray-700 dark:text-gray-200" />
                {t('workexperience')}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid  md:grid-cols-2 gap-5">
              {/* Experience 1 */}
              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className=" text-gray-700 dark:text-gray-200" />
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">{t('worktitle1')}</h4>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400 my-2">{t('workyear1')}</CardDescription>
                <p className="text-base text-gray-700 dark:text-gray-300 my-3">
                  {t('workdecriotion1')}
                  <br />
                  {t('toolsused')}{"   "}
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">JavaScript</span>,{" "}
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Asp.net MVC</span>,
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Bootstrap</span>
                </p>
                <a
                  href="https://drive.google.com/file/d/1YAlTgU3pj2pNdu46RMGVRHhWKYLaCRBr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('viewsprocect')}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className=" text-gray-700 dark:text-gray-200" />
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                    {t('worktiltle2')}
                  </h4>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400 my-2">
                  {t('workyear2')}
                </CardDescription>
                <p className="text-base text-gray-700 dark:text-gray-300 my-3">
                  {t('toolsused')}{"   "}

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
                  {t('viewsprocect')}
                </a>
              </div>

            </CardContent>
          </Card>
        </div>

      </Section>
      <Section className="flex md:hidden md:h-screen pt-[90px] p-6 justify-center items-center " >
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
              <Code className="w-6 h-6 dark:text-gray-200 text-gray-700" />
              {t('workexperience')}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid  md:grid-cols-2 gap-5">
            {/* Experience 1 */}
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-2">
                <Briefcase className=" text-gray-700 dark:text-gray-200" />
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                  {t('worktitle1')}
                </h4>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                {t('workyear1')}
              </CardDescription>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
                {t('workdecriotion1')}
                <br></br>
                {t('toolsused')}
                <br></br>
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Javascript</span>,{" "}
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">Asp.net MVC</span>,
                <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 hover:scale-105">BootStrap</span>
              </p>
              <a
                href="https://drive.google.com/file/d/1YAlTgU3pj2pNdu46RMGVRHhWKYLaCRBr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {t('viewsprocect')}
              </a>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col  gap-2 mt-3">
              <div className="flex items-center gap-2">
                <Briefcase className=" text-gray-700 dark:text-gray-200" />
                <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                  {t('worktiltle2')}
                </h4>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                {t('workyear2')}
              </CardDescription>
             
              <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
              {t('toolsused')}
              <br/>
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
                {t('viewsprocect')}
              </a>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
};

export default About;