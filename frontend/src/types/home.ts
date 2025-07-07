  export type SanityImage = {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  
  export type HeroSlide = {
    title: string;
    description: string;
    color: string;
    image: SanityImage;
  };
  
  export type HeroSectionType = {
    _type: "heroSection";
    title: string;
    slides: HeroSlide[];
  };
  
  export type HomePageContent = {
    title: string;
    sections: HeroSectionType[] | any[]; // Replace `any` with union of future section types
  };
  