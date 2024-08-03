// import React from 'react';
// import GoogleIcon from '@mui/icons-material/Google';
// import { FaGoogle, FaFacebookF } from 'react-icons/fa';
// import { SiApple } from 'react-icons/si';
// import './Login.css';

// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';

// import Typography from '@mui/material/Typography';
// import SimpleDialog from './SimpleDialog'

// const emails = ['username@gmail.com', 'user02@gmail.com'];



// const WelcomeComponent = () => {

//     const [open, setOpen] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//     const handleClickOpen = () => {
//       setOpen(true);
//     };

//     const handleClose = (value) => {
//       setOpen(false);
//       setSelectedValue(value);
//     };   


//     return (
//         <div className="container">
//             <h1>Bienvenue</h1>
//             <p>Connexion ou création de compte en 1 minute</p>
//             <input type="email" placeholder="E-mail" required />
//             <input type="text" placeholder="password" required />

//             <button>Continuer</button>
//             <p>ou continuer avec</p>
//             <div className="social-buttons">
//                 <button  onClick={handleClickOpen}>
//                     <GoogleIcon />
//                 </button>
//                 <button className="facebook" onClick={handleClickOpen}>
//                     <FaFacebookF />
//                 </button>
//                 <button className="apple" onClick={handleClickOpen}>
//                     <SiApple />
//                 </button>
//             </div>


//             <Typography variant="subtitle1" component="div">
//                 Selected: {selectedValue}
//             </Typography>
//             <br />

//             <SimpleDialog
//                 selectedValue={selectedValue}
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// };

// export default WelcomeComponent;



import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';
import './Login.css';
import SimpleDialog from './SimpleDialog';
import Link from '@mui/material/Link';
import { Navigate, useNavigate } from 'react-router-dom';

const emails = ['username@gmail.com', 'user02@gmail.com'];


const LoginPage = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const navigate = useNavigate()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <div className="login-container">
            <h1>Bienvenue</h1>
            <p>Connexion ou création de compte en 1 minute</p>
            <input type="email" placeholder="E-mail" className="email-input" />
            <input type="text" placeholder="password" className="text-input" />

            <button className="continue-button">Continuer</button>


            <div className="social-login">
                <p>  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        navigate("/Accueil/Sign_in");
                    }}
                >Creez un compte </Link>  <strong>ou</strong> continuer avec</p>
                <div className="social-icons">
                    <button className="social-button" onClick={handleClickOpen}> <FaFacebookF /></button>
                    <button className="social-button" onClick={handleClickOpen}><GoogleIcon /></button>
                    <button className="social-button" onClick={handleClickOpen}> <SiApple /></button>
                </div>
            </div>


            <div>
                <SimpleDialog

                    selectedValue={selectedValue}
                    open={open} onClose={handleClose}
                />
            </div>

        </div>
    );
};

export default LoginPage;