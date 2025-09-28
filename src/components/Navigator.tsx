"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Navigatorr({ isDark, toggleTheme }: { isDark?: boolean, toggleTheme?: () => void }) {
  const t = useTranslations();
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
  const pathname = usePathname();
  const name = t('name');
  const letters = name.split('');
  return (
    <>
      <nav className="w-full flex flex-row justify-between">
        <motion.div
          className="flex  font-bold text-xl md:text-4xl  cursor-default select-none  mt-2 md:mx-3"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          dir="ltr"
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
        <div className="mx-3">
          <NavigationMenu className="hidden  md:block">
            <NavigationMenuList className="font-semibold">
              <NavigationMenuItem onClick={toggleTheme} className="cursor-pointer">
                <NavigationMenuLink>
                  {isDark ? (
                    <Sun className="cursor-pointer  text-yellow-400" />
                  ) : (
                    <Moon className="cursor-pointer text-gray-700" />
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem  className="cursor-pointer">
                <NavigationMenuLink href={pathname === "/en" ? "/fa" : "/en"}>
                  {pathname === "/en" ? "فارسی" : "English"}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <div className="flex">
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-lg" href="#about">
                    {t('about')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-lg" href="#projects">
                    {t('projects')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-lg" href="#skills">
                    {t('skills')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-lg" href="#contact">
                    {t('contact')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <NavigationMenu className="md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger> <Menu className="cursor-pointer" /></NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <NavigationMenuLink href="#about">{t('about')}</NavigationMenuLink>
                <NavigationMenuLink href="#projects">{t('projects')}</NavigationMenuLink>
                <NavigationMenuLink href="#skills">{t('skills')}</NavigationMenuLink>
                <NavigationMenuLink href="#contact">{t('contact')}</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem  className="cursor-pointer">
              <NavigationMenuLink href={pathname === "/en" ? "/fa" : "/en"}>
                {pathname === "/en" ? "فارسی" : "English"}
              </NavigationMenuLink>
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
      </nav>
    </>
  );
}
