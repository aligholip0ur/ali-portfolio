import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { motion } from "motion/react";
export default function Navigatorr() {
  const colors = [
    "#FF0055",
    "#FFAA00",
    "#00FFAA",
    "#0055FF",
    "#AA00FF",
    "#FF00AA",
    "#00FF00",
    "#FF6600",
    "#0066FF",
    "#CC00FF",
    "#FF0066",
    "#00FFCC",
    "#000000",
    "#ffffff",
  ];
  return (
    <>
      <nav className="flex justify-between p-2">
        <NavigationMenu>
          <NavigationMenuList className="font-bold flex  ">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#1">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#2">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#3">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#4">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <motion.div
          className="font-bold text-2xl cursor-default select-none"
          animate={{ color: colors }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Ali Gholipour
        </motion.div>
      </nav>
    </>
  );
}
