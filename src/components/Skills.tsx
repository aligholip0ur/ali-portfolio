import { FolderGit2, LayoutDashboard, Power, SectionIcon, Star, Zap } from "lucide-react";
import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PowerIcon } from 'lucide-react';
import SkillCard from "./SkillCard";


export default function Skills() {
    return (
        <>
            <Section className="p-6 pt-[80px] " id="skills">
            <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-400 dark:to-purple-500">
                            <Zap className=" text-gray-700 dark:text-gray-200" />  
                            Skills & Expertise
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <SkillCard CardBg="bg-amber-300" Cardtitle="React" Cardskillpercentage={90} CardIcone={ <LayoutDashboard className="inline-block text-amber-500 " /> }/>
                    <SkillCard CardBg="bg-amber-300" Cardtitle="Next Js" Cardskillpercentage={90} CardIcone={ <LayoutDashboard className="inline-block text-amber-500 " /> }/>
                    <SkillCard CardBg="bg-amber-300" Cardtitle="TypeScript" Cardskillpercentage={90} CardIcone={ <LayoutDashboard className="inline-block text-amber-500 " /> }/>
                    <SkillCard CardBg="bg-amber-300" Cardtitle="ReduxToolkit/Zustand" Cardskillpercentage={90} CardIcone={ <LayoutDashboard className="inline-block text-amber-500 " /> }/>
                    </CardContent>
                </Card>
            </Section>
        </>
    )
} 