import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Level from './Level';
import Connector from './Connector';
import './ACC.css';
import { EdgesensorHigh } from '@mui/icons-material';
import Button from './Button';
import SvgLines from './SvgLines';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function ProgressMap({ initialState }) {

    const navigate = useNavigate();
    const [progress, setProgress] = useState(initialState);

    const handleClick = (path) => {
        navigate(path);
        console.log(path)

    };
   
    return (
        <div className='app23'>

           <button
        className={`B1 ${progress.buttons[0].status}`}
        onClick={() => progress.buttons[0].status === 'inProgress' && handleClick("/C1")}
        disabled={progress.buttons[0].status === 'locked'}
      >
       
      </button> <div className='title1'> les grands nombres</div>
      <div className='DivB2'>
        <button
          className={`B2 ${progress.buttons[1].status}`}
          onClick={() => progress.buttons[1].status === 'inProgress' && handleClick("/C2")}
          disabled={progress.buttons[1].status === 'locked'}
        >
        
        </button><div className='title2'> les fractions</div>
      </div>
      <button
        className={`B3 ${progress.buttons[2].status}`}
        onClick={() => progress.buttons[2].status === 'inProgress' && handleClick("/C3")}
        disabled={progress.buttons[2].status === 'locked'}
      >
      </button>
      <div className='title3'> la division</div>
      <div className='DivB2'>
        <button
          className={`B4 ${progress.buttons[3].status}`}
          onClick={() => progress.buttons[3].status === 'inProgress' && handleClick("/C4")}
          disabled={progress.buttons[3].status === 'locked'}
        >
   
        </button><div className='title2'> les fractions</div>
      </div>

            <svg width={"500px"} height={"250px"} className='svgComponent' style={{ border: 'none', background: 'none' }}>
                <polyline
              className={`polyline ${progress.lines[0].status}`}

                    points="440,40 90,40 90,230 "

                    style={{
                        stroke: 'black',

                        strokeWidth: 5,
                        strokeDasharray: '10',
                        fill: 'none'
                    }}
                /></svg>
            <svg width={"500px"} height={"250px"} className='svgComponent2' style={{ border: 'none', background: 'none' }}>
                <polyline
                 className={`polyline ${progress.lines[1].status}`}
                    points="80,20 80,200 ,450,200 "
                    style={{
                        stroke: 'black',

                        strokeWidth: 5,
                        strokeDasharray: '10',
                        fill: 'none'
                    }}
                />
            </svg>


            <svg width={"500px"} height={"300px"} className='svgComponent3' style={{ border: 'none', background: 'none' }}>
                <polyline
                 className={`polyline ${progress.lines[2].status}`}
                    points="450,100 450,150 450,150  40,150 40,200 "
                    style={{
                        stroke: 'black',
                        strokeWidth: 5,
                        strokeDasharray: '10',
                        fill: 'none'
                    }}
                />
            </svg>


    </div>
  

    );
}
export default ProgressMap;