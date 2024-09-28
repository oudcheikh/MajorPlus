import "./ScoreBoard.css";
import React, { useEffect, useState } from "react";
import { auth, db } from "./Sign_in/v2/firebase";
import { collection, getDocs } from "firebase/firestore";
import dayjs from "dayjs"; // Utiliser dayjs pour manipuler les dates facilement
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";


function ScoreBoard() {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [isChampion, setIsChampion] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const uid = currentUser.uid;

        const fetchActivities = async () => {
          try {
            const activitiesRef = collection(db, "users", uid, "activities");
            const snapshot = await getDocs(activitiesRef);

            const activitiesList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            setActivities(activitiesList);
            calculateStats(activitiesList);
          } catch (error) {
            console.error("Error fetching activities:", error);
          }
        };

        fetchActivities();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const calculateStats = (activitiesList) => {
    // Trier les activités par date
    const sortedActivities = activitiesList.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Calcul des jours de suite (streak)
    let streakDays = 0;
    let lastDate = null;

    sortedActivities.forEach((activity) => {
      const activityDate = dayjs(activity.date);

      if (!lastDate) {
        lastDate = activityDate;
        streakDays = 1;
      } else {
        const differenceInDays = activityDate.diff(lastDate, "day");
        if (differenceInDays === 1) {
          streakDays++;
        } else if (differenceInDays > 1) {
          streakDays = 1; // Réinitialiser la streak si un jour est manqué
        }
      }

      lastDate = activityDate;
    });

    setStreak(streakDays);

    // Calcul du total d'XP
    const totalXp = activitiesList.reduce((sum, activity) => {
      return sum + (activity.xp || 0); // Assumer que chaque activité a un champ "xp"
    }, 0);

    setXp(totalXp);

    // Calcul du niveau
    const calculatedLevel = calculateLevel(totalXp);
    setLevel(calculatedLevel);

    // Définir si l'utilisateur est un champion
    if (calculatedLevel >= 10) { // Par exemple, niveau 10 pour être champion
      setIsChampion(true);
    } else {
      setIsChampion(false);
    }
  };

  // Fonction de calcul du niveau basé sur l'XP
  const calculateLevel = (xp) => {
    if (xp < 100) return 1;
    if (xp < 300) return 2;
    if (xp < 600) return 3;
    if (xp < 1000) return 4;
    if (xp < 1500) return 5;
    if (xp < 2100) return 6;
    if (xp < 2800) return 7;
    if (xp < 3600) return 8;
    if (xp < 4500) return 9;
    return 10;
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-left">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h2>{user ? user.displayName || "Utilisateur" : "Invité"}</h2>
            <p className="xp-info">
              <span className="xp-number">{xp}</span> XP
            </p>
          </div>
        </div>

        <div className="profile-right">
          <div className="profile-stat">
            <span className="icon">🔥</span>
            <p>{streak} jour{streak > 1 ? "s" : ""} de suite</p>
          </div>
          <div className="profile-stat">
            <span className="icon">🎖️</span>
            <p>niveau {level}</p>
          </div>
          <div className="profile-stat">
            <span className="icon">🏆</span>
            <p>{isChampion ? "Champion" : "Pas encore Champion"}</p>
          </div>
        </div>
      </div>

      {/* Ajouter ici la liste des activités si besoin */}
    </div>
  );
}

export default ScoreBoard;
