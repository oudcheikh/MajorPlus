// src/utils/storeActivityData.js
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const storeActivityData = async (activityData) => {
    try {
        const docRef = await addDoc(collection(db, 'activities'), activityData);
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export default storeActivityData;
  