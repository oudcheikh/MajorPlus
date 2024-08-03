import { Checkbox } from "@mui/material";
import React, { useState, useImperativeHandle, forwardRef } from "react";

// Option Component
const Option = ({ option, onChange, isChecked, isDisabled }) => (
    <div>
        <Checkbox type={isDisabled ? "text" : "checkbox"} checked={isChecked} onChange={() => onChange(option)} disabled={isDisabled} />
        {option}
    </div>
);

// Quiz Component
const Quiz = forwardRef(({ question, options, multipleChoice = false, onSubmit }, ref) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (option) => {
        if (multipleChoice) {
            setSelectedOptions((prev) => (prev.includes(option) ? prev.filter((opt) => opt !== option) : [...prev, option]));
        } else {
            setSelectedOptions([option]);
        }
    };

    useImperativeHandle(ref, () => ({
        getSelectedOptions: () => {
            return selectedOptions;
        },
        setSelectedOptions: (newMessage) => {
            setSelectedOptions(newMessage);
        },
    }));

    const handleSubmit = () => {
        onSubmit(selectedOptions);
    };

    return (
        <div>
            <h3>{question}</h3>
            <div>
                {options.map((option) => (
                    <Option key={option.value} option={option} onChange={handleOptionChange} isChecked={selectedOptions.includes(option)} isDisabled={multipleChoice && !option.isEnabled} />
                ))}
            </div>
        </div>
    );
});

export default Quiz;
