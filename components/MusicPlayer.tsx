
import React, { useState, useRef, useEffect } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(e => console.log("Auto-play prevented", e));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio
        ref={audioRef}
        loop
        src="/styles/nhac.mp3" // Replace with a cute background song
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          isPlaying ? 'bg-pink-500 text-white animate-pulse' : 'bg-pink-100 text-pink-500'
        }`}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-2.048-1.943L15.75 18V5.25L9 7.125v12.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-2.048-1.943L6.75 20V9z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
