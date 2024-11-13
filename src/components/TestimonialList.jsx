import { Search } from "@mui/icons-material";
import ShowTestimonial from "./ShowTestimonial";

const TestimonialList = () => {
    return (
        <div>
            <div className="flex justify-center text-gray-700">
                <div className="text-center">
                    <h3 className="text-4xl text-blue-800">Testimonials</h3>
                    <p>This is what our customers say about World Mart!</p>
                </div>
                <Search />
            </div>
            <ShowTestimonial name="Bob"
                testimony="World Mart has truly changed the way i shop online. The variety of products available is astonishing, and the prices are unbeatable. Whether I'm looking for electronics, clothing, I always find exactly what I need."
                direction=""
                position="ps-40 pe-10"
                image="testimonial-pp-2.jfif" />
            <ShowTestimonial name="Grace"
                testimony="As a frequent online shopper, I've tried many different platforms, but none compare to World Mart. The user interface is intuitive and easy to navigate, making it simple to find what I'm looking for."
                direction="flex-row-reverse"
                position="pe-40 ps-10"
                image="testimonial-pp-1.jfif" />
            <ShowTestimonial name="Bob"
                testimony="I've been a loyal customer of World Mart for years, and for good reason. The sheer variety of products available is astounding, and I love that I can find everything I need in one place."
                direction=""
                position="ps-40 pe-10"
                image="testimonial-pp-3.jfif" />
        </div>
    )
}

export default TestimonialList;