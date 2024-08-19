import { firestore } from "./firebase";

// Define the function to store activity data
export const storeActivityData = async (userId, activityData) => {
    try {
        await firestore.collection("activities").doc(userId).collection("userActivities").add(activityData);
        console.log("Activity data stored successfully.");
    } catch (error) {
        console.error("Error storing activity data: ", error);
    }
};
