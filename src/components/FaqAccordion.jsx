import { useState } from "react";
import { Add } from "@mui/icons-material";


const FaqAccordion = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div
    onClick={() => setShowAnswer(prevState => !prevState)}
    className="border-b border-blue-800">
        <div className="p-4 flex items-center gap-x-4"><div className={`${showAnswer && "rotate-[315deg]"} duration-500 font-bold text-3xl`}>+</div>{question}</div>
        <div className={`${!showAnswer && "h-0 opacity-0 scale-y-0 pb-0"} origin-top w-[80%] duration-300 text-blue-950 text-sm text-justify mx-auto pb-2`}>{answer}</div>
    </div>
  )
}

export default FaqAccordion;