import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";
import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";

const NumberTable = () => {
    const [userInputs, setUserInputs] = useState(Array(12).fill(""));
    const [result, setResult] = useState("");
    const [step, setStep] = useState(1);
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber(1));
    const [entryTime, setEntryTime] = useState(null);
    const { currentUser } = useAuth();
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);

    useEffect(() => {
        const now = new Date();
        setEntryTime(now);
    }, []);

    function generateRandomNumber(step) {
        switch (step) {
            case 1:
                return Math.floor(Math.random() * 1000).toString();
            case 2:
                return Math.floor(1000 + Math.random() * 9000).toString();
            case 3:
                return Math.floor(10000 + Math.random() * 90000).toString();
          

            default:
                return "Bravooo !";
        }
    }

    const handleChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newInputs = [...userInputs];
            newInputs[index] = value;
            setUserInputs(newInputs);
        }
    };

    const checkAnswer = () => {
        const formattedNumber = randomNumber.toString().padStart(12, "0").split('');
        const isCorrect = formattedNumber.every((digit, index) => userInputs[index] === digit || userInputs[index] === "");
        setResult(isCorrect ? "Bonne réponse!" : "Mauvaise réponse. Essayez encore.");
        setIsAnsweredCorrectly(isCorrect);
    
        return {
            allAnswersCorrect: isCorrect,
            totalQuestions: step,
            correctAnswers: isCorrect ? 1 : 0,
            incorrectAnswers: isCorrect ? 0 : 1,
        };
    };
    

    const storeActivityData = async (activityData) => {
        try {
            const docRef = await addDoc(collection(db, 'activities'), activityData);
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    const next = async () => {
        const endTime = new Date();
        const timeSpent = (endTime - entryTime) / 1000; // Temps passé en secondes

        const activityData = {
            userId: currentUser.uid,
            activityName: "NumberTable",
            entryTime: entryTime.toISOString(),
            timeSpent: timeSpent,
            step: step,
            result: result
        };

        await storeActivityData(activityData);

        const nextStep = step + 1;
        setStep(nextStep);
        setRandomNumber(generateRandomNumber(nextStep));
        setUserInputs(Array(12).fill(""));
        setResult("");
        setIsAnsweredCorrectly(false);
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
    };

    const tableStyle = {
        borderCollapse: "collapse",
        margin: "30px 0",
        fontSize: "10px",
        textAlign: "center",
        width: "90%", // Set the table width to 90% of the page width
    };

    const headerStyle = {
        padding: "4px",
        border: "1px solid black",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
        color: "black",
        width: "30px", // Ensure equal width for all cells
        height: "30px", // Ensure equal height for all cells
    };

    const inputStyle = {
        width: "100%", // Set width to a lower percentage to avoid overflow
        height: "auto",
        textAlign: "center",
        padding: "5px", // Reduce padding
        margin: "0",
        border: "1px solid #ccc",
        borderRadius: "2px",
        fontSize: "16px", // Increase font size for better readability
        fontFamily: "Arial, sans-serif",
        color: "black",
        boxSizing: "border-box",
    };

    const imageStyle = {
        width: "50%",
        height: "auto",
        maxWidth: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    };

    return (
        <ActivityWrapper
            activityTitle={"Exercice 2"}
            explanationVideoUrl={"/path/to/video.mp4"}
            user={currentUser}
            onSubmit={checkAnswer}
            activityName="NumberTable"
        >
            <div style={containerStyle}>
                <img src="/images/Math/C/imgC19/Activity.png" alt="Activity" style={imageStyle} />

                <h2 style={{ color: "blue" }}>Compléter le tableau suivant:</h2>
                <h3>Classez les chiffres du nombre : {randomNumber}</h3>
        
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th colSpan="3" style={headerStyle}>
                                    milliards
                                </th>
                                <th colSpan="3" style={headerStyle}>
                                    millions
                                </th>
                                <th colSpan="3" style={headerStyle}>
                                    milliers
                                </th>
                                <th colSpan="3" style={headerStyle}>
                                    unités
                                </th>
                            </tr>
                            <tr>
                                {["C", "D", "U", "C", "D", "U", "C", "D", "U", "C", "D", "U"].map((header, index) => (
                                    <th key={index} style={headerStyle}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {userInputs.map((input, index) => (
                                    <td key={index} style={headerStyle}>
                                        <input style={inputStyle} placeholder="-" type="text" value={input} maxLength="1" onChange={(e) => handleChange(index, e.target.value)} />
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
               <div>
                <Button variant="contained" color="primary" onClick={checkAnswer} style={{ margin: "30px" }}>
                    Répondre
                </Button>
                <Button variant="contained" color="primary" onClick={next}>
                    Suivant
                </Button>
                </div>
                {result && (
                    <p style={{ color: isAnsweredCorrectly ? "green" : "red" }}>
                        {result}
                    </p>
                )}
            </div>
        </ActivityWrapper>
    );
};

export default NumberTable;
