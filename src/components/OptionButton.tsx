import {useState} from "react";
import { cn } from "@/lib/utils";
export const OptionButton = ({option, handleClick, isSelected}) => {
    return (
        <button
             onClick={() => handleClick(option)}
             className={cn("option-btn", isSelected?"selected" : "")}
            >
            {option}
        </button>
    );
}