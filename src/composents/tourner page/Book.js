import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Howl, Howler } from 'howler';
import flipSound from './turnPage.mp3';
import './style.css'
const Book = () => {

    const bookRef = useRef();

    const handleFlip = () => {
      const sound = new Howl({
        src: [flipSound],
      });
      sound.play();
    };
  return (
    <HTMLFlipBook width={300} height={500} onFlip={handleFlip} ref={bookRef}>
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
};

export default Book;
