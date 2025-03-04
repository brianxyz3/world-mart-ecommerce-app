import FaqAccordion from "./FaqAccordion";

const Questions = () => {
    const questionAndAnswer = [
        {
            question: "Is there a refund or return policy?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum dolor sit amet.",
        },
        {
            question: "Do you offer any discounts or promotions?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum dolor sit amet consectetur adipisicing elit aliquid?",
        },
        {
            question: "How often do you release updates or new features?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perfereing elit aliquid?",
        },
        {
            question: "What are the payment options available?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum dolor sit amet consectetur.",
        },
        {
            question: "How do I reset my password if I forget it?",
            answer: "Lorem ipsum dolor sit aerferendis, ipsum dolor sit amet consectetur adipisicing elit aliquid?",
        },
        {
            question: "How can I cancel my order?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum dolor sit amet consectetur adipisicing elit aliquid?",
        },
    ]
    return (
        <div className="bg_bubbles bg-cover bg-center mt-20 p-2">
            <div className="text-blue-900 md:mx-20">
                <div className="text-blue-950 text-center text-2xl md:text-4xl font-bold my-5">
                    <h4>Frequently Asked Questions</h4>
                </div>
                <div className="border border-gray-500/50 bg-slate-200/50 rounded-xl px-7 shadow-xl shadow-black">
                    {questionAndAnswer.map((qAndA, idx) => (
                        <FaqAccordion key={idx} question={qAndA.question} answer={qAndA.answer} />
                    ))}
                </div>
                <p className="m-6 text-sky-800">For any other questions, feel free to reach out to us at <a className="border-b border-sky-900 hover:font-bold hover:border-b-2" href="mailto:worldmart@gmail.com">worldmart@gmail.com</a></p>
            </div>

        </div>
    )
}

export default Questions;