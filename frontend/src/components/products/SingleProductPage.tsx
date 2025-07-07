"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import { useState } from "react";
import { addToCart } from "@/utils/cart";
import { urlFor } from "@/sanity/image";

type Props = {
  product: Product;
};

export const SingleProductPage = ({ product }: Props) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [question, setQuestion] = useState<string>("");

  const handleCopyQuestionMessage = () => {
    const message = `❓ I have a question about the following product:\n\n🛍️ ${product.name}\n💬 ${question.trim()}`;
    navigator.clipboard.writeText(message).then(() => {
      alert(
        "✅ Your question has been copied!\n\nYou'll now be redirected to our Instagram.\nJust open the DM, paste the message, and send it."
      );
      window.open("https://www.instagram.com/avi_pushkar", "_blank");
    });
  };

  return (
    <section className="pt-[8vh] px-6 md:px-20 lg:px-32 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
        {/* Product Image */}
        <div>
          <Image
            src={urlFor(product.thumbnailImage).url()}
            alt={product.name}
            width={600}
            height={500}
            className="rounded-lg w-full h-auto object-cover cursor-pointer"
            onClick={() => setPreviewImage(urlFor(product.thumbnailImage).url())}
          />
          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images?.map((img, i) => (
              <Image
                key={i}
                src={urlFor(img).url()}
                alt={`Image ${i + 1}`}
                width={150}
                height={100}
                className="rounded-md cursor-pointer hover:scale-105 transition"
                onClick={() => setPreviewImage(urlFor(img).url())}
              />
            ))}
          </div>

        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="relative text-3xl tracking-wide border-b pb-2 border-yellow-700">
            <p className="ms-4">{product.name}</p>
            <div className="absolute -bottom-1 h-2 w-2 rounded-full bg-yellow-700 mt-1" />
          </h1>

          <p className="text-gray-800 text-xl">
            ₹ {product.price}{" "}
            <span className="text-sm text-gray-500">(per item)</span>
          </p>

          {product.description && (
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          )}

          {/* Customizations */}
          {Array.isArray(product.customizations) && product.customizations?.length > 0 && (
            <div>
              <h3 className="font-medium text-yellow-700 mb-2">
                Customizations:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {product.customizations.map((c, i) => (
                  <li key={i}>
                    {c.label}: {c.options?.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-lg">Qty:</label>
            <div className="flex items-center border border-gray-300 rounded px-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-xl px-2 hover:text-yellow-600"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-12 text-center outline-none bg-transparent"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-xl px-2 hover:text-yellow-600"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="text-lg mt-4 cursor-pointer py-2 w-full text-center border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white active:scale-95 transition-all"
          >
            Add {quantity} to Cart
          </button>

          {/* Ask a Question */}
          <div className="mt-8">
            <h3 className="text-lg mb-2 font-medium">Ask a question</h3>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded p-3 resize-none outline-yellow-700"
              placeholder="Type your question about this product..."
            ></textarea>

            <button
              onClick={handleCopyQuestionMessage}
              className="mt-4 text-lg px-4 py-2 border cursor-pointer border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
              disabled={!question.trim()}
            >
              Ask on Instagram
            </button>
          </div>
        </div>
      </div>
      {previewImage && (
        <div
          className="absolute inset-0 bg-black/90 bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <Image
              src={previewImage}
              alt="Preview"
              width={800}
              height={600}
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute cursor-pointer top-0 right-3 text-white text-2xl font-bold hover:text-yellow-500"
          >
            ×
          </button>
        </div>
      )}

    </section>
  );
};
