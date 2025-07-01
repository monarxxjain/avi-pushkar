export const BestSellers = () => {
    return(
        <>
            <section className="py-16 px-8 md:px-16 lg:px-32 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">Best Sellers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Example product cards */}
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={`https://via.placeholder.com/150?text=Product+${index + 1}`} alt={`Product ${index + 1}`} className="w-full h-40 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2">Product {index + 1}</h3>
                            <p className="text-gray-600 mb-4">$19.99</p>
                            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition-colors duration-300">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}