// src/utils/storeActivityData.js
import { db } from "../Sign_in/v2/firebase";
import { collection, addDoc } from "firebase/firestore";

const storeActivityData = async (userId, activityData) => {
    try {
        // Référence à la sous-collection 'activities' sous chaque utilisateur
        const userActivitiesCollection = collection(db, 'users', userId, 'activities');
        const docRef = await addDoc(userActivitiesCollection, activityData);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export default storeActivityData;
