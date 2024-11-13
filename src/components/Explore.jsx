
const Explore = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 py-10 px-7">
            <div>
                <img src="../src/assets/images/dyk-image.avif" alt="" className="rounded-md" />
            </div>
            <div className="md:w-1/3 text-gray-800">
                <h3 className="text-4xl font-bold">Did You Know?</h3>
                <div className="my-4">At WorldMart, we're not just another shopping destination; we're your gateway to a world of convenience and quality. Founded on the principles of customer satisfaction and innovation, we strive to redefine your shopping experience.</div>
                <button className="mt-5 border rounded bg-blue-800 py-1 px-5 text-blue-100">Explore</button>
            </div>
        </div>
    )
}

export default Explore;