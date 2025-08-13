"use client";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DownloadButton() {
  const t = useTranslations();
  return (
    <a
      href="/assets/b5a5a047-db3a-4659-8a04-26d840d3afb1.pdf"
      download
      className="flex items-center text-sm md:text-lg md:px-3 px-2 py-2 gap-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white  rounded-lg shadow-md hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
    >
      <Download className="w-5 h-5" />
     <span className="whitespace-nowrap"> {t('download')}</span>
    </a>
  );
}