const ShowTestimonial = ({ direction, name, testimony, position, image, altText }) => {
    return (
        <div className={`flex ${direction} relative mx-auto items-center w-11/12 md:w-4/5`}>
            <div className="absolute size-fit inset-10 sm:left-40 md:inset-auto">
                <img src={image} alt={altText} width="100px" height="100px" className="w-20 md:w-48 rounded-full aspect-square" />
            </div>
            <div className={`md:h-40 mx-auto w-72 p-3 text-center md:p-0 md:w-auto md:text-left aspect-square md:aspect-auto flex flex-col justify-center my-10 md:mx-20 ${position} bg-blue-800 text-blue-50 rounded-full`}>
                <h4 className="text-blue-400 text-xl lg:text-2xl">{name}</h4>
                <p className="text-xs leading-5 lg:text-base">{testimony}</p>
            </div>
        </div>
    )
}

export default ShowTestimonial;