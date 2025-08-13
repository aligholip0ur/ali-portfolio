import {  Zap,Palette,AppWindow   } from "lucide-react";
import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import SkillCard from "./SkillCard";
import { Code2 } from "lucide-react";
import { ServerCog } from "lucide-react";
import { useTranslations } from "next-intl";
export default function Skills() {
    const t = useTranslations()
    return (
        <>
            <Section className="p-6 md:pt-[140px] pt-[85px] " id="skills">
                <Card className="!gap-2 md:!gap-6">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                            <Zap className=" text-gray-700 dark:text-gray-200" />
                            {t('skills')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <SkillCard
                            CardBg="bg-[#E3F2FD]"
                            Cardtitle={t('frontend')}
                            Carddecription="React, Next.js, TypeScript, Redux Toolkit, Zustand, Tailwind/BootStrap CSS, StoryBook"
                            Cardskillpercentage={90}
                            CardIcone={<Code2 className="inline-block text-[#1976D2]" />}
                        />

                        <SkillCard
                            CardBg="bg-[#E8F5E9]"
                            Cardtitle={t('backend')}
                            Carddecription="ASP.NET MVC (C#), PHP, MySQL, SQL Server, Supabase"
                            Cardskillpercentage={40}
                            CardIcone={<ServerCog className="inline-block text-[#2E7D32]" />}
                        />

                        <SkillCard
                            CardBg="bg-[#EDE7F6]"
                            Cardtitle={t('uiux')}
                            Carddecription="Figma – Wireframing, Prototyping, UI Kits"
                            Cardskillpercentage={50}
                            CardIcone={<Palette className="inline-block text-[#512DA8]" />}
                        />

                        <SkillCard
                            CardBg="bg-[#FFF3E0]"
                            Cardtitle={t('windowspp')}
                            Carddecription="C#, Windows Forms, Basic C++"
                            Cardskillpercentage={70}
                            CardIcone={<AppWindow className="inline-block text-[#EF6C00]" />}
                        />

                    </CardContent>
                </Card>
            </Section>
        </>
    )
} 