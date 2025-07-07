import { getAllProducts } from "@/sanity/fetchContent/Products";
import { SingleProductPage } from "@/components/products/SingleProductPage";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetails({ params }: Props) {
  const products = await getAllProducts();
  const product = products.find(p => p.slug.current === params.slug);

  if (!product) return <div>Product not found</div>;

  return <SingleProductPage product={product} />;
}
