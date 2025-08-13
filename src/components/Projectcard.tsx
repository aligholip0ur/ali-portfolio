import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    link ? (
      <Link href={link}>
        <Card  className="flex flex-col shadow-lg h-[100%] hover:shadow-4xl hover:scale-93 transition-all duration-500 transform group-hover:-translate-y-1.5">
          {image && (
            <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
              <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-110" />
            </div>
          )}

          <CardContent className="flex flex-col flex-1  justify-between gap-4 p-4">
            <div className="flex flex-col gap-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm text-gray-500 whitespace-pre-line">
                {description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </Link>
    ) : (
      <Card  className="flex flex-col h-full shadow-lg hover:shadow-xl transition">
        {image && (
          <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}

        <CardContent className="flex flex-col flex-1 justify-between gap-4 p-4">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-500 whitespace-pre-line">
              {description}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    )
  );
};
