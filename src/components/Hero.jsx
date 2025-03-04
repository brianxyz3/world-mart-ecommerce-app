import Button from "./Button";

const Hero = () => {
    return (
        <main className="text-gray-800 text-center mt-9 dark:text-blue-200">
            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                <h1>Fulfill Your Shopping</h1>
                <h1 className="my-2">Dreams with World Mart</h1>
                </div>
            <div className="text-sm lg:text-base my-5 font-medium">
                    <p>Dive into a world of endless possibilities as you explore our curated collections</p>
                    <p>tailored to your unique style. From trendy essentials to timeless classics,</p>
                    <p>we've got you covered. Enjoy seamless browsing.</p>
                </div>
            <div>
                <Button style="bg-blue-800 mr-2 text-blue-100">
                    View Products
                </Button>
                <Button style="text-blue-800 ml-2 z-50">
                    Exciting Offers
                </Button>
                </div>
            <div className="hidden md:flex relative w-full">
                <img src="../src/assets/images/shopping-cart-1.avif" alt="a shopping cart filled with packages" className="w-1/5 -mt-5 rounded-r-3xl dark:opacity-65" />
                <div className="flex items-end justify-end w-1/2 absolute right-0 md:bottom-10 lg:bottom-14">
                    <img src="../src/assets/images/wm-hero-img.jpg" alt="" className="w-1/3 translate-y-3 lg:translate-y-8 lg:w-[28%] translate-x-8 lg:translate-x-16 rounded-tl-3xl dark:opacity-65" />
                    <div className="text-nowrap translate-x-3 lg:translate-x-8 -rotate-90 p-1 text-xl lg:text-3xl bg-gradient-to-r from-blue-900 to-blue-800 rounded-tr-2xl">
                            <p className="text-blue-950">WORLD MART</p>
                            <p className="text-blue-600">WORLD MART</p>
                            <p className="text-blue-400">WORLD MART</p>
                            <p className="text-blue-200">WORLD MART</p>
                        </div>
                    </div>
                </div>
        </main>
    )
}

export default Hero;