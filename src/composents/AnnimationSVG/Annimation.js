import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './annimation.css';
import { useNavigate } from 'react-router-dom';

const LineDrawingDemo = () => {

    const navigate = useNavigate();
    useEffect(() => {
        // Anime.js animation
        anime({
            targets: '.line-drawing-demo .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: (el, i) => i * 250,
            direction: 'alternate',
            loop: true
        });

        // Redirect to /C2 after 1 minute
        const timer = setTimeout(() => {
            navigate('/ProgressMap');
        }, 10000); // 60 000 ms = 1 minute

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='CC'>



            
            <div className="line-drawing-demo">
          
                <svg   width="1000" height="200"  stroke="none" viewBox="0 0 500 200" className="lines">
                 
                    <path
                        d="m0 0h7l6 2 5 8 10 29 2 8h2l1-5 14-38 3-3 15-1 4 2 1 3v62l-2 1h-10l-1-1-1-52-17 48-3 5h-11l-3-5-16-47-1 50-1 2h-11l-1-1v-64l2-2z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(50, 50)" />   {/*m*/}

                    <path
                        d="m0 0 8 1 3 4 19 54 1 4 1-5h12l2-7 1-50h13v57l-4 8-8 4h-10l-7-2h-13l-4-9-2-6-25-1-3 11-3 5h-11l1-9 19-55 2-3z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(150, 50)" />{/*aj*/}
                    <path
                        d="m0 0 2 2 8 23v2h-18l2-9z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(150, 60)" />

                    <path
                        d="m0 0h16l11 4 5 5 5 8 2 7v21l-4 11-6 8-9 5-7 2h-13l-9-2-8-6-4-5-3-8-1-5v-17l2-9 6-10 8-6z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(250, 50)"

                    />  {/*O*/}
                    <path
                        d="m0 0h13l6 4 3 5 2 10v11l-2 9-4 6-6 4h-12l-5-3-4-5-2-5-1-14 2-11 4-7z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(250, 60)" /> {/*O*/}

                    <path
                        d="m0 0h13l12 2 8 5 4 8v8l-3 8-6 5-2 2 6 7 8 19-1 4h-12l-4-6-7-16-3-3-9-1v22l-2 4h-11l-1-1v-65l1-1z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(310, 50)" />{/*R*/}


                    <path
                        d="m0 0h10l5 2 3 3v9l-5 5-3 1h-10z"
                        fill="transparent"
                        stroke="black"
                        strokeWidth="2"
                        transform="translate(310, 60)" /> {/*suite R*/}


                    <path
                        d="M20,100 L40,100 L40,80 L60,80 L60,100 L80,100 L80,120 L60,120 L60,140 L40,140 L40,120 L20,120 Z"
                        fill="transparent"
                        stroke="blue"
                        strokeWidth="4"
                        transform="translate(350, -80)"
                    />

                </svg>
            </div>




        </div>
    );
};

export default LineDrawingDemo;
