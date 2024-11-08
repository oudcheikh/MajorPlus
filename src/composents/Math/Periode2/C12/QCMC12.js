import QCM from '../../../QCM';

function QCMC1(){

    const questionsArray = [
        // ... the existing questions
        {
            question: "Ana a acheté 3 boîtes de crayons. Chaque boîte contient 12 crayons. Combien de crayons au total a-t-elle achetés ?",
            answers: ["16 crayons", "48 crayons", "32 crayons", "40 crayons"],
            correctAnswer: "48 crayons",
            explanation: "Ana a acheté 3 boîtes avec 12 crayons chacun. Donc, 12 crayons x 3 boîtes= 48 crayons.",
            userAnswer: null
        },
        {
            question: "Ahmedou veut acheter 8 cahiers pour 200 MRU le cahier, et 5 Stylos pour 100 le stylo, combien doit-t-il depanser?",
            answers: ["2100 MRU", "2500 MRU", "3000 MRU"],
            correctAnswer: "2100 MRU",
            explanation: "Ahmedou doit depanser (8 x 200) + (5 x 100) = 2100 MRU.",
            userAnswer: null
        },
        {
            question: "L'épicier emballe 120 bonbons dans des sachets de 8 bonbons chacun. Combien de sachets complets pourra-t-il réaliser ?",
            answers: ["20 sachets", "10 sachets", "15 sachets"],
            correctAnswer: "15 sachets",
            explanation: "Le nombre des sachets est de ( 120 / 8 ) = 15 sachets.",
            userAnswer: null
        },
        {
            question: "Le jardinier a planté 24 arbres  et veut les organiser en rangées avec le même nombre d'arbres dans chaque rangée. Combien de rangées peut-il former? ",
            answers: ["6 rangées", "4 rangées", "3 rangées"],
            correctAnswer: "6 rangées",
            explanation: "Les diviseurs de 24 sont 12, 8, 6, 4, 3, 2 (6 diviseurs), donc il peut forme 6 rangées.",
            userAnswer: null
        },
        // ... continue adding more questions if needed
    ];

    return (
        <div> <QCM questionsArray={questionsArray}/></div>
    )
}

export default QCMC1;
