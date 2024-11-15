
const Explore = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 py-10 px-7">
            <div>
                <img src="../src/assets/images/dyk-image.avif" alt="" className="rounded-md" />
            </div>
            <div className="flex flex-col justify-between md:w-1/3 text-gray-800 dark:text-blue-200">
                <div>
                    <h3 className="text-4xl font-bold">Did You Know?</h3>
                    <div className="my-4">At WorldMart, we're not just another shopping destination; we're your gateway to a world of convenience and quality. Founded on the principles of customer satisfaction and innovation, we strive to redefine your shopping experience.</div>
                </div>
                <div>
                    <button className="border rounded bg-blue-800 py-1 px-5 text-blue-100 hover:font-bold hover:text-blue-300 hover:px-6 hover:shadow-xl">Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Explore;