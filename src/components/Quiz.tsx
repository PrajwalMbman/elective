import { useState } from "react";
import { cn } from "@/lib/utils";

export const Quiz = () => {
    const questions = [
        {
            question: "What is the syntax to read input from the user?",
            options: ["printf", "scanf", "void", "struct"],
            answer: "4",
        },
        {
            question: "Capital of France?",
            options: ["London", "Paris", "Berlin", "Rome"],
            answer: "Paris",
        },
        {
            question: "What color is the sky?",
            options: ["Blue", "Green", "Red", "Yellow"],
            answer: "Blue",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = questions[currentIndex];

    return (
        <div className="grid grid-cols-4 gap-8">
            <h1 className="col-span-4 font-bold font-lg text-lg">Question No {currentIndex+1}</h1>
            <h1 className="col-span-4 font-bold font-lg text-lg">{current.question}</h1>
            {current.options.map((opt,idx) => (
                
                    <span key={idx} className={cn( idx % 2==0 ? "" : "col-start-4"
                        )}>
                            {opt}
                    </span>
    ))}
             </div>

    )};
