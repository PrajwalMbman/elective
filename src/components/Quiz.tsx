import { use, useState } from "react";
import { cn } from "@/lib/utils";
import { OptionButton } from "./OptionButton";
import { Result } from "./Result";

export const Quiz = () => {
    const questions = [
        {
            question: "What is the syntax to read input from the user?",
            options: ["printf", "scanf", "void", "struct"],
            answer: "scanf",
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
    //  var answers = [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    var current = questions[currentIndex];  
    

     // Handle option selection
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // Here you could add logic for checking if the answer is correct
    };
    // Handle option selection
    const handlePrevClick = () => {
        if(currentIndex>0) {
            setCurrentIndex(currentIndex-1);
        }
    };
    // Handle option selection
    const handleNextClick = () => {
        setAnswers([
            ...answers,
            {
                question : current,
                answer: selectedOption

            }]);
        if(currentIndex<questions.length-1) {
            setSelectedOption(null);
            setCurrentIndex(currentIndex+1);
        }
    };

    // Handle option selection
    const handleSubmitClick = () => {
            handleNextClick();
            setShowResult(true);
    };
    if(showResult) 
    {
        return <Result answers={answers} />;
    }

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
            <div className="col-span-2 col-start-2">
                {/* <button 
                    className={cn(currentIndex==0 ? "hidden" : "","cntrl-btn")}
                    onClick={() => handlePrevClick()}
                >
                    Prev
                </button> */}
                <button
                    className={cn(currentIndex==questions.length-1 ? "hidden" : "","cntrl-btn")}
                    onClick={() => handleNextClick()}
                    disabled = {selectedOption === null }
                >
                    Next  
                </button>
                <button
                    className={cn(currentIndex==questions.length-1 ? "" : "hidden","cntrl-btn")}
                    onClick={() => handleSubmitClick()}
                    disabled = {selectedOption === null }
                >
                    Submit  
                </button>

            </div>
        </div>

    )};
