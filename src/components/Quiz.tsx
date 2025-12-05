import { useState } from "react";
import { cn } from "@/lib/utils";
import { OptionButton } from "./OptionButton";

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
     const [selectedOption, setSelectedOption] = useState(null);
    const current = questions[currentIndex];

     // Handle option selection
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // Here you could add logic for checking if the answer is correct
    };

    return (
        <div className="grid grid-cols-4 gap-2">
            <h1 className="col-span-4 font-bold font-lg text-lg">Question No {currentIndex+1}</h1>
            <h1 className="col-span-4 font-bold font-lg text-lg">{current.question}</h1>
            {current.options.map((opt,idx) => (
                <span  key={idx} className = {cn("col-span-2",idx % 2 == 0 ? "" : "col-start-3")}>
                    <OptionButton
                            option={opt}
                            handleClick={handleOptionClick}
                            isSelected={opt === selectedOption}
                    />
                </span>

                   
            ))}
            <div className="justify-center">
                <button 
                    className="btn"
                >
                    Prev
                </button>
                <button
                    className="btn"
                    disabled
                    >
                    Next
                </button>

            </div>
        </div>

    )};
