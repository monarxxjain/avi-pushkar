import { ProductCategory } from "@/types/products";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
    productCategories: ProductCategory[];
    setSelectedCategory: (category: ProductCategory | null) => void;
}

export const Sidebar = ({ productCategories, setSelectedCategory } : Props) => {
    return(
        <div className="w-1/5 fixed left-0 top-[8vh] bg-[#f8f8f8] bottom-0 flex flex-col gap-5 px-12 py-10 border-r border-r-yellow-700">
            <div className="flex flex-col gap-1">
            <h2 className="relative text-2xl tracking-wider py-4 text-center border-b border-b-yellow-700">
                Categories
                <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-yellow-700"></div>
            </h2>
            <ul className="list-none space-y-2 px-5 mt-4 text-lg font-light ">
                <li onClick={() => setSelectedCategory(null)} className="flex items-center group justify-between transition-all hover:text-yellow-700 cursor-pointer duration-200">
                <div>All Products</div>
                <CircleArrowRight className="hidden group-hover:block text-xs" style={{height: 20}} />
                </li>
                {productCategories.map((category) => (
                <li onClick={() => setSelectedCategory(category)} key={category._id} className="flex items-center group justify-between transition-all hover:text-yellow-700 cursor-pointer duration-200">
                    <div>{category.name}</div>
                    <CircleArrowRight className="hidden group-hover:block text-xs" style={{height: 20}} />
                </li>
                ))}
            </ul>
            </div>
            <Image className="absolute -bottom-10 left-1/2 -translate-x-[50%] animate-soft-bounce" src={'/Balloon.png'} alt="" height={400} width={180} />
        </div>
    );
}