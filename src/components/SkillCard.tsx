import { ExternalLink, } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

type SkillsProps = {
    Cardtitle?: string;
    CardIcone?: React.ReactNode;
    CardBg?: string;
    Cardskillpercentage?: number;
    Carddecription?: string;
};

export default function SkillCard(myprops: SkillsProps) {
    const wordsArray = myprops.Carddecription
        ? myprops.Carddecription.split(",")
        : [];
const t = useTranslations();
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm md:text-lg font-semibold flex gap-1">
                    <div
                        className={`flex justify-center items-center md:p-4 p-1 mr-2 rounded-full ${myprops.CardBg}`}
                    >
                        {myprops.CardIcone}
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <strong className="text-sm md:text-lg">
                            {myprops.Cardtitle}
                        </strong>
                        <CardDescription  className="flex flex-col">
                            <span className="text-xs md:text-sm hidden md:block">
                                {myprops.Carddecription}
                            </span>
                            <span className="text-xs md:text-sm ">
                                {myprops.Cardskillpercentage?.toString()} %
                            </span>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="flex gap-1 md:hidden cursor-pointer">
                                        <ExternalLink size={16} color="#1447e6" />
                                        <span className="text-sm md:text-base text-blue-700">
                                            {t('details')}
                                        </span>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>Skills breakdown</DialogTitle>
                                        <DialogDescription>
                                            List of sub-skills:
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {wordsArray.map((word, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="secondary"
                                                className="text-xs px-2 py-1"
                                            >
                                                {word}
                                            </Badge>
                                        ))}
                                    </div>

                                    <DialogFooter className="sm:justify-start">
                                        <DialogClose asChild>
                                            <Button
                                                type="button"
                                                variant="secondary"
                                            >
                                                Close
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardDescription>
                    </div>
                </CardTitle>

                <CardContent className="mt-2 p-0">
                    <div className="flex">
                        <Progress
                            progressbg={myprops.CardBg}
                            value={
                                myprops.Cardskillpercentage
                                    ? myprops.Cardskillpercentage
                                    : 70
                            }
                            className={`w-full h-2 rounded-full`}
                            
                        />
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    );
}
