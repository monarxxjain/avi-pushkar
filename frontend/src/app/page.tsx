"use client";
import { HeroSection } from "@/components/home/HeroSection";
import { getContent } from "@/sanity/fetchContent/Home";
import { useEffect, useState } from "react";
import { BestSellerType, HeroSectionType, HomePageContent } from "@/types/home";
import { BestSellers } from "@/components/home/BestSellers";

export default function Home() {
  const [heroSection, setHeroSection] = useState<HeroSectionType | null>(null);
  const [bestSellers, setBestSellers] = useState<BestSellerType | []>([]);

  useEffect(() => {
    getContent()
      .then((data : HomePageContent ) => {
        console.log(data);

        const hero = data?.sections.find(
          (section: any): section is HeroSectionType =>
            section._type === "heroSection"
        );
        setHeroSection(hero || null);

        const best = data?.sections.find(
          (section: any): section is BestSellerType =>
            section._type === "bestSellers"
        );
        setBestSellers(best || []);
      })
      .catch((error) => {
        console.error("Failed to fetch home page content:", error);
      });
  }, []);


  return (
    <>
      <HeroSection content={heroSection} />
      {/* <BestSellers content={bestSellers} /> */}
    </>
  );
}
