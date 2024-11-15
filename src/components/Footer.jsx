import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="pt-20 px-20 pb-2 text-gray-800 bg-gray-200 dark:bg-gray-700 dark:text-blue-200">
            <div className="flex flex-wrap justify-evenly">
                <div className="mb-2">
                    <div className="logo w-16 text-2xl mb-1">
                        <span className="logo-text-w">W</span><span className="logo-text-m">M</span>
                    </div>
                    <p>Choose World Mart</p>
                    <p>Choose Quality Products</p>
                </div>
                <div className="mb-2">
                    <h6 className="mb-4 text-black font-bold text-xl">Useful links</h6>
                    <ul className="flex flex-col gap-4">
                        <li><a href="about">About Us</a></li>
                        <li><a href="about">Features</a></li>
                        <li><a href="about">Testimonials</a></li>
                        <li><a href="about">FAQ</a></li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h6 className="mb-4 text-black font-bold text-xl">Main Menu</h6>
                    <ul className="flex flex-col gap-4">
                        <li><a href="about">Home</a></li>
                        <li><a href="about">Features</a></li>
                        <li><a href="about">Offers</a></li>
                        <li><a href="about">Products</a></li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h6 className="mb-4 text-black font-bold text-xl">Contact Us</h6>
                    <ul className="flex flex-col gap-4">
                        <li><a href="mailto:worldmart@gmail.com">worldmart@gmail.com</a></li>
                        <li><a href="tel:+64958248900">+64 958 248 900</a></li>
                        <li><a href="about">Social media</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center gap-3 mt-6">
                <Facebook />
                <Instagram />
                <Twitter />
                <YouTube />
                <p>Copyright &copy; 2023 Brianxyz | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;