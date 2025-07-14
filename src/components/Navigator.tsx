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
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { log } from "console";

export default function Navigatorr({ isDark, toggleTheme }: { isDark?: boolean, toggleTheme?: () => void }) {
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
  const name = "Ali Gholipour";
  const letters = name.split('');
  return (
    <>
      <nav className="flex justify-between">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="font-bold flex">
            <NavigationMenuItem onClick={toggleTheme} className="cursor-pointer">
              <NavigationMenuLink>
                {isDark ? (
                  <Sun className="cursor-pointer  text-yellow-400" />
                ) : (
                  <Moon className="cursor-pointer text-gray-700" />
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#about">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#projects">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#skills">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-lg" href="#c  ontact">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className="md:hidden">
            <NavigationMenuItem>
              <NavigationMenuTrigger> <Menu className="cursor-pointer" /></NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <NavigationMenuLink href="#about">About</NavigationMenuLink>
                <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
                <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={toggleTheme}>
              <NavigationMenuLink>
                {isDark ? (
                  <Sun className="cursor-pointer  text-yellow-400" />
                ) : (
                  <Moon className="cursor-pointer text-gray-700" />
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <motion.div
          className="flex font-bold text-xl md:text-4xl md:mr-3 cursor-default select-none justify-center items-center p-2 "
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block mx-0.5"
              animate={{
                color: colors,
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                color: {
                  duration: 15,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.1,
                },
                y: {
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.15,
                },
                rotate: {
                  duration: 3,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: index * 0.15,
                },
              }}
              whileHover={{
                y: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>



      </nav>
    </>
  );
}
