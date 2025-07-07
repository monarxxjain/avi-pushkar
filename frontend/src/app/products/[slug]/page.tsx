import { getAllProducts } from "@/sanity/fetchContent/Products";
import { SingleProductPage } from "@/components/products/SingleProductPage";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductDetails({params}: any) {
  const products = await getAllProducts();
  const product = products.find((p) => p.slug.current === params.slug);

  if (!product) return notFound();

  return <SingleProductPage product={product} />;
}
