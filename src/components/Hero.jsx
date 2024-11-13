const Hero = () => {
    return (
        <>
            <main className="text-gray-800 text-center mt-9">
                <div className="text-6xl font-bold">
                    <p>Fulfill Your Shopping</p>
                    <p className="my-2">Dreams with World Mart</p>
                </div>
                <div className="text-sm my-5 font-medium">
                    <p>Dive into a world of endless possibilities as you explore our curated collections</p>
                    <p>tailored to your unique style. From trendy essentials to timeless classics,</p>
                    <p>we've got you covered. Enjoy seamless browsing.</p>
                </div>
                <div className="relative">
                    <button className="border rounded bg-blue-800 mr-2 py-1 px-5 text-blue-100">View Products</button>
                    <button className="border border-blue-800 rounded py-1 px-5 text-blue-800 ml-2">Exciting Offers</button>
                </div>
                <div className="hidden md:flex">
                    <img src="../src/assets/images/shopping-cart-1.avif" alt="a shopping cart filled with packages" className="w-1/5 -mt-5" />
                    <div className="flex flex-row items-center -mt-8 ms-auto w-1/2 -me-36">
                        <img src="../src/assets/images/wm-hero-img.jpg" alt="" className="w-1/2 -me-14" />
                        <div className="-rotate-90 p-1 text-3xl bg-blue-900 rounded-tr-2xl">
                            <p className="text-blue-950">WORLD MART</p>
                            <p className="text-blue-600">WORLD MART</p>
                            <p className="text-blue-300">WORLD MART</p>
                            <p className="text-blue-100">WORLD MART</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero;