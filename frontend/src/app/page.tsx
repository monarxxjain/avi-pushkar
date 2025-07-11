"use client";
import { HeroSection } from "@/components/home/HeroSection";
import { getContent } from "@/sanity/fetchContent/Home";
import { useEffect, useState } from "react";
import { HeroSectionType, HomePageContent } from "@/types/home";

export default function Home() {
  const [heroSection, setHeroSection] = useState<HeroSectionType | null>(null);

  useEffect(() => {
    getContent()
      .then((data : HomePageContent ) => {
        console.log(data);

        const hero = data?.sections.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (section: any): section is HeroSectionType =>
            section._type === "heroSection"
        );
        setHeroSection(hero || null);

      })
      .catch((error) => {
        console.error("Failed to fetch home page content:", error);
      });
  }, []);


  return (
    <>
      <HeroSection content={heroSection} />
    </>
  );
}
