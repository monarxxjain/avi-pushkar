"use client";
import { CartItem } from "@/types/cart";
import { updateCartQuantity, removeFromCart } from "@/utils/cart";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { urlFor } from "@/sanity/image";
import Link from "next/link";

type Props = {
  item: CartItem;
  onQuantityChange?: () => void; // to re-sync with main cart
};

export const CartItemCard = ({ item, onQuantityChange }: Props) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const firstRender = useRef(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const safeQty = isNaN(value) || value < 0 ? 0 : value;
    setQuantity(safeQty);
  };

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => Math.max(0, q - 1));

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    updateCartQuantity(item.product._id, quantity);
    onQuantityChange?.(); // for refreshing main cart state
  }, [quantity]);

  return (
    <div className="flex border-b border-gray-300 py-6 gap-6">
      <Link  href={`/products/${item.product.slug.current}`}>
        <Image
          src={urlFor(item.product.thumbnailImage).url()}
          alt={item.product.name}
          width={120}
          height={120}
          className="rounded-md object-cover h-28 w-28"
        />
      </Link>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
            <Link href={`/products/${item.product.slug.current}`}>
                <h3 className="text-lg font-light hover:underline">{item.product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">₹ {item.product.price}</p>
            </Link>
            <div className="mx-5">
                ₹ {item.product.price * quantity}
            </div>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center gap-2 border border-gray-300 rounded px-2">
            <button onClick={handleDecrement} className="text-xl px-1 hover:text-yellow-600">−</button>
            <input
              type="number"
              min={0}
              value={quantity}
              onChange={handleInputChange}
              className="w-10 text-center bg-transparent outline-none"
            />
            <button onClick={handleIncrement} className="text-xl px-1 hover:text-yellow-600">+</button>
          </div>
          <button
            onClick={() => {
              removeFromCart(item.product._id);
              onQuantityChange?.();
            }}
            className="text-sm text-red-500 hover:bg-red-600 hover:text-white px-2 py-1 rounded active:scale-95 cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
