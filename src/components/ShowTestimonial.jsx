const ShowTestimonial = ({ direction, name, testimony, position, image }) => {
    return (
        <div className={`flex ${direction} mx-auto items-center mx-16 w-4/5`}>
            <div className="absolute">
                <img src={`../src/assets/images/${image}`} alt="" className="testimonial-img " />
            </div>
            <div className={`h-40 my-10 mx-20 ${position} py-4 bg-blue-800 text-blue-100 rounded-full`}>
                <h4 className="text-xl">{name}</h4>
                <p>{testimony}</p>
            </div>
        </div>
    )
}

export default ShowTestimonial;