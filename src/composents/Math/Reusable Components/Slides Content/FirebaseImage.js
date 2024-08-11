import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const FirebaseImage = ({ imagePath, altText = "Image", style = {} }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            const storage = getStorage();
            const imageRef = ref(storage, imagePath);

            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (err) {
                console.error("Error fetching image: ", err);
                setError("Failed to load image");
            } finally {
                setIsLoading(false);
            }
        };

        fetchImage();
    }, [imagePath]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <img src={imageUrl} alt={altText} style={{ maxWidth: "100%", borderRadius: "10px", ...style }} />;
};

FirebaseImage.propTypes = {
    imagePath: PropTypes.string.isRequired,
    altText: PropTypes.string,
    style: PropTypes.object, // Accept a style object
};

export default FirebaseImage;
