import React, { useEffect } from "react";

const NoScrollWrapper = ({ children }) => {

    // Fonction pour bloquer le défilement
    const preventDefault = (e) => {
        e.preventDefault();
    };

    // Activer le blocage du défilement à l'entrée dans le composant
    useEffect(() => {
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('keydown', handleKeydown);

        // Nettoyage à la sortie du composant pour réactiver le défilement
        return () => {
            window.removeEventListener('touchmove', preventDefault, { passive: false });
            window.removeEventListener('wheel', preventDefault, { passive: false });
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    // Bloquer le défilement avec les flèches du clavier
    const handleKeydown = (e) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            preventDefault(e);
        }
    };

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            {children}
        </div>
    );
};

export default NoScrollWrapper;
