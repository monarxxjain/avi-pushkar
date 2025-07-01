import { urlFor } from "@/sanity/image";
import { Product } from "@/types/products";
import { addToCart, updateCartQuantity } from "@/utils/cart";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    product: Product;
    quantity?: number; 
}

export const ProductCard = ({ product, quantity=0 }: Props) => {
  const [count, setCount] = useState<number>(quantity);

  const handleDecrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setCount(isNaN(value) || value < 0 ? 0 : value);
  };

  useEffect(()=>{
    updateCartQuantity(product._id, count);
  },[count])

  return (
    <div className="cursor-pointer transition-shadow duration-300">
      {product.thumbnailImage && (
        <Image
          src={urlFor(product.thumbnailImage).url()}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-auto"
        />
      )}

      <div className="p-5">
        <h2 className="font-light text-lg">{product.name}</h2>

        <div className="flex justify-between items-center mt-1 py-2">
          <div className="text-gray-800">₹ {product.price} <span className="text-xs text-gray-500">( per Item )</span> </div>

          {count>0 && <div className="flex items-center gap-2 border border-gray-300 rounded px-2 ">
            <button
              onClick={handleDecrement}
              className="text-xl px-1 hover:text-yellow-600"
            >
              −
            </button>
            <input
              type="number"
              min={0}
              className="w-10 text-center text-base bg-transparent outline-none"
              value={count}
              onChange={handleInputChange}
            />
            <button
              onClick={handleIncrement}
              className="text-xl px-1 hover:text-yellow-600"
            >
              +
            </button>
          </div>}
        </div>

        {count>0 ? 
          <button className="text-lg my-4 cursor-pointer py-2 w-full text-center border border-yellow-60 bg-yellow-600 text-white active:scale-95 transition-all">
            Added to Cart
          </button>
          : 
          <button onClick={()=>{addToCart(product, count); handleIncrement();}} className="text-lg my-4 mt-5 cursor-pointer py-2 w-full text-center text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white active:scale-95 transition-all">
            Add to Cart
          </button>
        }
      </div>
    </div>
  );
};
