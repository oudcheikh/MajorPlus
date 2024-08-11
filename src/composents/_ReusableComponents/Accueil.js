import React from 'react';
import logo from './Major.png'; // Ensure logo.png is in the same directory as Acceuil.js
import { useNavigate } from 'react-router-dom';



const Acceuil = () => {

const navigate = useNavigate();

  return (
    <div style={styles.acceuilContainer}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.logoText}>MAJOR+</h1>
      </div>
     
      <div style={styles.buttonContainer}>
      <button style={styles.btnSignin} onClick={() => navigate('/signin')}>Se connecter</button>
      <button style={styles.btnSignup} onClick={() => navigate('/signup')}>S'inscrir</button>




      </div>
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
