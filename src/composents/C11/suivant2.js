import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Styles/MajorStyles';
import { Button } from '@mui/material';
import { useSpring, animated } from 'react-spring'; 
import './styles.css'
import { Link } from 'react-router-dom';
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

  const [etape, setEtape] = useState(1);
  const [EtapeDansEtape, setEtapeDansEtape] = useState(1)
  const [resoudreMarche, setResoudreMarche] = useState(true)




  const [alertMessage, setAlertMessage] = useState("")
  const [alertMessageValide, setAlertMessageValide] = useState("")

  const [currentCase, setCurrentCase] = useState("")
  const [X, setX] = useState(false)
  const [Y, setY] = useState(false)
  const [V, setV] = useState(false)

  //div Y
  const [diz_nbfois, setDiz_nbFois] = useState("")
  const [diz_VI, setDisVI] = useState("")
  const [dizReste, setDizReste] = useState("")

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

  const [isFading, setIsFading] = useState(false);

  const [quotientColor, setQuotientColor] = useState("blue");
  const [resteColor, setResteColor] = useState("red");
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

  const closeAlert = () => {
    setAlertMessage("");
    setAlertMessageValide("");// Réinitialise le message d'alerte
  };

  //
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
  const AlertInValide = (X) => {

    setAlertMessage(X)
    setTimeout(() => {
      setAlertMessage("");
    }, 2000);
  }
  const AlertValide = (X) => {

    setAlertMessageValide(X)
    setTimeout(() => {
      setAlertMessage("");
    }, 200);
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
    setMessageSuivant("donner deux entiers")
    setDividend("")
    setDivisor("")
    setQuotient("")
    setRemainder("")
    setValeurIntermidiare("")
    setX(false)
    setY(false)
    setV(false)


    setAlertMessageValide("")
    setStep(0)
    setResult("donner deux entiers")
    setRemainder2("")
    setValeurIntermidiare2("")
    setSuiteX(false)
    setSuiteY1(false)
    setSuiteY2(false)
  };

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


  //----------------3--------------
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

          const nbFs=Math.floor(remainder/divisor)
          const vi4=nbFs*divisor
          const restereste=remainder-vi4

          setQuotient(quotient+""+nbFs)
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

        break ;
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

  }

  const Suivant2 = () => {
    console.log("Suivant2 ____")

    setEtapeDansEtape(EtapeDansEtape + 1)
    console.log("apres +1", EtapeDansEtape)
  }


  //_________________________________________________________


  //fonction mere
  const resoudre = () => {
    setMessageSuivant("")
    console.log(dividend)
    console.log(divisor)



    if (dividend == "" | divisor == "") {

    
     setResult(
      <div>
       
        <span style={{ color: 'red' }}> Saisir le dividend et le diviseur correctement</span>
      
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





  return (

   


    <div>


       <AnimatedCard style={cardAnimation}>
        
          {result}

        </AnimatedCard>

      {alertMessage && (
        <AlertMessageInvalide onClick={closeAlert}>
          {alertMessage}

        </AlertMessageInvalide>
      )}
      {alertMessageValide && (
        <AlertMessageValide onClick={closeAlert}>
          {alertMessageValide}

        </AlertMessageValide>
      )}


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
              <Input2 value={ValeurIntermidiare} readOnly />
              <div></div>
              <Input2 value="_______________" readOnly />
              <div></div>
              <Input2 value={remainder} readOnly  color={resteColor}/>
              {suiteX && <div>

                <h1>-</h1>
                <Input2 value={ValeurIntermidiare2} readOnly />
                <div></div>
                <Input2 value="_______________" readOnly />
                <div></div>
                <Input2 value={remainder2} readOnly color={resteColor} />

              </div>}

            </div>}



            {Y && <div>
              <h1>-</h1>
              <Input2 value={ValeurIntermidiare} readOnly />
              <div></div>
              <Input2 value="______________" readOnly />
              <div></div>
              <Input2 value={remainder} readOnly color={resteColor}/>
              {suiteY1 && <div>

                <h1>-</h1>
                <Input2 value={ValeurIntermidiare2} readOnly />
                <div></div>
                <Input2 value="______________" readOnly />
                <div></div>
                <Input2 value={remainder2} readOnly color={resteColor} />

              </div>}
              {suiteY2 && <div>

                <h1>-</h1>
                <Input2 value={ValeurIntermidiare3} readOnly />
                <div></div>
                <Input2 value="_______" readOnly />
                <div></div>
                <Input2 value={remainder3} readOnly color={resteColor}/>

              </div>}
            </div>}


            {V && <div>
              <h1>-</h1>
              <Input2 value={ValeurIntermidiare} readOnly />

              <Input2 value="_______________" readOnly />
              <Input2 value={remainder} readOnly color={resteColor}/>

            </div>}

            <VerticalDivider />



            {X && <div>

              <Input2 value={quotient} readOnly  color={quotientColor} />

            </div>}

            {Y && <div>

              <Input2 value={quotient} readOnly color={quotientColor}/>

            </div>}
            {V && <div>

              <Input2 value={quotient} readOnly />

            </div>}

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


    </div>

  );
}

export default DivisionComponent;