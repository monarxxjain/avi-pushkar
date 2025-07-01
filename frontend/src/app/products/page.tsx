"use client"
import { BreadCrumb } from "@/components/products/BreadCrumb";
import { ProductCard } from "@/components/products/ProductCard";
import { Sidebar } from "@/components/products/Sidebar";
import { getAllProducts, getProductCategories } from "@/sanity/fetchContent/Products";
import { CartItem } from "@/types/cart";
import { Product, ProductCategory } from "@/types/products";
import { getCart } from "@/utils/cart";
import { useEffect, useState } from "react";

export default function Products() {

  const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // Fetching product categories 
        getProductCategories().then((data) => { 
            setProductCategories(data);
        }).catch((error) => {
            console.error("Failed to fetch product categories:", error);
        });

        // Fetching all products
        getAllProducts().then((data) => {
            setProducts(data);
            setDisplayProducts(data);
        }).catch((error) => {
            console.error("Failed to fetch products:", error);
        });

        const cart = getCart();
        setCartItems(cart);
    }, [])

    useEffect(()=>{
        // Filter products based on selected category
        if (selectedCategory) {
            const filteredProducts = products.filter(product => product.category._id === selectedCategory._id);
            setDisplayProducts(filteredProducts);
        } else {
            setDisplayProducts(products);
        }
    },[selectedCategory])

    return (
      <section className="relative w-full pt-[8vh]">
        {/* Fixed Sidebar */}
        <Sidebar productCategories={productCategories} setSelectedCategory={setSelectedCategory} />
  
        {/* Main Content Area */}
        <div className="ml-[20%] px-12 h-[92vh] overflow-y-scroll ">
          <BreadCrumb selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 gap-y-12">
          {displayProducts.map((product) => {
            const matchedCartItem = cartItems.find(
              (item) => item.product._id === product._id
            );
            const quantity = matchedCartItem?.quantity || 0;

            return <ProductCard key={product._id} product={product} quantity={quantity} />;
          })}
          </div>
        </div>
      </section>
    );
  }
  