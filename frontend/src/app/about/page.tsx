// "use client";

export default function AboutUsPage() {
    return (
        <section className="pt-[8vh] px-6 md:px-20 lg:px-32 py-12 space-y-12 leading-relaxed text-gray-800">

            {/* Header */}
            <div className="text-center w-full mt-5">
                <div className="inline-block relative">
                    <h1 className="text-3xl border-b border-yellow-700 px-4 pb-2 font-semibold">
                        About Us
                    </h1>
                    <div className="absolute -bottom-1 h-2 w-2 bg-yellow-700 rounded-full" />
                    <div className="absolute -bottom-1 right-0 h-2 w-2 bg-yellow-700 rounded-full" />
                </div>
            </div>

            {/* Section: Who I Am */}
            <div className="mt-5">
                <h2 className="text-2xl font-medium text-yellow-700 mb-2">Who I Am ?</h2>
                <p className="ms-2">
                    I am Avi, a simple shopkeeper based in Pushkar, Rajasthan, India. My journey began out of a
                    personal passion for crafting unique toys and performance props by hand.
                    Most of the products listed on this website are handmade by me — except
                    for some high-quality readymade articles. This allows me to offer these
                    products at significantly lower prices compared to other sellers.
                </p>
            </div>

            {/* Section: Why This Website */}
            <div>
                <h2 className="text-2xl font-medium text-yellow-700 mb-2">Why This Website?</h2>
                <p className="ms-2">
                    The purpose of this website is to showcase my products to a wider audience.
                    I have always taken orders through Instagram, and that continues to be the
                    method. This website is just a way to scale my presence and let more people
                    discover my collection and passion.
                </p>
            </div>

            {/* Section: What I Sell */}
            <div>
                <h2 className="text-2xl font-medium text-yellow-700 mb-2">What I Sell</h2>
                <p className="ms-2">
                    I specialize in toys used for performance and play, such as:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Hula hoops</li>
                    <li>Pois</li>
                    <li>Fire staff</li>
                    <li>Fire pois</li>
                    <li>Dapo</li>
                    <li>Juggling balls and bottles</li>
                    <li>Frisbees (Readymade, imported from Discraft)</li>
                </ul>
                <p className="mt-2 ms-2">
                    The readymade items I sell are all top-quality, from trusted brands,
                    and offered at prices cheaper than the market.
                </p>
            </div>

            {/* Section: What Makes Me Unique */}
            <div>
                <h2 className="text-2xl font-medium text-yellow-700 mb-2">What Makes Me Unique</h2>
                <p className="ms-2">
                    I offer personalized customizations based on your needs. This includes:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                        Replacing regular cloth with <strong>kevlar</strong> for fire toys, so they can withstand repeated burns.
                    </li>
                    <li>
                        Adjusting <strong>size, color, and pipe quality</strong> for hula hoops. Rings can also be decorated with
                        multi-colored tapes for a vibrant, customized look.
                    </li>
                </ul>
            </div>

            {/* Section: Trust & Experience */}
            <div>
                <h2 className="text-2xl font-medium text-yellow-700 mb-2">Trust & Experience</h2>
                <p className="ms-2">
                    I’ve sold thousands of products — about 95% of them offline from my shop,
                    <strong> AviPushkar</strong>, and the remaining 5% online. If you want to
                    know more about how I work or place an order, feel free to reach out to me
                    on Instagram.
                </p>
            </div>
        </section>
    );
};
