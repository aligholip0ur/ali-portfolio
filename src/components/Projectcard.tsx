// components/ProjectCard.tsx
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <Card className="w-full h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition">
      <CardContent className="p-4 space-y-4">
        {image && (
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-500 mt-2">{description}</CardDescription>
        </div>
        {link && (
          <Button asChild className="mt-4 w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              مشاهده پروژه
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
