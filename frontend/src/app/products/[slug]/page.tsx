import { getAllProducts } from "@/sanity/fetchContent/Products";
import { SingleProductPage } from "@/components/products/SingleProductPage";

export default async function ProductDetails({ params }: { params: { slug: string } }) {
  const products = await getAllProducts();
  const product = products.find(p => p.slug.current === params.slug);

  if (!product) return <div>Product not found</div>;

  return <SingleProductPage product={product} />;
}
