import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import './FractionsCalculator.css';
import FractionComponent from './FractionComponent';


const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
};

const simplifyFraction = (numerator, denominator) => {
    const greatestCommonDivisor = gcd(numerator, denominator);
    return {
        numerator: numerator / greatestCommonDivisor,
        denominator: denominator / greatestCommonDivisor
    };
};

function FractionsCalculator() {
    const [numerator1, setNumerator1] = useState('');
    const [denominator1, setDenominator1] = useState('');
    const [numerator2, setNumerator2] = useState('');
    const [denominator2, setDenominator2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);
    const [steps, setSteps] = useState([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const transitions = useTransition(steps[currentStepIndex], {
        from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
        config: { tension: 280, friction: 60 },
        onRest: () => {
            if (currentStepIndex < steps.length - 1) {
                setTimeout(() => setCurrentStepIndex(currentStepIndex + 1), 5000);
            }
        },
        keys: currentStepIndex
    });

    const findLCD = (a, b) => {
        let lcm = a;
        while (lcm % b !== 0) {
            lcm += a;
        }
        return lcm;
    };

    const handleCalculate = () => {
        if (denominator1 === 0 || denominator2 === 0) {
            alert("Le dénominateur ne peut pas être zéro.");
            return;
        }
        
        const lcd = findLCD(denominator1, denominator2);
        const adjustedNumerator1 = numerator1 * (lcd / denominator1);
        const adjustedNumerator2 = numerator2 * (lcd / denominator2);

        let resultNumerator = operation === '+' ? adjustedNumerator1 + adjustedNumerator2 : adjustedNumerator1 - adjustedNumerator2;
        const simplified = simplifyFraction(resultNumerator, lcd);
        
        setResult(simplified);
        setSteps([
            `Trouver le PPCM de ${denominator1} et ${denominator2} : ${lcd}`,
            `Ajuster les numérateurs : ${numerator1} * (${lcd}/${denominator1}) = ${adjustedNumerator1}, ${numerator2} * (${lcd}/${denominator2}) = ${adjustedNumerator2}`,
            `${operation === '+' ? 'Additionner' : 'Soustraire'} les numérateurs ajustés : ${adjustedNumerator1} ${operation} ${adjustedNumerator2} = ${resultNumerator}`,
            `Simplifier la fraction : ${simplified.numerator}/${simplified.denominator}`
        ]);
        setCurrentStepIndex(0); // Restart from the first step
    };

    return (
        <div className="calculator">
            <h2>Calculatrice de Fractions</h2>
            <div className="fraction-inputs">
                <input type="number" value={numerator1} onChange={e => setNumerator1(Number(e.target.value))} />
                <span>/</span>
                <input type="number" value={denominator1} onChange={e => setDenominator1(Number(e.target.value))} />
                <select value={operation} onChange={e => setOperation(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input type="number" value={numerator2} onChange={e => setNumerator2(Number(e.target.value))} />
                <span>/</span>
                <input type="number" value={denominator2} onChange={e => setDenominator2(Number(e.target.value))} />
            </div>
            <button onClick={handleCalculate}>Calculer</button>
            {result && (
                <div className="result">
                    Résultat : {result.numerator}/{result.denominator}
                </div>
            )}
            <div className="steps">
                {transitions((style, item) => (
                    item && <animated.div style={style}>
                        {item}
                    </animated.div>
                ))}
            </div>
        </div>
    );
}

export default FractionsCalculator;
