const Questions = () => {
    return (
        <div className="bg-bubbles-img bg-cover bg-center mt-20 p-2">
            <div className="text-blue-900 mx-20">
                <div className="text-blue-950 text-center text-4xl font-bold my-5">
                    <h4>Frequently Asked Questions</h4>
                </div>
                <div className="border border-gray-500/50 bg-slate-200/50 rounded-xl px-7 shadow-xl shadow-black">
                    <p className="border-b border-blue-800 p-4">+ Is there a refund or return policy?</p>
                    <p className="border-b border-blue-800 p-4">+ Do you offer any discounts or promotions?</p>
                    <p className="border-b border-blue-800 p-4">+ How often do you release updates or new features?</p>
                    <p className="border-b border-blue-800 p-4">+ What are the payment options available?</p>
                    <p className="border-b border-blue-800 p-4">+ How do I reset my password if I forget it?</p>
                    <p className="p-4">+ How can I cancel my order?</p>
                </div>
                <p className="m-6 text-sky-800">For any other questions, feel free to reach out to us at <a className="border-b border-sky-900 hover:font-bold hover:border-b-2" href="mailto:worldmart@gmail.com">worldmart@gmail.com</a></p>
            </div>

        </div>
    )
}

export default Questions;