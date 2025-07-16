import { LayoutDashboard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

type SkillsProps = {
    Cardtitle?: string,
    CardIcone?:React.ReactNode,
    CardBg?:string,
    Cardskillpercentage?:number,
}

export default function SkillCard(myprops:SkillsProps) {
    return (
        <>
            <Card>
                <CardHeader>
                     <CardTitle className="text-lg font-semibold flex ">
                        <div className={`flex justify-center items-center p-4 mr-2 rounded-full ${myprops.CardBg}  `}>
                        {myprops.CardIcone}
                        </div>
                        <div className="flex flex-col justify-center items-start">
                       <strong className="text-lg"> {myprops.Cardtitle} </strong>
                        <CardDescription>
                            <span className="text-md ">{myprops.Cardskillpercentage?.toString()}    %</span>
                        </CardDescription>
                        
                        </div>
                    </CardTitle>
                    <CardContent className="mt-2 p-0">
                  <div className="flex">
                    <Progress progressbg={myprops.CardBg} value={myprops.Cardskillpercentage? myprops.Cardskillpercentage : 70} className={`w-full h-2   rounded-full `} />
                    </div>  
                    </CardContent>
                </CardHeader>

            </Card>
        </>
    )
}