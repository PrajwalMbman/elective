import { useEffect, useState,useRef } from "react";
export const Result = ({answers}) => {
    useEffect(() => {
        alert("abc");
        //  if(hasCalculated.current) {
        //     return;
        // }
        calculateScore();
        //  hasCalculated.current = true;
    }, []);

    const [score, setScore] = useState(0);
    const hasCalculated = useRef(false);

    const calculateScore = () => {
        answers.map((ans,id) => {
            if(ans.question.answer == ans.answer) {
                setScore(score=>score+5);
            }
        });
    };
    return (
        <>
            <h3>Congratulations!!!</h3>
            <p>You have scored <b>{score}</b>.</p>
            <button>View Answers</button>
        </>
    );
}