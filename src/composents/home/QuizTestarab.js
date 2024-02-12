import React from 'react';
import QCMComponent from './RandomQuizarab';

const ExamenQCM = () => {
    const questions = [
        {
          "text": "متى وقعت غزوة بدر و ما نتائجها",
          "correctAnswer": " ال 17 من رمضان و انتهت بانتصار المسلمين",
          "explanation": "وقعت في ال 17 من رمضان من السنة الثانية للهجرة و انتهت بانتصاؤ المسلمين",
          "options": [
            " ال 17 من رمضان و انتهت بانتصار المسلمين",
            "ال 17 من شعبان و انتهت بانتصار الكفار"
          ]
        },
        {
          "text": "متى وقعت غزوة احد و ما نتائجها",
          "correctAnswer": "السابع من الشوال و انتهت باستشهاد  عدد من المسلمين",
          "explanation": "وقعت غزوة احد في السابع من الشوال و انتهت باستشهاد 70 من المسلمين",
          "options": [
            "السابع من الشوال و انتهت باستشهاد  عدد من المسلمين",
            "السابع من رمضان و انتهت بانتصار الكفار"
          ]
        },
        {
          "text": "ما سبب غزوة الخندق ؟",
          "correctAnswer": "تحالف اليهود و قريش",
          "explanation": "وقعت غزوة الخندق بسبب تحالف اليهود مع المشركين",
          "options": [
            "تحالف اليهود و قريش",
            "تحالف المسلمين مع اليهود",
            "تحالف المشركين مع المسلمين"
          ]
        },
        // Continuer pour les autres questions
      ];
    return (
        <div>
          <QCMComponent questions={questions} />
        </div>
      );
    };
    
    export default ExamenQCM;