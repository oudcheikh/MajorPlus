import React, { useState } from "react";
import { Button } from "@mui/material";

const NumberIdentificationActivity = () => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [selectedDigits, setSelectedDigits] = useState({ centaines: "", dizaines: "", unités: "" });

    // Génère un nombre aléatoire entre 0 et 999
    function generateRandomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    // Mets à jour le chiffre sélectionné pour une partie donnée
    const handleSelection = (part, digit) => {
        setSelectedDigits((prev) => ({ ...prev, [part]: digit }));
    };

    // Vérifie si l'enfant a bien identifié les parties
    const checkAnswer = () => {
        const correctAnswer = {
            centaines: randomNumber.toString().padStart(3, "0")[0],
            dizaines: randomNumber.toString().padStart(3, "0")[1],
            unités: randomNumber.toString().padStart(3, "0")[2],
        };

        if (
            selectedDigits.centaines === correctAnswer.centaines &&
            selectedDigits.dizaines === correctAnswer.dizaines &&
            selectedDigits.unités === correctAnswer.unités
        ) {
            alert("Bravo! Tu as bien identifié les parties 🎉");
            setRandomNumber(generateRandomNumber());
            setSelectedDigits({ centaines: "", dizaines: "", unités: "" });
        } else {
            alert("Oups! Réessaie. Regarde bien les chiffres et leur place. 💪");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Identifie les unités, dizaines et centaines</h1>
            <h3>Nombre : {randomNumber}</h3>

            {/* Table des unités, dizaines et centaines */}
            <table style={{ margin: "0 auto", borderSpacing: "10px", fontSize: "24px" }}>
                <thead>
                    <tr>
                        <th>Centaines</th>
                        <th>Dizaines</th>
                        <th>Unités</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {["centaines", "dizaines", "unités"].map((part) => (
                            <td
                                key={part}
                                style={{
                                    border: "2px solid #4CAF50",
                                    width: "60px",
                                    height: "60px",
                                    textAlign: "center",
                                    backgroundColor: "#FFEB3B",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                                onClick={() => handleSelection(part, prompt(`Sélectionne le chiffre pour la partie ${part}`))}
                            >
                                {selectedDigits[part] || "-"}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>

            {/* Bouton de vérification */}
            <Button 
                onClick={checkAnswer} 
                variant="contained" 
                color="primary" 
                style={{ marginTop: "20px", fontSize: "18px" }}
            >
                Vérifier ma réponse
            </Button>
        </div>
    );
};

export default NumberIdentificationActivity;
