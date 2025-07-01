import { client } from "@/sanity/client";
import { HomePageContent } from "@/types/home";

const QUERY = `*[_type == "homePage"][0] {
    title,
    sections[] {
      _type == "heroSection" => {
        _type,
        title,
        slides[]{
          image,
          title,
          color,
          description
        }
      }
      // You can also add cases for other section types here
    }
}`
  
export const getContent = async (): Promise<HomePageContent> => {
    const data = await client.fetch(QUERY);
    return data;
}