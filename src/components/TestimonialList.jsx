import { Search } from "@mui/icons-material";
import ShowTestimonial from "./ShowTestimonial";
import { testimonialImg1, testimonialImg2, testimonialImg3 } from "../assets/images";

const TestimonialList = () => {
    return (
        <div>
            <div className="flex justify-center mt-10 text-gray-700 dark:text-blue-200">
                <div className="text-center">
                    <h3 className="text-4xl text-blue-800">Testimonials</h3>
                    <p>This is what our customers say about World Mart!</p>
                </div>
                <Search />
            </div>
            <ShowTestimonial name="Mark"
                testimony="World Mart has truly changed the way i shop online. The variety of products available is astonishing, and the prices are unbeatable. Whether I'm looking for electronics, clothing, I always find exactly what I need."
                direction=""
                altText="a potriat photo of an african american man in a suit"
                position="md:ps-40 md:pe-10"
                image={testimonialImg2} />
            <ShowTestimonial name="Grace"
                testimony="As a frequent online shopper, I've tried many different platforms, but none compare to World Mart. The user interface is intuitive and easy to navigate, making it simple to find what I'm looking for."
                direction="md:flex-row-reverse"
                altText="a potriat photo of an african american woman dressed formally"
                position="md:pe-40 md:ps-10"
                image={testimonialImg1} />
            <ShowTestimonial name="David"
                testimony="I've been a loyal customer of World Mart for years, and for good reason. The sheer variety of products available is astounding, and I love that I can find everything I need in one place."
                direction=""
                altText="a potriat photo of an american man in a suit"
                position="md:ps-40 md:pe-10"
                image={testimonialImg3} />
        </div>
    )
}

export default TestimonialList;