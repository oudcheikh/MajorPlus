import React, { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

const Quiz = forwardRef(({ questions }, ref) => {
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

    useImperativeHandle(ref, () => ({
        getSelectedOptions: () => selectedOptions
    }));

    const handleOptionChange = (questionIndex, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[questionIndex] = option;
        setSelectedOptions(newSelectedOptions);
    };

    return (
        <div>
            {questions.map((q, index) => (
                <div key={index}>
                    <h3>{q.question}</h3>
                    {q.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                            <input
                                type="radio"
                                id={`q${index}_option${optionIndex}`}
                                name={`q${index}`}
                                value={option}
                                checked={selectedOptions[index] === option}
                                onChange={() => handleOptionChange(index, option)}
                            />
                            <label htmlFor={`q${index}_option${optionIndex}`}>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
});

Quiz.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.string).isRequired,
            correctAnswer: PropTypes.string.isRequired,
            explanation: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Quiz;
