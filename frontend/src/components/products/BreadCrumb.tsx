import { ProductCategory } from "@/types/products";

type Props = {
    selectedCategory: ProductCategory | null;
    setSelectedCategory: (category: ProductCategory | null) => void;
}

export const BreadCrumb = ({ selectedCategory, setSelectedCategory }: Props) => {
    return(
        <div className="flex relative flex-col gap-1 border-b py-2 sm:py-5 border-b-yellow-700">
            

            <ul className="list-none flex items-center px-5 mt-2 md:mt-8 text-lg font-light flex-wrap gap-1">
            <li className="flex items-center group transition-all hover:text-yellow-700 cursor-pointer duration-200">
                <a onClick={()=>setSelectedCategory(null)} className="flex items-center gap-1">
                <span>Products</span>
                </a>
            </li>

            {selectedCategory && (
                <li className="flex items-center group transition-all hover:text-yellow-700 cursor-pointer duration-200">
                <span className="mx-1">/ </span>
                <span className="text-yellow-700 ms-1">{selectedCategory.name}</span>
                </li>
            )}
            </ul>

            <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-yellow-700"></div>
        
        </div>
    );
}