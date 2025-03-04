import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { featuresImg } from '../assets/images';

const Features = () => {
    return (
        <section className="relative flex justify-center flex-wrap-reverse bg-blue-800 text-blue-100 mt-8 md:mt-0 md:-translate-y-7 px-5 py-2">
            <div className="py-10 md:w-3/5 text-lg">
                <h3 className="text-4xl font-bold">Features &</h3>
                <h3 className="text-4xl font-bold text-yellow-500">Benefits</h3>
                <div className="mb-5">
                    <p>Your go-to for rapid delivery, ensuring your</p>
                    <p>satisfaction at the speed of light.</p>
                </div>
                <p><AccessTimeFilledIcon /> Get your delivery in 48 hours</p>
                <p><PaymentsIcon /> Cash On Delinery available</p>
                <p><CalendarTodayIcon /> 7-days easy return</p>
            </div>
            <div className="size-60 md:size-80 border-2 p-5 rounded-full">
                <img src={featuresImg} alt="" width="280px" height="280px" className="border-2 rounded-full" />
            </div>
        </section>
    )
}

export default Features;