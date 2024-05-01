import React, { useState } from 'react';
import './Style.css'; // Assurez-vous d'avoir un fichier CSS avec les styles appropriés
import Exercice2 from '../Exercice2';
import Table_mesure from '../MesureAgraires/Table_mesures2';

const slidesData = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80',
        text: 'Slide 1'
    },
    {
        id: 2,
        imageUrl: '/images/Math/periode 4/alimentee.png',
        text: 'Slide 2'
    }
    ,
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1505678261036-025b27b91822?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        text: 'Slide 3'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1495555687398-46279e49e54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        text: 'Slide 4'
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1516824503171-8b43a9cd8a95?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        text: 'Slide 5'
    }

];

const Slide = ({ id, imageUrl, text, currentIndex }) => (
    <div className="slide" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Affiche le texte si currentIndex correspond à l'ID de la diapositive ou si c'est la première diapositive */}
        {currentIndex === id || currentIndex === 0 && id === 1 && (
            <div className="slide-content">{text}</div>
        )}
    </div>
);

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slidesData.length - 1 : currentIndex - 1);
    };

    const goToNextSlide = () => {
        // Vérifiez si currentIndex atteint la dernière diapositive
        if (currentIndex === slidesData.length - 1) {
            // Si c'est le cas, revenez à la première diapositive
            setCurrentIndex(0);
        } else {
            // Sinon, passez à la diapositive suivante
            setCurrentIndex(currentIndex + 1);
        }
    };


    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slidesData.map(slide => (
<div>

    <Exercice2 />
    {/* <Table_mesure/> */}
</div>
                    ))}


                </div>
                <button className="prev-btn" onClick={goToPrevSlide}>&#10094;</button>
                <button className="next-btn" onClick={goToNextSlide}>&#10095;</button>
            </div>
        </div>
    );
};





export default Slider;
