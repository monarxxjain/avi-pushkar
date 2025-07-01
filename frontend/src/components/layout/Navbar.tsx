import { Instagram } from "lucide-react"
import Link from "next/link"

export const Navbar = () => {
    return(
        <nav className="fixed z-10 bg-white border-b border-b-yellow-700 w-full px-12 md:px-20 lg:px-32 ">
            <div className="flex justify-between items-center p-4 px-10 ">
                <div className="text-2xl font-bold font-serif text-yellow-700">Avi Pushkar</div>
                <div>
                    <ul className="flex space-x-6 font-medium">
                        <li className="hover:text-yellow-700 transition-colors duration-200"><Link href={'/'}>Home</Link></li>
                        <li className="hover:text-yellow-700 transition-colors duration-200"><Link href={'/products'}>Products</Link></li>
                        <li className="hover:text-yellow-700 transition-colors duration-200"><Link href={'/about-us'}>About Us</Link></li>
                        <li className="hover:text-yellow-700 transition-colors duration-200"><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-6 hover:text-pink-700 text-yellow-700 hover:scale-105 transition-all">
                        <li><a href="https://www.instagram.com/avijugglingpushkar/"><Instagram /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}