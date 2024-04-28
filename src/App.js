import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './composents/Accueil';
import Math from './composents/Math/Math';
import Français from './composents/_FRANCAIS/Français';
import QuizTest from './composents/home/QuizTest';
import QuizTestarab from './composents/home/QuizTestarab';
import PrepaArabe from './composents/PrepaArabe';
import PrepaFrançais from './composents/PrepaFrançais';

import Vocabulaire from './composents/_FRANCAIS/Français/Vocabulaire/Vocabulaire';
import Acueilvocabulaire from './composents/_FRANCAIS/Français/Vocabulaire/Acueilvocabulaire';

import C1 from './composents/Math/Periode1/C1/C1';
import C2 from './composents/Math/Periode1/C2/C2';
import C3 from './composents/Math/Periode1/C3/C3';
import C4 from './composents/Math/Periode1/C4/C4';
import C5 from './composents/Math/Periode1/C5/C5';
import G2 from './composents/Math/Periode1/G2/G2';
import C5A3 from './composents/Math/Periode1/C6/C5A3';
import C5A4 from './composents/Math/Periode1/C6/C5A4';
import Kangaroo from './composents/Math/Periode1/C6/Kangaroo';
import C5A5 from './composents/Math/Periode1/C6/C5A5';
import C6 from './composents/Math/Periode1/C6/C6';
import C7 from './composents/Math/Periode1/C7/C7';
import M2A1 from './composents/Math/Periode1/M2/M2A1';
import M2A2 from './composents/Math/Periode1/M2/M2A2';
import M2A3 from './composents/Math/Periode1/M2/M2A3';
import M2 from './composents/Math/Periode1/M2/M2';
import G3 from './composents/Math/Periode1/G3/G3';
import G1A2 from './composents/Math/Periode1/G1/G1A2';
import G1 from './composents/Math/Periode1/G1/G1';
import SousEtAddFraction from './composents/Math/Periode3/C17/SousEtAddFraction';
import P2A1A from './composents/Math/Periode2/C09/P2A1A';
import P2A1C from './composents/Math/Periode2/C10/P2A1C';
import P2A1B from './composents/Math/Periode2/C12/P2A1B';
import P3A3 from './composents/Math/Periode2/C11/P3A3';
import P3A4 from './composents/Math/Periode2/C13/P3A4';
import P3A6 from './composents/Math/Periode2/G4/P3A6';
import P3A7 from './composents/Math/Periode2/G5/P3A7';
import P3A8 from './composents/Math/Periode2/M4/P3A8';
import Aire2 from './composents/Math/Periode2/M3/Aire2';
import P3A5 from'./composents/Math/Periode2/C14_C15_C16/P3A5';
import Chap13 from'./composents/Math/Periode2/C16/Chap13';
import Test from './composents/Math/Periode2/C11/DivisionEuclid'


import Fraction2 from './composents/Math/Periode2/M5/Fraction2';
import Periode1 from './composents/Math/Periode1';
import Periode2 from './composents//Math/Periode2';
import Period3 from  './composents//Math/period3';
import Islamique from './composents/_ARABE_Folder/Islamique';
import Science from './composents/_FRANCAIS/Science';
import Histoire from './composents/_ARABE_Folder/Histoire';


import Hist1 from './composents/_ARABE_Folder/Histoire/Chapitre1/hist1';
import Islamique1 from './composents/_ARABE_Folder/Islam/Chapitre1/Islamique1';
import Islamique2 from './composents/_ARABE_Folder/Islam/Chapitre2/Islamique2';
import Islamique3 from './composents/_ARABE_Folder/Islam/Chapitre3/Islamique3';
import Islamique4 from './composents/_ARABE_Folder/Islam/Chapitre4/Islamique4';

import Hist2 from './composents/_ARABE_Folder/Histoire/Chapitre2/hist2';
import Hist3 from './composents/_ARABE_Folder/Histoire/Chapitre3/hist3';
import Hist4 from './composents/_ARABE_Folder/Histoire/Chapitre4/hist4';
import Hist5 from './composents/_ARABE_Folder/Histoire/Chapitre5/hist5';
import Hist6 from './composents/_ARABE_Folder/Histoire/Chapitre6/hist6';
import Hist7 from './composents/_ARABE_Folder/Histoire/Chapitre7/hist7';
import Hist8 from './composents/_ARABE_Folder/Histoire/Chapitre8/hist8';
import Hist9 from './composents/_ARABE_Folder/Histoire/Chapitre9/hist9';
import Hist10 from './composents/_ARABE_Folder/Histoire/Chapitre10/hist10';
import Hist11 from './composents/_ARABE_Folder/Histoire/Chapitre11/hist11';
import Hist12 from './composents/_ARABE_Folder/Histoire/Chapitre12/hist12';
import Hist13 from './composents/_ARABE_Folder/Histoire/Chapitre13/hist13';
import Hist14 from './composents/_ARABE_Folder/Histoire/Chapitre14/hist14';
import Hist15 from './composents/_ARABE_Folder/Histoire/Chapitre15/hist15';
import Hist16 from './composents/_ARABE_Folder/Histoire/Chapitre16/hist16';
import Hist17 from './composents/_ARABE_Folder/Histoire/Chapitre17/hist17';
import Hist18 from './composents/_ARABE_Folder/Histoire/Chapitre18/hist18';
import EquilibrAlimantaire from './composents/_FRANCAIS/Science/Chapitre1/EquilibreAlimantaire';
import EquilibrEnergitique from './composents/_FRANCAIS/Science/Chapitre2/EquilibreEnergitique';
import Desertification from './composents/_FRANCAIS/Science/Chapitre3/Desertification';
import Pollution from './composents/_FRANCAIS/Science/Chapitre4/Pollution';  
import EauEtSante from './composents/_FRANCAIS/Science/Chapitre5/EauEtSante';
import Vaccination from './composents/_FRANCAIS/Science/Chapitre6/Vaccination';
import Sida from './composents/_FRANCAIS/Science/Chapitre7/Sida';
import AccConjugaison from './composents/_FRANCAIS/Français/ConjugaisonAcc.js';


import Etre from './composents/_FRANCAIS/Français/Conjugaison/etre/etre';
import Grammaire from './composents/_FRANCAIS/Français/Grammaire/grammaire';
import Sujet from './composents/_FRANCAIS/Français/Grammaire/Sujet/Sujet';
import TypesDesPhrases from './composents/_FRANCAIS/Français/Grammaire/Types des phrases/lesphrases'
import PhraseDeclarative from './composents/_FRANCAIS/Français/Grammaire/Types des phrases/Prase Declarative/PhraseDeclarative'
import PhraseImperative from './composents/_FRANCAIS/Français/Grammaire/Types des phrases/phrase impérative/phraseImperative'
import Exclamative from './composents/_FRANCAIS/Français/Grammaire/Types des phrases/phrase exclamative/exclamative'
import Interrogative from './composents/_FRANCAIS/Français/Grammaire/Types des phrases/La phrase interrogative/interrogative'
import Complement from './composents/_FRANCAIS/Français/Grammaire/Complement/Complement'
import COD from './composents/_FRANCAIS/Français/Grammaire/Complement/COD'
import COI from './composents/_FRANCAIS/Français/Grammaire/Complement/COI/COID'
import CC from './composents/_FRANCAIS/Français/Grammaire/Complement/Circonstanciel/CC'
import Adjectif from './composents/_FRANCAIS/Français/Grammaire/adjectif/adjectif'
import Adverbe from './composents/_FRANCAIS/Français/Grammaire/Adverbe/Adverbe'
import Conjonction from './composents/_FRANCAIS/Français/Grammaire/Conjonction/Conjonction'
import Subordination from './composents/_FRANCAIS/Français/Grammaire/Conjonction/Conj Subordination/Subordination'

import Coordination from './composents/_FRANCAIS/Français/Grammaire/Conjonction/Coordination/Coordination'
import Préposition from './composents/_FRANCAIS/Français/Grammaire/la Préposition/Préposition'
import Article from './composents/_FRANCAIS/Français/Grammaire/Article/Article'
import Article1 from './composents/_FRANCAIS/Français/Grammaire/Article/Article1'
import Définis from './composents/_FRANCAIS/Français/Grammaire/Article/Définis'
import Indéfinis from './composents/_FRANCAIS/Français/Grammaire/Article/Indéfinis'
import Partitif from './composents/_FRANCAIS/Français/Grammaire/Article/partitif'


import VocabularyTrainerBah from './composents/_FRANCAIS/Français/Grammaire/Sujet/Exercices'
import ExSuj from './composents/_FRANCAIS/Français/Grammaire/Sujet/ExerciceSujet'
import PrepEx from './composents/_FRANCAIS/Français/Grammaire/la Préposition/quiz/PreposionExercices'

import ExercicePréposition from './composents/_FRANCAIS/Français/Grammaire/la Préposition/quiz/Exercices'
import ConjonctionEx from './composents/_FRANCAIS/Français/Grammaire/Conjonction/quiz/ConjonctionExercices'

import ComplementEx from './composents/_FRANCAIS/Français/Grammaire/Complement/quiz/ComplementExercices'
import ArticleEx from './composents/_FRANCAIS/Français/Grammaire/Article/quiz/ArticleExercices'
import AdverbeExercice from './composents/_FRANCAIS/Français/Grammaire/Adverbe/quiz/AdverbeExercices'
import AdjectiveExercice from './composents/_FRANCAIS/Français/Grammaire/adjectif/quiz/AdjectiveExercices'
import TypePhExercices from './composents/_FRANCAIS/Français/Grammaire/Types des phrases/quiz/TypePhExercices'
//Orthographe  
import Orthographe from './composents/_FRANCAIS/Français/Orthographe/Orthographe'
import ExamenQCM from './composents/home/QuizTest'

import ExamenOrthographe from './composents/_FRANCAIS/Français/Orthographe/ExamenOrthographe'
import Quiz from './composents/_FRANCAIS/Français/Orthographe/ExercicesOrth'


import Concours from './composents/_ARABE_Folder/Concours/Concours'
import ConcoursFrançais from './composents/_FRANCAIS/Concours/concours 2005/Français/ConcFrançais'
import Orth2005 from './composents/_FRANCAIS/Concours/concours 2005/Français/Orthographe/Orth2005'
import ConcoursFrançais2005 from './composents/_FRANCAIS/Concours/concours 2005/Français/ConcFrançais'
import Accueilarab from './composents/_ARABE_Folder/Accueilarab' 
import Acceuilfrançais from './composents/Acceuilfrançais' 
import ConcoursArabe from './composents/_ARABE_Folder/Concours/arabe/Arabe'
import Conjugaison from './composents/_FRANCAIS/Français/ConjugaisonAcc.js'


import AcceiulArabic from'./composents/_ARABE_Folder/Arabe/AccArabic'

import Annahw from'./composents/_ARABE_Folder/Arabe/Annahw/Annahw'
import C1_Almoaarab from'./composents/_ARABE_Folder/Arabe/Annahw/al moaarab/Almoaareb'
import Chapitre2 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre2'
import Chapitre3 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre3'
import Chapitre4 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre4'
import Chapitre5 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre5'
import Chapitre6 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre6'
import Chapitre7 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre7'
import Chapitre8 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre8'
import Chapitre9 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre9'
import Chapitre10 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre10'
import Chapitre11 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre11'
import Chapitre12 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre12'
import Chapitre13 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre13'
import Chapitre14 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre14'
import Chapitre15 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre15'
import Chapitre16 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre16'
import Chapitre17 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre17'
import Chapitre18 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre18'
import Chapitre19 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre19'
import Chapitre20 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre20'
import Chapitre21 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre21'
import Chapitre22 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre22'
import Chapitre23 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre23'
import Chapitre24 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre24'
import Chapitre25 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre25'
import Chapitre26 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre26'
import Chapitre27 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre27'
import Chapitre28 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre28'
import Chapitre29 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre29'

import Chapitre30 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre30'
import Chapitre31 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre31'
import Chapitre32 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre32'
import Chapitre33 from './composents/_ARABE_Folder/Arabe/Annahw/Chapitre33'
import Tadriib from './composents/_ARABE_Folder/Arabe//Annahw/Tadriib/TadriibBase'

import Alimlaa from './composents/_ARABE_Folder/Arabe/Alimlaa/Alimlaa'
import IM_Chapitre1 from './composents/_ARABE_Folder/Arabe/Alimlaa/IM_Chapitre1'
import IM_Chapitre2 from './composents/_ARABE_Folder/Arabe/Alimlaa/IM_Chapitre2'
import IM_Chapitre3 from './composents/_ARABE_Folder/Arabe/Alimlaa/IM_Chapitre3'
import IM_Chapitre4 from './composents/_ARABE_Folder/Arabe/Alimlaa/IM_Chapitre4'
import IM_Chapitre5 from './composents/_ARABE_Folder/Arabe/Alimlaa/IM_Chapitre5'
import Tadriib_imlaa from './composents/_ARABE_Folder/Arabe/Alimlaa/Tadriib/TadriibImlaa'
import Assarf from './composents/_ARABE_Folder/Arabe/Assarf/Assarf'
import Almadhi from './composents/_ARABE_Folder/Arabe/Assarf/Almadhi/Almadhi'
import Almodharaa from './composents/_ARABE_Folder/Arabe/Assarf/Almodharaa/Almodharaaa'
import TadriibSarf from './composents/_ARABE_Folder/Arabe/Assarf/Tadriib/TadriibBase'
import Majzoum from './composents/_ARABE_Folder/Arabe/Assarf/Al modhara3ALmajzoum/Majzoum'

import Mansoub from './composents/_ARABE_Folder/Arabe/Assarf/Mansoub/Mansoub'

import Alamar from './composents/_ARABE_Folder/Arabe/Assarf/Alamr/Alamar'

import NewConcArabe from'./composents/_ARABE_Folder/Concours/arabe/Tadriib/TadriibImlaa'

import Sign_in from'./composents/Sign_in/Sign_in'



import CalculeAire from './composents/C20/CalculeAire';
// import SousEtAddFraction from './composents/C17/SousEtAddFraction';
import PatageInegaux from './composents/C19/PatageInegaux';
import NomberDecimaux from './composents/C18/NomberDecimaux';

import Periode4 from './composents/Math/Periode4/periode4.js';
import La_proportionnalité from'./composents/Math/Periode4/La_proportionnalité.js'

import Les_solides from'./composents/Math/Periode4/les solides/les_solides.js'

import Les_mesures_Agrairs from'./composents/Math/Periode4/MesureAgraires/MesureAgraire.js'


function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
           
          <Route path= "/" element={<Accueil/>} />
          <Route path= "/Accueilarab" element={<Accueilarab/>} />
          <Route path= "/Acceuilfrançais" element={<Acceuilfrançais/>} />
          <Route path= "/PrepaArabe" element={<PrepaArabe/>} />
          <Route path= "/PrepaFrançais" element={<PrepaFrançais/>} />

          <Route path= "/QuizTest" element={<QuizTest/>} />
          <Route path= "/QuizTestarab" element={<QuizTestarab/>} />
          <Route path="/C1" element ={<C1/>}/>
          <Route path="/SousEtAddFraction" element ={<SousEtAddFraction/>}/>
          <Route path="/C2" element ={<C2/>}/>
          <Route path="/C3" element ={<C3/>}/>
          <Route path="/C4" element ={<C4/>}/>
          <Route path="/C5A1" element ={<C5/>}/>
          <Route path="/Math" element ={<Math/>}/>
          <Route path="/C5A3" element ={<C5A3/>}/>
          <Route path="/C5A4" element ={<C5A4/>}/>
          <Route path="/Kangaroo" element ={<Kangaroo/>}/>
          <Route path="/C5A5" element ={<C5A5/>}/>
          <Route path="/C6" element ={<C6/>}/>
          <Route path="/C7" element ={<C7/>}/>
          <Route path="/M2A1" element ={<M2A1/>}/>
          <Route path="/M2A2" element ={<M2A2/>}/>
          <Route path="/M2A3" element ={<M2A3/>}/>
          <Route path="/M2" element ={<M2/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/G2" element ={<G2/>}/>
          <Route path="/G1A2" element ={<G1A2/>}/>
          <Route path="/G3" element ={<G3/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/Periode1" element ={<Periode1/>}/>
          <Route path="/Periode2" element ={<Periode2/>}/>
          <Route path="/Period3" element ={<Period3/>}/>
          <Route path="/Islamique" element ={<Islamique/>}/>
          <Route path="/Science" element ={<Science/>}/>
          <Route path="/Histoire" element ={<Histoire/>}/>
          <Route path="/Hist1" element ={<Hist1/>}/>
          <Route path="/Hist2" element ={<Hist2/>}/>
          <Route path="/Hist3" element ={<Hist3/>}/>
          <Route path="/Hist4" element ={<Hist4/>}/>
          <Route path="/Hist5" element ={<Hist5/>}/>
          <Route path="/Hist6" element ={<Hist6/>}/>
          <Route path="/Hist7" element ={<Hist7/>}/>
          <Route path="/Hist8" element ={<Hist8/>}/>
          <Route path="/Hist9" element ={<Hist9/>}/>
          <Route path="/Hist10" element ={<Hist10/>}/>
          <Route path="/Hist11" element ={<Hist11/>}/>
          <Route path="/Hist12" element ={<Hist12/>}/>
          <Route path="/Hist13" element ={<Hist13/>}/>
          <Route path="/Hist14" element ={<Hist14/>}/>
          <Route path="/Hist15" element ={<Hist15/>}/>
          <Route path="/Hist16" element ={<Hist16/>}/>
          <Route path="/Hist17" element ={<Hist17/>}/>
          <Route path="/Hist18" element ={<Hist18/>}/>
          <Route path="/EquilibrAlimantaire" element ={<EquilibrAlimantaire/>}/>
          <Route path="/EquilibrEnergitique" element ={<EquilibrEnergitique/>}/>
          <Route path="/Desertfication" element ={<Desertification/>}/>
          <Route path="/Pollution" element ={<Pollution/>}/>
          <Route path="/EauEtSante" element ={<EauEtSante/>}/>
          <Route path="/Vaccination" element ={<Vaccination/>}/>
          <Route path="/P2A1A" element ={<P2A1A/>}/>
          <Route path="/P2A1C" element ={<P2A1C/>}/>
          <Route path="/P2A1B" element ={<P2A1B/>}/>
          <Route path="/P3A3" element ={<P3A3/>}/>
          <Route path="/P3A4" element ={<P3A4/>}/>
          <Route path="/P3A5" element ={<P3A5/>}/>
          <Route path="/P3A6" element ={<P3A6/>}/>
          <Route path="/P3A7" element ={<P3A7/>}/>
          <Route path="/P3A8" element ={<P3A8/>}/>
          <Route path="/Chap13" element ={<Chap13/>}/>
          <Route path="/Aire2" element ={<Aire2/>}/>
          <Route path="/Fraction2" element ={<Fraction2/>}/>
          <Route path="/Sida" element ={<Sida/>}/>
          <Route path="/Islamique1" element ={<Islamique1/>}/>
          <Route path="/Islamique2" element ={<Islamique2/>}/>
          <Route path="/Islamique3" element ={<Islamique3/>}/>
          <Route path="/Islamique4" element ={<Islamique4/>}/>  
         {/*________________________Conjugaison____________________*/}
          <Route path="/Français" element ={<Français/>}/>   
          <Route path="/AccConjugaison" element ={<AccConjugaison />}/>
          <Route path="/Etre" element ={<Etre />}/>
        {/*________________________Grammaire____________________*/}
        <Route path="/Grammaire" element ={<Grammaire />}/>
        <Route path="/Sujet" element ={<Sujet />}/>
        <Route path="/TypesDesPhrases" element ={<TypesDesPhrases />}/>
        <Route path="/PhraseDeclarative" element ={<PhraseDeclarative />}/>
        <Route path="/PhraseImperative" element ={<PhraseImperative />}/>
        <Route path="/Exclamative" element ={<Exclamative />}/>
        <Route path="/Interrogative" element ={<Interrogative />}/>
        <Route path="/Complement" element ={<Complement />}/>
        <Route path="/COD" element ={<COD />}/>
        <Route path="/COI" element ={<COI />}/>
        <Route path="/CC" element ={<CC />}/>
        <Route path="/Conjonction" element ={<Conjonction />}/>
        <Route path="/Subordination" element ={<Subordination />}/>
        <Route path="/Coordination" element ={<Coordination />}/>
        <Route path="/Préposition" element ={<Préposition />}/>
        <Route path="/Article" element ={<Article/>}/>
        <Route path="/Article1" element ={<Article1/>}/>
        <Route path="/Définis" element ={<Définis/>}/>
        <Route path="/Indéfinis" element ={<Indéfinis/>}/>
        <Route path="/Partitif" element ={<Partitif/>}/>
         {/*________________________Exercices Grammaire____________________*/}
      
          <Route path="/VocabularyTrainerBah" element ={<VocabularyTrainerBah/>}/> 
           
           <Route path="/ExSuj" element ={<ExSuj/>}/>
           <Route path="/PrepEx" element ={<PrepEx/>}/>
           <Route path="/ExercicePréposition" element ={<ExercicePréposition/>}/>
           <Route path="/ConjonctionEx" element ={<ConjonctionEx/>}/>
           <Route path="/ComplementEx" element ={<ComplementEx/>}/>
           <Route path= "/ArticleEx" element={<ArticleEx/>} />
           <Route path= "/AdverbeExercice" element={<AdverbeExercice/>} />
           <Route path= "/AdjectiveExercice" element={<AdjectiveExercice/>} />
           <Route path= "/TypePhExercices" element={<TypePhExercices/>} />
 {/*________________________Orthographe____________________*/}
            <Route path= "/Orthographe" element={<Orthographe/>} />   
            <Route path= "/ExamenQCM" element={<ExamenQCM/>} />
            <Route path= "/ExamenOrthographe" element={<ExamenOrthographe/>} />
            <Route path= "/Quiz" element={<Quiz/>} />
        <Route path="/Adjectif" element ={<Adjectif />}/>
        <Route path="/Adverbe" element ={<Adverbe />}/>
          <Route path= "/Vocabulaire" element={<Vocabulaire/>} />
          <Route path= "/Acueilvocabulaire" element={<Acueilvocabulaire/>} />
         

          {/*----------------------------Concours ------------------------*/}
          <Route path= "/Concours" element={<Concours/>} />
          {/*----------------------------Concours 2005 ------------------------*/}
          <Route path= "/ConcoursFrançais" element={<ConcoursFrançais/>} />
          <Route path= "/Orth2005" element={<Orth2005/>} />
          <Route path= "/ConcoursFrançais2005" element={<ConcoursFrançais2005/>} />
          <Route path= "/ConcoursArabe" element={<ConcoursArabe/>} />

          {/*-------------------------*/}

          <Route path= "/acceiulArabic" element={<AcceiulArabic/>} />
          
          <Route path= "/Annahw" element={<Annahw/>} />
          <Route path= "/C1_Almoaarab" element={<C1_Almoaarab/>} />
          <Route path= "/Chapitre2" element={<Chapitre2/>} />
          <Route path= "/Chapitre3" element={<Chapitre3/>} />
          <Route path= "/Chapitre4" element={<Chapitre4/>} />


          <Route path= "/Chapitre5" element={<Chapitre5/>} />
          <Route path= "/Chapitre6" element={<Chapitre6/>} />
          <Route path= "/Chapitre7" element={<Chapitre7/>} />
          <Route path= "/Chapitre8" element={<Chapitre8/>} />
          <Route path= "/Chapitre9" element={<Chapitre9/>} />
          <Route path= "/Chapitre10" element={<Chapitre10/>} />
          <Route path= "/Chapitre11" element={<Chapitre11/>} />
          <Route path= "/Chapitre12" element={<Chapitre12/>} />
          <Route path= "/Chapitre13" element={<Chapitre13/>} />
          <Route path= "/Chapitre14" element={<Chapitre14/>} />
          <Route path= "/Chapitre15" element={<Chapitre15/>} />
          <Route path= "/Chapitre16" element={<Chapitre16/>} />
          <Route path= "/Chapitre17" element={<Chapitre17/>} />
          <Route path= "/Chapitre18" element={<Chapitre18/>} />
          <Route path= "/Chapitre19" element={<Chapitre19/>} />
          <Route path= "/Chapitre20" element={<Chapitre20/>} />
          <Route path= "/Chapitre21" element={<Chapitre21/>} />
          <Route path= "/Chapitre22" element={<Chapitre22/>} />
          <Route path= "/Chapitre23" element={<Chapitre23/>} />
          <Route path= "/Chapitre24" element={<Chapitre24/>} />
          <Route path= "/Chapitre25" element={<Chapitre25/>} />
          <Route path= "/Chapitre26" element={<Chapitre26/>} />
          <Route path= "/Chapitre27" element={<Chapitre27/>} />
          <Route path= "/Chapitre28" element={<Chapitre28/>} />
          <Route path= "/Chapitre29" element={<Chapitre29/>} />
          <Route path= "/Chapitre30" element={<Chapitre30/>} />
          <Route path= "/Chapitre31" element={<Chapitre31/>} />
          <Route path= "/Chapitre32" element={<Chapitre32/>} />
          <Route path= "/Chapitre33" element={<Chapitre33/>} />
          <Route path= "/Tadriib" element={<Tadriib/>} />
          <Route path= "/Alimlaa" element={<Alimlaa/>} />
          <Route path= "/IM_Chapitre1" element={<IM_Chapitre1/>} />
          <Route path= "/IM_Chapitre2" element={<IM_Chapitre2/>} />
          <Route path= "/IM_Chapitre3" element={<IM_Chapitre3/>} />
          <Route path= "/IM_Chapitre4" element={<IM_Chapitre4/>} />
          <Route path= "/IM_Chapitre5" element={<IM_Chapitre5/>} /> 
          <Route path= "/Tadriib_imlaa" element={<Tadriib_imlaa/>} />  
          <Route path= "/Assarf" element={<Assarf/>} />
          <Route path= "/Almadhi" element={<Almadhi/>} /> 
          <Route path= "/Alamar" element={<Alamar/>} /> 
          <Route path= "/Almodharaa" element={<Almodharaa/>} />
          <Route path= "/TadriibSarf" element={<TadriibSarf/>} /> 
          <Route path= "/Majzoum" element={<Majzoum/>} />
          
          <Route path= "/Mansoub" element={<Mansoub/>} />
          <Route path= "/Test" element={<Test/>} />
          <Route path= "/NewConcArabe" element={<NewConcArabe/>} />
          

          <Route path= "/Conjugaison" element={<Conjugaison/>} />
        
          <Route path= "/Sign_in" element={<Sign_in/>} />
       
          <Route path= "/PatageInegaux" element={<PatageInegaux/>} />
          <Route path= "/NomberDecimaux" element={<NomberDecimaux/>} />
          <Route path= "/CalculeAire" element={<CalculeAire/>} />
    
          <Route path= "/Periode4" element={<Periode4/>} />
          <Route path= "/La_proportionnalité" element={<La_proportionnalité/>} />
          <Route path= "/Les_solides" element={<Les_solides/>} />

          <Route path= "/Les_mesures_Agrairs" element={<Les_mesures_Agrairs/>} />
     
        </Routes>
      
      </div>
    </Router>
  )
}

export default App;
 