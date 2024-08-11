import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FormulaText } from "../../../Styles/MajorStyles";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Import Firebase functions

// Centralized styles
const styles = {
    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        textAlign: "center",
    },
    title: {
        color: "blueviolet",
        fontSize: "30px",
        textAlign: "center",
        marginBottom: "10px",
    },
    image: {
        width: "70%",
        height: "auto",
        display: "block",
        margin: "10px auto",
    },
    list: {
        textAlign: "left",
        paddingLeft: "40px",
        listStyleType: "disc",
    },
};

const IntroSlide = ({ title, imagePath, content, titleColor }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            if (imagePath) {
                const storage = getStorage();
                const imageRef = ref(storage, imagePath);

                try {
                    const url = await getDownloadURL(imageRef);
                    setImageUrl(url);
                } catch (error) {
                    console.error("Error fetching image: ", error);
                }
            }
        };

        fetchImage();
    }, [imagePath]);

    return (
        <div style={styles.container}>
            <strong style={{ ...styles.title, color: titleColor || styles.title.color }}>{title}</strong>
            {imageUrl && <img src={imageUrl} style={styles.image} alt="Illustration" />}
            <FormulaText>
                <ul style={styles.list}>
                    {content.map((item, index) => (
                        <li key={index}>
                            <h4 dangerouslySetInnerHTML={{ __html: item }}></h4>
                        </li>
                    ))}
                </ul>
            </FormulaText>
        </div>
    );
};

// PropTypes for better validation and documentation
IntroSlide.propTypes = {
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string, // Now expects the path to the image in Firebase Storage
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    titleColor: PropTypes.string,
};

export default IntroSlide;
