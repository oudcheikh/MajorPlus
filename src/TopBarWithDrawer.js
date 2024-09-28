import React, { useState, useEffect } from 'react';
import './TopBar.css'; // Assurez-vous de créer ce fichier CSS
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { auth } from "./composents/Sign_in/v2/firebase"
import { onAuthStateChanged } from "firebase/auth";

//import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function TopBarWithDrawer({ toggleLanguage, t }) {
  const [user, setUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const goToHomePage = () => {
    navigate('/');
    setDrawerOpen(false);
  };

  const goToScoreboard = () => {
    navigate('/scoreboard');
    setDrawerOpen(false);
  };

  const handleChangeLanguage = (event) => {
    toggleLanguage(event.target.value);
  };

  const bookIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-book"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
      <path d="M4 4.5A2.5 2.5 0 016.5 2H20v19H6.5A2.5 2.5 0 014 19.5z"></path>
    </svg>
  );

  const userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <div className="top-bar" style={{ direction: "ltr" }}>
      <div className="menu-button" onClick={() => setDrawerOpen(true)}>
        ☰
      </div>

      {/* Afficher le score uniquement si l'utilisateur est connecté */}
      {user && (
        <div className="score" onClick={goToScoreboard}>
          {Math.ceil(17)} 🥇
        </div>
      )}

      <div className="language-select">
        <select onChange={handleChangeLanguage} aria-label="Select language">
          <option value="ar">عربى</option>
          <option value="fr">FR</option>
        </select>
      </div>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={goToHomePage}>
            <ListItemIcon>{bookIcon}</ListItemIcon>
            <ListItemText primary={t('myCourses')} />
          </ListItem>
          <ListItem button onClick={goToScoreboard}>
            <ListItemIcon>{userIcon}</ListItemIcon>
            <ListItemText primary={t('myScore')} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default TopBarWithDrawer;
