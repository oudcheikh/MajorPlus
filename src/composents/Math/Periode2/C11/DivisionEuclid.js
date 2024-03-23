import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../../Styles/MajorStyles';
import { Button } from '@mui/material';
import { useSpring, animated, useTransition } from 'react-spring';
import './styles.css'
import { Link } from 'react-router-dom';

import TransitionComponent from './TransitionComponent ';


const FadingNumber = styled.span`
  &.fade-animation {
    animation: fade 1s ease-in-out forwards;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const Container = styled.div`
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const TopRow = styled.div`
display: flex;
position: relative; /* Ajout du style position: relative sur le conteneur parent */
width: 100%;
justify-content: space-between;
margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid red;
  font-size: 24px;
  color: bleu;
  width: 45%;
  text-align: center;
  outline: none;
  margin-right: 10px;
`;
const Input2 = styled.input`
  border: none;
  border-bottom: 2px solid white;
  font-size: 24px;
  color: ${({ color }) => color};
  width: 45%;
  text-align: center;
  outline: none;
  margin-right: 10px;
`;

const VerticalDivider = styled.div`
width: 2px;
height: 200px;
background-color: black;
position: absolute; /* Ajout du style position: absolute */
top: 0; /* Position fixe par rapport au haut du conteneur parent */
left: 50%; /* Positionne le diviseur à la moitié de la largeur du conteneur parent */
transform: translateX(-50%); /* Centre le diviseur horizontalement */
`;
const VD = styled.div`
width: 2px;
height: 150px;
background-color: black;
position: absolute; /* Ajout du style position: absolute */
top: 0; /* Position fixe par rapport au haut du conteneur parent */
left: 50%; /* Positionne le diviseur à la moitié de la largeur du conteneur parent */
transform: translateX(-50%); /* Centre le diviseur horizontalement */
`;
const QuotientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quotient = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Remainder = styled.div`
  font-size: 24px;
  color: red;
`;
const AlertMessageInvalide = styled.div`
  color: red;
`;
const AlertMessageValide = styled.div`
  color: green;
`;

function DivisionComponent() {

  const message_initiale = "donner deux entier "
  const [messageSuivant, setMessageSuivant] = useState(message_initiale)
  const [dividend, setDividend] = useState("");
  const [divisor, setDivisor] = useState("");
  const [quotient, setQuotient] = useState("");
  const [remainder, setRemainder] = useState("");
  const [ValeurIntermidiare, setValeurIntermidiare] = useState("")
  const [remainder2, setRemainder2] = useState("");
  const [ValeurIntermidiare2, setValeurIntermidiare2] = useState("")

  const [remainder3, setRemainder3] = useState("");
  const [ValeurIntermidiare3, setValeurIntermidiare3] = useState("")

  const [remainder4, setRemainder4] = useState("");
  const [ValeurIntermidiare4, setValeurIntermidiare4] = useState("")

  const [remainder5, setRemainder5] = useState("");
  const [ValeurIntermidiare5, setValeurIntermidiare5] = useState("")

  const [etape, setEtape] = useState(1);

  const [resoudreMarche, setResoudreMarche] = useState(true)
  const [X, setX] = useState(false)
  const [Y, setY] = useState(false)
  const [V, setV] = useState(false)
  const [Z, setZ] = useState(false)
  const [suiteZ1, setSuiteZ1] = useState(false)
  const [suiteZ2, setSuiteZ2] = useState(false)
  const [suiteZ3, setSuiteZ3] = useState(false)
  const [suiteZ4, setSuitez4] = useState(false)


  const longueurDivD = getLongueurEntier(dividend);
  const longueurDivS = getLongueurEntier(divisor);


  const milliers = Math.floor(dividend / 1000);
  const centaines = Math.floor((dividend % 1000) / 100);
  const dizaines = Math.floor((dividend % 100) / 10);
  const unites = dividend % 10;

  const [step, setStep] = useState(0);
  const [result, setResult] = useState('');
  const [remainder1, setRremainder1] = useState('');

  const [vertcalDSmallDiv2, setvertcalDSmallDiv2] = useState(false);
  const [suiteX, setSuiteX] = useState(false)
  const [suiteY1, setSuiteY1] = useState(false)
  const [suiteY2, setSuiteY2] = useState(false)

  // animation 
  const AnimatedCard = animated(Card);


  const [quotientColor, setQuotientColor] = useState("blue");
  const [resteColor, setResteColor] = useState("red");



  // animation du result
  const cardAnimation = useSpring({
    opacity: result ? 1 : 0, // Si result est présent, l'opacité est de 1, sinon elle est de 0
    from: { opacity: 0 }, // Démarre avec une opacité de 0
    config: { duration: 500 } // Durée de l'animation en millisecondes
  });



  //mes  fonctions
  function getLongueurEntier(entier) {
    let compteur = 0;
    while (entier >= 1) {
      compteur++;
      entier /= 10;
    }
    return compteur;

  }


  //-----------------
  const PremierEntier = (x, y) => {
    const d = x / y
    const partieEntiere = Math.floor(d)
    return (
      partieEntiere
    )

  }


  //si diviseur==dividend
  const egaux = () => {
    setX(true)
    setQuotient(1)
    setValeurIntermidiare(dividend)
    setRemainder(0)
    setResult("🥳🥳voila le reséltat finale de deux entiers egaux est: 1")

  }
  //si didvident null
  const DivDNull = () => {
    setResult(" 🥳le résultat finale est 0")
    setX(true)
    setQuotient(0)
    setValeurIntermidiare(0)
    setRemainder(0)
  }


  //Diviseur 0
  const Diviseur0 = () => {
    setX(false)
    setY(false)
    setV(false)
    Reset()


    setResult(
      <div>

        <span style={{ color: 'red' }}> on ne peux pas diviser par 0</span>

      </div>
    );



  }


  //

  const Reset = () => {
    setEtape(1)

    setDividend("")
    setDivisor("")
    setQuotient("")
    setRemainder("")
    setValeurIntermidiare("")
    setX(false)
    setY(false)
    setV(false)

    setStep(0)
    setResult("donner deux entiers")
    setRemainder2("")
    setValeurIntermidiare2("")
    setSuiteX(false)
    setSuiteY1(false)
    setSuiteY2(false)
    setSuiteZ1(false)
    setSuiteZ2(false)
    setSuiteZ3(false)
    setZ(false)
    setSuitez4(false)
  };

  //--------------------5---------------
  const handleNextStep5 = () => {
    const a = Math.floor(dividend / 10000);
    const m = Math.floor((dividend % 10000) / 1000);
    const c = Math.floor((dividend % 1000) / 100);
    const d = Math.floor((dividend % 100) / 10);
    const u = dividend % 10;

    switch (step) {
      case 0:

        if (a < divisor) {
          setResult(`le chiffre ${a} est inferieur a ${divisor} passer au milliers`)
          setStep(1)
        }
        else {
          setResult(`le chiffre ${a} est divisible par ${divisor} ! `)
          setStep(20)
        }

        break;
      case 1:
        const deuxPremiersChiffres = Math.floor(dividend / 1000);
        if (deuxPremiersChiffres < divisor) {
          setResult(`les deux premiers Chiffres ${deuxPremiersChiffres} sont  inferieur a ${divisor} passer au centaines`)
          setStep(2)
        } else {
          setResult(`voila ${deuxPremiersChiffres} est divisible par ${divisor} !Alors combien de fois existe ${divisor} dans ${deuxPremiersChiffres}`)
          setStep(13)
        }
        break;
      case 2:
        const TroisPremiersChiffres = Math.floor(dividend / 100);
        if (TroisPremiersChiffres < divisor) {
          setResult(` ${TroisPremiersChiffres} < ${divisor} ==>passer au dizaines `)
          setStep(3)
        }
        else {
          setResult(`voila ${TroisPremiersChiffres} est divisible par ${divisor} !Alors combien de fois existe ${TroisPremiersChiffres} dans  ${divisor}`)
          setStep(5)
        }

        break;

      case 3:
        const QuatrePremiersChiffres = Math.floor(dividend / 10);
        if (QuatrePremiersChiffres < divisor) {
          setResult(` ${QuatrePremiersChiffres} < ${divisor} passer au unities  `)
          setStep(4)
        } else {
          setResult(` ${QuatrePremiersChiffres} est divisible par ${divisor} ! `)
          setStep(10)

        }

        break;
      case 4:
        setZ(true)
        setResult(`c est la derniere étape!Diviser ${dividend} par ${divisor}🥳`);
        const q = Math.floor(dividend / divisor)
        const valInter1 = q * divisor
        const r1 = dividend - valInter1

        setQuotient(q)
        setValeurIntermidiare(valInter1)
        setRemainder(r1)

        setStep(30)

        break;

      case 5:
        // initalisation apres trois/5
        setZ(true)
        const TroisPrChiffres = Math.floor(dividend / 100);

        setResult(`Combien de fois existe ${TroisPrChiffres} dans  ${divisor}`)
        const q3 = Math.floor(TroisPrChiffres / divisor)
        const valintTC = q3 * divisor
        const rc3 = TroisPrChiffres - valintTC
        setQuotient(q3)
        setValeurIntermidiare(valintTC)
        setRemainder(rc3)
        setStep(6)
        break;
      case 6:
        setResult(`Passons maintenat au dizaines  ${d}`)
        setRemainder(remainder + "" + d)
        setStep(7)

        break;
      case 7:
        setSuiteZ1(true)
        const int1 = parseInt(remainder)
        setRemainder(int1)
        setResult(`Combien de fois il y a ${divisor} dans ${remainder}`)

        const q_d = Math.floor(remainder / divisor)
        const valint_d = q_d * divisor
        const r_d2 = remainder - valint_d
        setQuotient(quotient + "" + q_d)
        setValeurIntermidiare2(valint_d)
        setRemainder2(r_d2)

        setStep(8)

        break;
      case 8:
        setResult(`Passons maintenat au unities  ${u}`)
        setRemainder2(remainder2 + "" + u)
        setStep(9)
        break;
      case 9:
        setSuiteZ2(true)
        const int2 = parseInt(remainder)
        setRemainder2(int2)
        setResult(`Combien de fois il y a ${divisor} dans ${remainder2}`)

        const q_u = Math.floor(remainder2 / divisor)
        const valint_u = q_u * divisor
        const r_u2 = remainder2 - valint_u
        setQuotient(quotient + "" + q_u)
        setValeurIntermidiare3(valint_u)
        setRemainder3(r_u2)
        setStep(30)
        break;
      case 10:
        setZ(true)
        const QuatrePChiffres = Math.floor(dividend / 10);
        const q4 = Math.floor(QuatrePChiffres / divisor)
        const val4 = q4 * divisor
        const r4 = QuatrePChiffres - val4

        setQuotient(q4)
        setValeurIntermidiare(val4)
        setRemainder(r4)
        setStep(11)

        break;
      case 11:
        setResult(`Passons maintenat au dernier chiffre ${u}`)
        setRemainder(remainder + "" + u)
        setStep(12)
        break;
      case 12:
        setSuiteZ1(true)

        const int3 = parseInt(remainder)
        setRemainder(int3)

        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder}`)


        const q5 = Math.floor(remainder / divisor)
        const val5 = q5 * divisor
        const r5 = remainder - val5

        setQuotient(quotient + "" + q5)
        setValeurIntermidiare2(val5)
        setRemainder2(r5)
        setStep(30)
        break;
      case 13:
        const deuxPChiffres = Math.floor(dividend / 1000);
        setZ(true)
        setResult(`Combien de fois il ya le nombre ${divisor}dans ${deuxPChiffres}`)


        const q6 = Math.floor(deuxPChiffres / divisor)
        const val6 = q6 * divisor
        const r6 = deuxPChiffres - val6

        setQuotient(q6)
        setValeurIntermidiare(val6)
        setRemainder(r6)
        setStep(14)

        break;
      case 14:
        setResult(`Passons maintenat au chiffre des centaines ${c}`)
        setRemainder(remainder + "" + c)
        setStep(15)
        break;
      case 15:
        setSuiteZ1(true)
        const int4 = parseInt(remainder)
        setRemainder(int4)
        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder}`)
        const q7 = Math.floor(remainder / divisor)
        const val7 = q7 * divisor
        const r7 = remainder - val7

        setQuotient(quotient + "" + q7)
        setValeurIntermidiare2(val7)
        setRemainder2(r7)
        setStep(16)
        break;
      case 16:
        setResult(`Passons maintenat au chiffre des dizaines ${d}`)
        setRemainder2(remainder2 + "" + d)
        setStep(17)
        break;
      case 17:
        setSuiteZ2(true)
        const int5 = parseInt(remainder2)
        setRemainder2(int5)
        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder2}`)
        const q8 = Math.floor(remainder2 / divisor)
        const val8 = q8 * divisor
        const r8 = remainder2 - val8

        setQuotient(quotient + "" + q8)
        setValeurIntermidiare3(val8)
        setRemainder3(r8)
        setStep(18)
        break;
      case 18:
        setResult(`et voila la deniere étape 🥳Passons maintenat au chiffre des unities ${d}`)
        setRemainder3(remainder3 + "" + u)
        setStep(19)
        break;

      case 19:

        setSuiteZ3(true)
        const int6 = parseInt(remainder3)
        setRemainder3(int6)
        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder3}`)
        const q9 = Math.floor(remainder3 / divisor)
        const val9 = q9 * divisor
        const r9 = remainder3 - val9

        setQuotient(quotient + "" + q9)
        setValeurIntermidiare4(val9)
        setRemainder4(r9)
        setStep(30)
        break;
      case 20:
        setZ(true)
        // a partir de cette atape on va faire la pire des cas (tous les chiffres sont divisible par le divisuer)
        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${a}`)
        const q10 = Math.floor(a / divisor)
        const val10 = q10 * divisor
        const r10 = a - val10

        setQuotient(q10)
        setValeurIntermidiare(val10)
        setRemainder(r10)
        setStep(21)
        break;
      case 21:
        setResult(`Passons maintenat au chiffre des Milliers ${m}`)
        setRemainder(remainder + "" + m)
        setStep(22)
        break;
      case 22:
        setSuiteZ1(true)
        const int8 = parseInt(remainder)
        setRemainder(int8)

        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder}`)
        const q11 = Math.floor(remainder / divisor)
        const val11 = q11 * divisor
        const r11 = remainder - val11

        setQuotient(quotient + "" + q11)
        setValeurIntermidiare2(val11)
        setRemainder2(r11)
        setStep(23)
        break;
      case 23:
        setResult(`Passons maintenat au chiffre des centaines  ${c}`)
        setRemainder2(remainder2 + "" + c)
        setStep(24)
        break;
      case 24:
        setSuiteZ2(true)
        const int9 = parseInt(remainder2)
        setRemainder2(int9)

        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder2}`)
        const q12 = Math.floor(remainder2 / divisor)
        const val112 = q12 * divisor
        const r12 = remainder2 - val112

        setQuotient(quotient + "" + q12)
        setValeurIntermidiare3(val112)
        setRemainder3(r12)
        setStep(25)
        break;

        case 25:
        setResult(`Passons maintenat au chiffre des dizaines  ${d}`)
        setRemainder3(remainder3 + "" + d)
        setStep(26)
        break;
        case 26:
        setSuiteZ3(true)
        const int10 = parseInt(remainder3)
        setRemainder3(int10)

        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder3}`)
        const q13 = Math.floor(remainder3 / divisor)
        const val13 = q13 * divisor
        const r13 = remainder3 - val13

        setQuotient(quotient + "" + q13)
        setValeurIntermidiare4(val13)
        setRemainder4(r13)
        setStep(27)
        break;
        case 27:
        setResult(`Passons maintenat au chiffre des unities  ${u} 🥳`)
        setRemainder4(remainder4 + "" + u)
        setStep(28)
        break;
        case 28:
        setSuitez4(true)
        const int11 = parseInt(remainder4)
        setRemainder4(int11)

        setResult(`Combien de fois il ya le nombre ${divisor}dans  ${remainder4}`)

        const q14 = Math.floor(remainder4 / divisor)
        const val14 = q14 * divisor
        const r14 = remainder4 - val14

        setQuotient(quotient + "" + q14)
        setValeurIntermidiare5(val14)
        setRemainder5(r14)
        setStep(29)
        break;
      default:
        setResult('🥳🥳voila le résultat finale🥳🥳');

        break;
    }
  }




  //--------------------2---------------


  const handleNextStep2 = () => {


    switch (step) {
      case 0:
        if (Math.floor(dividend / 10) < divisor) {
          setResult(
            <div>
              Les dizaines de <span style={{ color: 'blue' }}>{dividend}</span> , ( <span style={{ color: 'blue' }}>{Math.floor(dividend / 10)}</span> ) sont inférieures à {divisor}. Passons aux unités.
            </div>
          );

          setStep(1);
        } else {
          setResult(<div>🧐 Puisque <span style={{ color: 'blue' }}> {Math.floor(dividend / 10)}</span>est superieur a <span style={{ color: 'blue' }}>{divisor}</span> ,alors  Combien de <span style={{ color: 'blue' }}>{divisor}</span>  dans <span style={{ color: 'blue' }}>{Math.floor(dividend / 10)}</span>
            ?</div>);
          setStep(3);
        }
        break;
      case 1:
        setResult(
          <div>
            🧐Combien de fois il y a le nombre <span style={{ color: 'blue' }}>{divisor}</span>" dans <span style={{ color: 'blue' }}>{dividend}</span> ?
          </div>
        );

        setStep(2);
        break;
      case 2:
        const q = Math.floor(dividend / divisor);
        const rr = dividend % divisor;
        const ValeurIntermidiare = q * divisor
        setQuotient(q)
        setRemainder(rr)
        setValeurIntermidiare(ValeurIntermidiare)
        setX(true)
        setResult(` $ ${rr}`);
        setResult(
          <div>
            Voilà le résultat est<span style={{ color: 'blue' }}>{q}</span>" ,et le reste <span style={{ color: 'blue' }}>{rr} </span>
          </div>
        );
        setStep(7);
        break;
      case 3:
        const dizaines = Math.floor(dividend / 10);
        const quotient1 = Math.floor(dizaines / divisor)
        const ValeurIntermidiare1 = quotient1 * divisor
        const r = dizaines - ValeurIntermidiare1;


        setQuotient(quotient1)
        setRemainder(r)
        setValeurIntermidiare(ValeurIntermidiare1)
        setX(true)
        setResult(
          <div>
            <span style={{ color: 'blue' }}>{divisor}</span>existe <span style={{ color: 'blue' }}>{quotient1} </span> fois dans <span style={{ color: 'blue' }}>{dizaines} </span>

          </div>
        );

        setStep(4);
        break;
      case 4:

        setResult(
          <div>
            passons au  <span style={{ color: 'blue' }}>{dividend % 10}</span>
          </div>
        );

        setvertcalDSmallDiv2(true)
        setStep(5);
        break;
      case 5:

        const ch2 = dividend % 10
        const c = remainder + "" + ch2
        const e = parseInt(c)

        setResult(
          <div>
            🧐Combien de fois il y a le nombre <span style={{ color: 'blue' }}>{divisor}</span>
            <span>dans</span>
            <span style={{ color: 'blue' }}>{e}</span>
          </div>
        );


        setRemainder(e)

        setStep(6);
        break;
      case 6:
        setSuiteX(true)
        const suiteQ = Math.floor(remainder / divisor)
        const vi = suiteQ * divisor
        const r2 = remainder - vi

        setValeurIntermidiare2(vi)
        setRemainder2(r2)

        const QuotientF = quotient + "" + suiteQ
        const e2 = parseInt(QuotientF)

        setQuotient(e2)
        setStep(7);

        break;
      default:
        setResult('🥳🥳voila le résultat finale🥳🥳');

        break;
    }
  };

  //-----------------------4-------------------------
  const handleNextStep4Digits = () => {

    const m = Math.floor(dividend / 1000);
    const c = Math.floor((dividend % 1000) / 100);
    const d = Math.floor((dividend % 100) / 10);
    const u = dividend % 10;

    switch (step) {
      case 0:
        if (m < divisor) {
          setResult(`Puisque les milliers sont inferieur au diviseur passer au centaines `)

          setStep(1);
        } else {
          setResult(
            <div>
              🧐 Puisque <span style={{ color: 'blue' }}>{m}</span> est supérieur à <span style={{ color: 'blue' }}>{divisor}</span>, alors combien de <span style={{ color: 'blue' }}>{divisor}</span> dans <span style={{ color: 'blue' }}>{m}</span> ?
            </div>
          );
          setStep(3);
        }
        break;
      case 1:
        const m_c = Math.floor(dividend / 100)
        if (m_c < divisor) {

          setResult(`${m_c} < ${divisor} donc passer aux dizaines `)
          setStep(2);
        }
        else {
          setResult(
            <div>
              Puisque {m_c} est divisible par   {divisor}  🧐Combien de <span style={{ color: 'blue' }}>{divisor}</span> dans <span style={{ color: 'blue' }}>({m_c}) </span> ?
            </div>
          );
          setStep(8);
        }

        break;
      case 2:
        const m_c_d = Math.floor(dividend / 10)
        if (m_c_d < divisor) {
          setResult(`${m_c_d} < ${divisor} donc passer aux unities `)
          setStep(10)
        }
        else {
          setResult(
            <div>
              🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{m_c_d}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
            </div>
          );

          setStep(4)
        }

        break;
      case 3:
        setResult("divizez le chiffre des milliers par le diviseur ")

        setZ(true)
        const q = Math.floor(m / divisor)
        const valInter = q * divisor
        const r = m - valInter
        setQuotient(q)
        setValeurIntermidiare(valInter)
        setRemainder(r)
        setStep(14);
        break;
      case 4:
        setZ(true)
        const _d = Math.floor(dividend / 10)
        const q1 = Math.floor(_d / divisor)
        const VI1 = q1 * divisor
        const r1 = _d - VI1
        setQuotient(q1)
        setRemainder(r1)
        setValeurIntermidiare(VI1)
        setStep(5)
        break;
      case 5:


        setResult(
          <div>
            Passons maintenant au unities   <span style={{ color: 'blue' }}>{u}</span>
          </div>
        );

        const newR = remainder + "" + u;

        setRemainder(newR)

        setStep(6);
        break;
      case 6:
        const e = parseInt(remainder)
        setResult(
          <div>
            🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{e}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
          </div>
        );

        setStep(7)

        break;
      case 7:
        setSuiteZ1(true);
        const qZ1 = Math.floor(remainder / divisor)
        const VIZ1 = qZ1 * divisor
        const rZ1 = remainder - VIZ1
        setQuotient(quotient + "" + qZ1)
        setRemainder2(rZ1)
        setValeurIntermidiare2(VIZ1)
        setStep(20)
        break;
      case 8:
        setZ(true)

        const mcZ = Math.floor(dividend / 100)
        const QZ_mc = Math.floor(mcZ / divisor)
        const VI_mc = divisor * QZ_mc
        const R_mc = mcZ - VI_mc
        setResult(` divizez ${mcZ} par ${divisor} `)

        setQuotient(QZ_mc)
        setRemainder(R_mc)
        setValeurIntermidiare(VI_mc)
        setStep(9)
        break;
      case 9:
        setResult(` Passons  aux dizaines `)
        setRemainder(remainder + "" + d)
        setStep(11)

        break;
      case 10:

        setResult("Voila vous etes dans la derniere étape  ")

        setZ(true)
        const qf = Math.floor(dividend / divisor)
        const valInterf = qf * divisor
        const rf = dividend - valInterf
        setQuotient(qf)
        setValeurIntermidiare(valInterf)
        setRemainder(rf)
        setStep(20);

        break;


      case 11:
        const eZ1 = parseInt(remainder)
        setRemainder(eZ1)

        setSuiteZ1(true)
        setResult(
          <div>
            🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{remainder}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
          </div>
        );

        const q_d = Math.floor(remainder / divisor)
        const VI_d = q_d * divisor
        const r_d = remainder - VI_d
        setQuotient(quotient + "" + q_d)
        setValeurIntermidiare2(VI_d)
        setRemainder2(r_d)

        setStep(12)
        break;
      case 12:
        setResult("Passons au unities")
        setRemainder2(remainder2 + "" + u)

        setStep(13)
        break;

      case 13:
        setSuiteZ2(true)
        const h = parseInt(remainder2)
        setResult(
          <div>
            🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{h}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
          </div>
        );
        setRemainder2(h)
        const q_Z3 = Math.floor(remainder2 / divisor)
        const VI_Z3 = q_Z3 * divisor
        const r_Z3 = remainder2 - VI_Z3


        setRemainder3(r_Z3)
        setQuotient(quotient + "" + q_Z3)
        setValeurIntermidiare3(VI_Z3)
        setStep(20)

        break;
      case 14:
        setResult("Passer au  chiffre des centaines  ")
        setRemainder(remainder + "" + c)
        setStep(15)


        break;
      case 15:

        setSuiteZ1(true)
        const int1 = parseInt(remainder)
        setRemainder(int1)

        setResult(
          <div>
            🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{remainder}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
          </div>
        );

        const qc = Math.floor(remainder / divisor)
        const valIc = qc * divisor
        const rc = remainder - valIc
        setQuotient(quotient + "" + qc)
        setValeurIntermidiare2(valIc)
        setRemainder2(rc)
        setStep(16);
        break;

      case 16:
        setResult(`allons passer au chiffres des dizaines ${d}`);
        setRemainder2(remainder2 + "" + d)
        setStep(17)
        break;
      case 17:


        setSuiteZ2(true)
        const int2 = parseInt(remainder2)
        setRemainder2(int2)

        setResult(
          <div>
            🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{remainder2}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
          </div>
        );

        const qd = Math.floor(remainder2 / divisor)
        const valId = qd * divisor
        const rd = remainder2 - valId
        setQuotient(quotient + "" + qd)
        setValeurIntermidiare3(valId)
        setRemainder3(rd)
        setStep(18)
        break;
      case 18:

        setResult("et voila la derniere étape🥳 , passons au unities ")
        setRemainder3(remainder3 + "" + u)
        setStep(19)

        break;
      case 19:

        setSuiteZ3(true)
        const int3 = parseInt(remainder3)
        setRemainder2(int3)

        setResult(
          <div>
            🧐 Combien de fois le nombre <span style={{ color: 'blue' }}>{remainder3}</span> figure dans <span style={{ color: 'blue' }}>{divisor}</span> ?
          </div>
        );

        const qu = Math.floor(remainder3 / divisor)
        const valIu = qu * divisor
        const ru = remainder3 - valIu
        setQuotient(quotient + "" + qu)
        setValeurIntermidiare4(valIu)
        setRemainder4(ru)
        setStep(20)
        break;
      default:
        setResult('🥳🥳 Voilà le résultat final 🥳🥳');
        break;
    }
  };

  //----------------3-------------
  const handleNextStep3 = () => {
    const dizaines = Math.floor((dividend % 100) / 10);
    const centaines = Math.floor(dividend / 100)
    const centaines_dizaine = Math.floor(dividend / 10)



    console.log(centaines)
    console.log(centaines_dizaine)

    //const quotient = Math.floor(dividend / divisor);
    //const remainder = dividend % divisor;
    switch (step) {

      case 0:
        if (centaines < divisor) {
          setResult(
            <div>
              Le nombre de centaines (<span style={{ color: 'blue' }}>{centaines}</span>) de {dividend} est inférieur à <span style={{ color: 'blue' }}>{divisor}</span>. Passons au nombre de dizaines.
            </div>
          );
          setStep(1);
        }
        else {
          setResult(
            <div>
              🧐Combien de <span style={{ color: 'blue' }}>{divisor}</span> dans <span style={{ color: 'blue' }}>({centaines}) </span> ?
            </div>
          );
          setStep(3);
        }
        break;
      case 1:

        if (centaines_dizaine < divisor) {
          setResult(
            <div>
              Le nombre de centaines et dizaines <span style={{ color: 'blue' }}>{centaines_dizaine}</span> est inférieur à <span style={{ color: 'blue' }}>({divisor}) </span>
              . Comparons le nombre de centaines et dizaines  et unités avec <span style={{ color: 'blue' }}>{divisor}</span>
            </div>
          );


          setResult(` (${centaines_dizaine}) de ${dividend}  ${divisor}`);
          setStep(2);
        } else {
          setResult(
            <div>
              🧐Combien de <span style={{ color: 'blue' }}>{divisor}</span> dans (<span style={{ color: 'blue' }}>{centaines_dizaine}</span>) ?
            </div>
          );

          setStep(12);
        }
        break;
      case 2:
        setY(true)

        const q = Math.floor(dividend / divisor);
        const r = dividend % divisor;
        const vi = q * divisor
        setRemainder(r)
        setQuotient(q)
        setValeurIntermidiare(vi)


        setResult(
          <div>
            Le résultat est <span style={{ color: 'blue' }}>{q}</span>, reste <span style={{ color: 'blue' }}>{r}</span>
          </div>
        );

        setStep(20);

        break;
      case 3:
        const qc = Math.floor(centaines / divisor)
        const vic = qc * divisor
        const rc = centaines - vic
        setY(true)
        setRemainder(rc)
        setValeurIntermidiare(vic)
        setQuotient(qc)
        setStep(6)
        break;
      case 4:

        setResult(
          <div>
            combien de divisor <span style={{ color: 'blue' }}>{divisor}</span>, dans  le reste <span style={{ color: 'blue' }}>{remainder}</span>
          </div>
        );

        setStep(5)
        break;
      case 5:
        setResult(
          <div>
            Le résultat est <span style={{ color: 'blue' }}>{quotient}</span>, reste <span style={{ color: 'red' }}>{remainder}</span>
          </div>
        );

        break;
      case 6:
        setResult(
          <div>
            Passer au dizaines <span style={{ color: 'blue' }}>{dizaines}</span>
          </div>
        );

        const newV = remainder + "" + dizaines
        setRemainder(newV)
        setStep(7);
        break;
      case 7:
        setResult(
          <div>
            Combien de <span style={{ color: 'blue' }}>{divisor}</span> dans <span style={{ color: 'blue' }}>({remainder})</span>
          </div>
        );


        setStep(8);
        break;
      case (8):
        const h = parseInt(remainder)

        if (h > divisor) {
          setResult(
            <div>
              piusque  <span style={{ color: 'blue' }}>{remainder}</span> superieur à  <span style={{ color: 'blue' }}>({divisor})</span>on fait la division
            </div>
          );


          setSuiteY1(true)
          const q2 = Math.floor(remainder / divisor)
          const vi2 = q2 * divisor
          const rm2 = remainder - vi2
          setRemainder2(rm2)
          setValeurIntermidiare2(vi2)
          const newQ = quotient + "" + q2
          setQuotient(newQ)
          setStep(9)
        }
        break;
      case 9:

        setResult(
          <div>
            🤓voila la derniere étape il suffit de passer au chiffre des unités   <span style={{ color: 'blue' }}> ({unites})</span>
          </div>
        );



        const newRem = remainder2 + "" + unites
        setRemainder2(newRem)
        console.log(remainder2)
        setStep(10)
        break;
      case 10:
        setResult(
          <div>
            🤓Combien de   <span style={{ color: 'blue' }}> ({divisor})</span> dans <span style={{ color: 'blue' }}> ({remainder2})</span>
          </div>
        );

        setStep(11)
        break;
      case 11:

        setSuiteY2(true)



        const nbF2 = Math.floor(remainder2 / divisor)
        const vi3 = nbF2 * divisor
        const r2 = remainder2 - vi3

        setQuotient(quotient + "" + nbF2)
        setValeurIntermidiare3(vi3)
        setRemainder3(r2)


        setStep(20)
        break;
      case 12:

        const nbFc_d = Math.floor(centaines_dizaine / divisor)
        const viC_D = nbFc_d * divisor
        const rC_d = centaines_dizaine - viC_D


        setResult(
          <div>
            il y a    <span style={{ color: 'blue' }}> ({nbFc_d})</span>  fois le nombre  <span style={{ color: 'blue' }}> ({divisor})</span>dans <span style={{ color: 'blue' }}> ({centaines_dizaine})</span>
          </div>
        );

        setY(true)
        setRemainder(rC_d)
        setValeurIntermidiare(viC_D)
        setQuotient(nbFc_d)
        setStep(13)
        break;
      case 13:
        setResult(
          <div>
            🤓voila la derniere étape il suffit de passer au chiffre des unités   <span style={{ color: 'blue' }}> ({unites})</span>
          </div>
        );
        const newwrem = remainder + "" + unites

        setRemainder(newwrem)
        setStep(14)
        break;

      case 14:
        const h1 = parseInt(remainder)
        setRemainder(h1)


        if (h1 > divisor) {



          setResult(
            <div>
              Puisque  <span style={{ color: 'blue' }}> ({h1})</span> superieur a <span style={{ color: 'blue' }}> ({divisor})</span>Combien de  <span style={{ color: 'blue' }}>{divisor}</span> dans <span style={{ color: 'blue' }}>{remainder}</span>
            </div>
          );

          setStep(15)
        }
        else {
          setResult(`on passe au unities`)
          setSuiteY1(true)

          const nbFs = Math.floor(remainder / divisor)
          const vi4 = nbFs * divisor
          const restereste = remainder - vi4

          setQuotient(quotient + "" + nbFs)
          setValeurIntermidiare2(vi4)
          setRemainder2(restereste)


          setStep(20)
        }
        break;

      case 15:
        const nbF = Math.floor(remainder / divisor)
        const vi_vi = nbF * divisor
        const resterem = remainder - vi_vi

        setSuiteY1(true)

        setRemainder2(resterem)
        setValeurIntermidiare2(vi_vi)
        setQuotient(quotient + "" + nbF)
        setStep(16)
        break;
      default:
        setResult('🥳🥳Voila le résultat finale🥳🥳');

        break;
    }
  }

  // to do function 
  //cette fonction fait appel a tous les fonction 1,2,3,4      
  const toDo = () => {

    const longueurDivD = getLongueurEntier(dividend);
    const longueurDivS = getLongueurEntier(divisor);


    const milliers = Math.floor(dividend / 1000);
    const centaines = Math.floor((dividend % 1000) / 100);
    const dizaines = Math.floor((dividend % 100) / 10);
    const unites = dividend % 10;

    /* if (dividend < divisor) {
       setMessageSuivant("")
       AlertInValide("le dividende doit etre superieur au diviseur")
     }
 */


    if (longueurDivD == 1) {

      const nbFoix = dividend / divisor
      const partieEntiere = Math.floor(nbFoix)
      const valInt = partieEntiere * divisor
      const reste = dividend - valInt


      switch (step) {

        case 0:
          setResult(
            <div>
              <span>🧐Combien de fois il y a le nombre "</span>
              <span style={{ color: 'blue' }}>{divisor}</span>
              <span > dans </span>
              <span style={{ color: 'blue' }}>{dividend}</span>
              <span > ?</span>
            </div>
          )

          setStep(1)


          break;
        case 1:
          setResult(
            <div>
              <span>il y a </span>
              <span style={{ color: 'blue' }}>{partieEntiere}</span>
              <span> fois le nombre </span>
              <span style={{ color: 'blue' }}>({divisor})</span>
              <span> dans </span>
              <span style={{ color: 'blue' }}>{dividend}</span>
            </div>
          );
          setX(true)

          setQuotient(partieEntiere)
          setValeurIntermidiare(valInt)
          setRemainder(reste)
          setStep(3)

          break;
        case 3:
          if (reste < divisor) {

            setResult(
              <div>
                <span>🥳puisque </span>
                <span style={{ color: 'blue' }}>({reste})</span>
                <span>&lt;</span>
                <span style={{ color: 'blue' }}>({divisor})</span>
                <span> on s'arrête</span>
              </div>
            );
            setStep(4)
          }
          break;
        default:
          setResult('🥳🥳Voila le résultat finale🥳🥳');

          break;
      }
    }

    if (longueurDivD == 2) {

      handleNextStep2()
    }
    if (longueurDivD == 3) {


      handleNextStep3()
    }
    if (longueurDivD == 4) {


      handleNextStep4Digits()
    }

    if (longueurDivD == 5) {


      handleNextStep5()
    }

  }

  //_________________________________________________________


  //fonction mere
  const resoudre = () => {
   const int_divident=parseInt(dividend)
   const int_divisor=parseInt(divisor)
  
    if (dividend == "" | divisor == "") {


      setResult(
        <div>

          <span style={{ color: 'red' }}> Saisir le dividend et le diviseur correctement</span>

        </div>
      );

    }
    else {
      if (int_divident<int_divisor){
        setResult(
          <div>
  
            <span style={{ color: 'red' }}>Le dividende doit etre superieur au diviseur</span>
  
          </div>
        );
  
      }
      else {
      if (divisor == 0) {
        Diviseur0()
        setMessageSuivant("")
      }
      else {
        if (dividend == divisor) {
          egaux()

        }
        else {
          if (dividend == 0) {
            DivDNull()

          }



          else {
            setMessageSuivant("")
            toDo()

          }
        }
        }
      }
    }

  }





  return (




    <div>


      <AnimatedCard style={cardAnimation}>

        {result}

      </AnimatedCard>

      <br>
      </br>
      <br></br>
      <div>


        <Card>


          <TopRow>


            <Input
              value={dividend}
              onChange={e => setDividend(e.target.value)}
              placeholder="Dividende"
            />

            <Input
              value={divisor}
              onChange={e => setDivisor(e.target.value)}
              placeholder="Diviseur"
            />



          </TopRow>


          <TopRow>

            {X && <div>

              <h1>-</h1>

              <TransitionComponent item={ValeurIntermidiare} delay={400}>
                {item => (

                  <Input2 value={item} readOnly />
                )}
              </TransitionComponent>

              <div></div>
              <Input2 value="_______________" readOnly />
              <div></div>
              <div>


                <TransitionComponent item={remainder} delay={500}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>


              </div>

              {suiteX && <div>

                <h1>-</h1>

                <TransitionComponent item={ValeurIntermidiare2} delay={500}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>


                <div></div>
                <Input2 value="_______________" readOnly />
                <div></div>
                <div>
                  <TransitionComponent item={remainder2} delay={0}>
                    {item => (

                      <Input2 value={item} readOnly color={resteColor} />
                    )}
                  </TransitionComponent>
                </div>
              </div>
              }

            </div>}



            {Y && <div>
              <h1>-</h1>
              <TransitionComponent item={ValeurIntermidiare} delay={0}>
                {item => (

                  <Input2 value={item} readOnly />
                )}
              </TransitionComponent>

              <div></div>
              <Input2 value="______________" readOnly />
              <div></div>
              <div>
                <TransitionComponent item={remainder} delay={0}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>
              </div>
              {suiteY1 && <div>

                <h1>-</h1>
                <TransitionComponent item={ValeurIntermidiare2} delay={0}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>

                <div></div>
                <Input2 value="______________" readOnly />
                <div></div>


                <TransitionComponent item={remainder2} delay={10}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>

              </div>}
              {suiteY2 && <div>

                <h1>-</h1>
                <TransitionComponent item={ValeurIntermidiare3} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>

                <div></div>
                <Input2 value="_______" readOnly />
                <div></div>
                <TransitionComponent item={remainder3} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>

              </div>}


            </div>}



            {Z && <div>
              <h1>-</h1>
              <TransitionComponent item={ValeurIntermidiare} delay={0}>
                {item => (

                  <Input2 value={item} readOnly />
                )}
              </TransitionComponent>

              <div></div>
              <Input2 value="______________" readOnly />
              <div></div>
              <div>
                <TransitionComponent item={remainder} delay={0}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>
              </div>
              {suiteZ1 && <div>

                <h1>-</h1>
                <TransitionComponent item={ValeurIntermidiare2} delay={0}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>

                <div></div>
                <Input2 value="______________" readOnly />
                <div></div>


                <TransitionComponent item={remainder2} delay={10}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>

              </div>}
              {suiteZ2 && <div>

                <h1>-</h1>
                <TransitionComponent item={ValeurIntermidiare3} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>

                <div></div>
                <Input2 value="_______" readOnly />
                <div></div>
                <TransitionComponent item={remainder3} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>

              </div>}
              {suiteZ3 && <div>

                <h1>-</h1>
                <TransitionComponent item={ValeurIntermidiare4} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>

                <div></div>
                <Input2 value="_______" readOnly />
                <div></div>
                <TransitionComponent item={remainder4} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>

              </div>}
              {suiteZ4 && <div>

                <h1>-</h1>
                <TransitionComponent item={ValeurIntermidiare5} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly />
                  )}
                </TransitionComponent>

                <div></div>
                <Input2 value="_______" readOnly />
                <div></div>
                <TransitionComponent item={remainder5} delay={20}>
                  {item => (

                    <Input2 value={item} readOnly color={resteColor} />
                  )}
                </TransitionComponent>

              </div>}

            </div>

            }






            <VerticalDivider />

            <div>
              {X && quotient !== null && (
                <TransitionComponent item={quotient} delay={0}>
                  {item => (

                    <Input2 value={item} readOnly color={quotientColor} />
                  )}
                </TransitionComponent>
              )}
            </div>


            {Y && quotient !== null && (
              <TransitionComponent item={quotient} delay={0}>
                {item => (

                  <Input2 value={item} readOnly color={quotientColor} />
                )}
              </TransitionComponent>
            )}

            <div>
              {Z && quotient !== null && (
                <TransitionComponent item={quotient} delay={0}>
                  {item => (

                    <Input2 value={item} readOnly color={quotientColor} />
                  )}
                </TransitionComponent>
              )}
            </div>

            <div>

              <br></br>
              <br></br>
            </div>


          </TopRow>


          <QuotientContainer>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
              {resoudreMarche && <Button variant='contained' color='primary' style={{ marginLeft: 0 }} onClick={resoudre}>
                Résoudre
              </Button>
              }
              <div>
                <div>
                  <br></br>
                  <br></br>

                </div>
              </div>
            </div>


            <br></br>

            <Button onClick={Reset}>Reset</Button>
            <br></br>
            <br></br>

          </QuotientContainer>
        </Card>
      </div>


    </div >

  );
}

export default DivisionComponent;