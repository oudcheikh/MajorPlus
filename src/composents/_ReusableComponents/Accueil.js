import React, { useEffect, useState } from "react";
import logo from './Major.png'; // Ensure logo.png is in the same directory as Acceuil.js
import { useNavigate } from 'react-router-dom';
import { auth } from "../Sign_in/v2/firebase"
import { onAuthStateChanged } from "firebase/auth";




const Card = ({ title, content, icon, full, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className={`card ${full ? 'full-card' : ''}`} onClick={handleClick}>
      {icon && <img src={icon} alt={title} className="card-icon" />}
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};



const Acceuil = () => {

const navigate = useNavigate();
const [user, setUser] = useState(null);

const CardButton = ({ title, navigateTo }) => (
  <div className="card full-card" onClick={() => navigate(navigateTo)}>
    <img src={"images/Icones/calculator-simple.png"} alt={title} className="card-icon" />
    <div className="card-content">
      <h2>{title}</h2>
    </div>
  </div>
);

useEffect(() => {
  // Vérifie si un utilisateur est connecté ou déconnecté
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      // Utilisateur connecté
      setUser(currentUser);
    } else {
      // Aucun utilisateur connecté
      setUser(null);
    }
  });

  // Nettoyage lors du démontage du composant
  return () => unsubscribe();
}, []);

  return (
    
    
  

  <div>
  {user ? (

    <div className="app-container">
      <div className="full-width-container">
      <CardButton title="Math" navigateTo="/Math" />
      <CardButton title="Science" navigateTo="/Science" />
      {/* <Card title="Math" content="" icon={calculator} full navigateTo="/Math" />
        <Card title="Science" content="" icon={flask} full navigateTo="/Science" />
        <Card title="Français" content="" icon={Fraçais} full navigateTo="/Français" /> */}
        {/* <Card title="Concours" content="" icon={Fraçais} full navigateTo="/Concours" /> */}
      </div>

    </div>

  ) : (
    <div style={styles.acceuilContainer}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.logoText}>MAJOR+</h1>
      </div>
     
      <div style={styles.buttonContainer}>
      <button style={styles.btnSignin} onClick={() => navigate('/signin')}>Se connecter</button>
      <button style={styles.btnSignup} onClick={() => navigate('/signup')}>S'inscrir</button>

      {/* <button style={styles.btnSignup} onClick={() => navigate('/Buuton3D')}>button</button> */}
      </div>
    </div>
  )}
</div>


);
};

const styles = {
    acceuilContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e9f1fc',
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '30px',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    logoText: {
      fontSize: '32px',
      color: '#3b8aff',
      marginTop: '20px',
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
    },
    countryCode: {
      padding: '15px',
      fontSize: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginRight: '15px',
    },
    phoneInput: {
      padding: '15px',
      fontSize: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
    },
    btnSignin: {
      padding: '15px 30px',
      fontSize: '18px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
    },
    btnSignup: {
      padding: '15px 30px',
      fontSize: '18px',
      cursor: 'pointer',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
    },
  };
  

export default Acceuil;
