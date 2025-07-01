import { client } from "@/sanity/client";
import { Product, ProductCategory } from "@/types/products";

const ALL_PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  name,
  slug,
  price,
  description,
  thumbnailImage,
  images,
  customizations,
  category->{
    _id,
    name,
    slug
  }
}`;

export const getAllProducts = async (): Promise<Product[]> => {
  const data = await client.fetch(ALL_PRODUCTS_QUERY);
  return data;
};



const PRODUCT_CATEGORIES_QUERY = `*[_type == "productCategory"]{
  _id,
  name,
  slug,
  products[]->{
    _id,
    name,
    slug,
    price,
    thumbnailImage
  },
  bestSellers[]->{
    _id,
    name,
    slug,
    price,
    thumbnailImage
  }
}`;

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const data = await client.fetch(PRODUCT_CATEGORIES_QUERY);
  return data;
};
