import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Features = () => {
    return (
        <div className="relative flex justify-center bg-blue-800 text-blue-100 mt-6 md:-mt-7 px-5">
            <div className="py-10 w-3/5 text-lg">
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
            <div className="w-1/4 mt-10 border-2 p-5 rounded-full">
                <img src="../src/assets/images/features-rider.jfif" alt="" className="border-2 rounded-full" />
            </div>
        </div>
    )
}

export default Features;