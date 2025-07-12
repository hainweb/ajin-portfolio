import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Waves from './waves/wave';
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



const Loader = () => {

    const [firstAnimationDone, setFirstAnimationDone] = useState(false);

  

    useEffect(() => {
      // Initialize AudioContext (works more reliably)
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audio = new Audio('/audio/load.mp3');
  
      // Connect audio to context
      const track = audioContext.createMediaElementSource(audio);
      track.connect(audioContext.destination);
  
      // Start audio on user interaction
      const handleUserInteraction = () => {
        audioContext.resume().then(() => {
          audio.play().catch((error) => console.error('Audio play failed:', error));
        });
        document.removeEventListener('click', handleUserInteraction);
      };
  
      document.addEventListener('click', handleUserInteraction);
    }, []);
   

  return (
    <div className="flex items-center justify-center h-screen bg-black">
     <Waves
   lineColor="#007bff"
   backgroundColor="rgba(0, 0, 0, 0.2)"
   waveSpeedX={0.02}
   waveSpeedY={0.01}
   waveAmpX={40}
   waveAmpY={20}
   friction={0.9}
   tension={0.01}
   maxCursorMove={120}
   xGap={12}
   yGap={36}
/>



{!firstAnimationDone && (
        <SplitText
          text="Hello, I'm Ajin R."
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-eagle font-extrabold text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={() => setFirstAnimationDone(true)}
        />
      )}

      {/* Second SplitText - Shows after first one finishes */}
      {firstAnimationDone && (
        <SplitText
        text="Welcome To My Portfolio..!"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-eagle font-extrabold text-center"
        
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      )}
    </div>
  );
};

export default Loader;
