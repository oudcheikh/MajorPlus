import React from 'react';
import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';


import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';

import './Styles.css'; // Assurez-vous d'avoir un fichier CSS nommé Profile.css avec les styles fournis précédemment
import { Navigate, useNavigate } from 'react-router-dom';

function Profile() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [Emailvalide, setEmaileValide] = useState(false);
    const [firstvalide, setfirstValide] = useState(false);
    const [Lastnamevalide, setLastnameValide] = useState(false);
    const [phonevalide, setPhoneValide] = useState(false);
    const [passwordValide, setPasswordValide] = useState(false);
    const [confirmPasswordValide, setConfirmPasswordValide] = useState(false);
    const [isFormValid, setIsFormValide] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()


    useEffect(() => {
        setIsFormValide(Emailvalide && firstvalide && Lastnamevalide && phonevalide);
    }, [Emailvalide, firstvalide, Lastnamevalide, phonevalide, passwordValide, confirmPasswordValide]);

    const checkFormValidity = () => {
        setIsFormValide(Emailvalide && firstvalide && Lastnamevalide && phonevalide);
    };



    const validateEmail = () => {
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Adresse email invalide' }));
            setEmaileValide(false)
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
            setEmaileValide(true)

        }
        checkFormValidity()
    };

    const validateFirstName = () => {
        if (firstName.length > 6) {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: 'Le prénom ne doit pas dépasser 6 caractères' }));
            setfirstValide(false)
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
            setfirstValide(true)

        }
        checkFormValidity()
    };

    const validateLastName = () => {
        if (lastName.length > 6) {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Le nom ne doit pas dépasser 6 caractères' }));
            setLastnameValide(false)
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
            setLastnameValide(true)

        }
        checkFormValidity()
    };

    const validatePhone = () => {
        if ((!/^\d+$/.test(phone)) || (phone.length != 9)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: 'Le numéro de téléphone doit contenir uniquement 9 chiffres' }));
            setPhoneValide(false)
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
            setPhoneValide(true)

        }
        checkFormValidity()
    };

    const validatePassword = () => {
        if (password.length < 6) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Le mot de passe doit contenir au moins 6 caractères' }));
            setPasswordValide(false);
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
            setPasswordValide(true);
        }
    };

    const validateConfirmPassword = () => {
        if (confirmPassword !== password) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: 'Les mots de passe ne correspondent pas' }));
            setConfirmPasswordValide(false);
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
            setConfirmPasswordValide(true);
        }
    };

    // const isFormValid = () => {
    //     return Object.values(errors).every((error) => error === '');
    // };

    const Sauvegarder = () => {
        if (isFormValid) {
            console.log("Formulaire valide, sauvegarde en cours...");
        } else {
            console.log("Le formulaire n'est pas valide. Veuillez remplir correctement tous les champs.");
        }
    };

    const goto = () => {
        navigate("/Login")

    }

    return (
        <div className="profile-container">
            <div className="profile">

                <div className="profile-info">
                    <div>
                        <h3>Photo de profil</h3><br></br>
                        <h5>Avec une photo à jour , votre enseignant.e vous identifiera plus facilement sur son planning.</h5>
                    </div>
                    <div className="profile-header">

                        <div className="profile-picture">
                            {/* Espace pour la photo de profil */}
                        </div>
                        <div className="add-photo">

                            <button >+Ajouter</button>
                            &ensp;&ensp; &ensp;&ensp; &ensp;&ensp; &ensp;&ensp;&ensp;&ensp; &ensp;&ensp; &ensp;&ensp;
                        </div>

                    </div>
                    <h2>Informations</h2>


                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">Prénom</label>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={validateFirstName} />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Nom</label>
                        <input type="text" id="lastName" name="lastName" Value={lastName} onChange={(e) => setLastName(e.target.value)} onBlur={validateLastName} />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="phone">Téléphone</label>
                        <input type="tel" id="phone" placeholder="taper votre numero de télèphone" pattern="[0-9]{10}" name="phone" Value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={validatePhone} />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>


                    <div className="input-field">
                        <label htmlFor="password">Mot de passe:</label>
                        <input type="tel" id="phone" placeholder="taper votre mot de passe " value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                            required />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                  
                    <div className="input-field">
                        <label htmlFor="password">Confirmer mot de passe:</label>
                        <input id="passwordConfirm" placeholder=""
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={validateConfirmPassword}
                            required />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </div>
               
               
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <button className="save-button" disabled={!isFormValid} onClick={Sauvegarder}>Sauvegarder</button>
                <div style={{ position: "center" }}> ou </div>
                <button className="save-button" onClick={goto}>Vous avez un compte?</button>

                <div>


                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <footer>

                    <div>
                        <HomeIcon style={{ marginRight: '50px' }} />

                        <AppsIcon style={{ marginRight: '50px' }} />
                        <HomeIcon style={{ marginRight: '50px' }} />

                        <AppsIcon style={{ marginRight: '50px' }} />


                        <AppsIcon style={{ marginRight: '20px' }} />
                    </div>

                </footer>
            </div>


        </div>




        </div >


    );
}

export default Profile;
