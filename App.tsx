
import React, { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import { generateBirthdayWishes } from './services/geminiService';
import { BirthdayMessage } from './types';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState<BirthdayMessage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      const data = await generateBirthdayWishes();
      setMessage(data);
      setLoading(false);
    };
    fetchWishes();
  }, []);

  const handleOpenGift = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6 text-center">
        <FloatingHearts />
        <div className="z-10 bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full border-4 border-pink-300">
          <img 
            src="https://picsum.photos/seed/cute-loopy/400/400" 
            alt="Loopy" 
            className="w-48 h-48 mx-auto rounded-full border-4 border-pink-200 mb-6 object-cover shadow-inner"
          />
          <h1 className="text-3xl font-bold text-pink-600 mb-4 font-romance">Gửi Bé iuuuu của anhhh</h1>
          <p className="text-pink-500 mb-8">Anh có một món quà nhỏ dành cho em. Hãy nhấn vào đây nhé!</p>
          <button
            onClick={handleOpenGift}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transform transition hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 mx-auto"
          >
            🎁 Mở Quà Ngay
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-4 pb-20 overflow-y-auto">
      <FloatingHearts />
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Header section */}
      <div className="mt-12 text-center z-10 space-y-4 px-4 max-w-md">
        <div className="relative inline-block">
          <img 
            src="https://picsum.photos/seed/loopy-happy/400/400" 
            alt="Happy Loopy" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-white shadow-xl mb-4"
          />
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-white p-2 rounded-full shadow-lg text-xs font-bold animate-bounce">
            HAPPY BIRTHDAY!
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-romance text-pink-600 leading-tight">
          Chúc Mừng Sinh Nhật <br/> Công Chúa Nhỏ Bé Của Anh!
        </h2>
        
        <div className="flex justify-center gap-2">
          {['🎂', '💖', '✨', '🎈', '🧸'].map((emoji, i) => (
            <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content - Birthday Letter */}
      <div className="mt-8 z-10 w-full max-w-md px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-pink-200 relative">
          <div className="absolute -top-4 -left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
            Thư tình gửi em
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center py-10 space-y-4">
              <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-pink-500">Đang gói ghém lời chúc...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-pink-700 text-lg leading-relaxed italic text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-pink-600 first-letter:mr-1">
                "{message?.content}"
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {message?.wishes.map((wish, idx) => (
                  <div key={idx} className="bg-pink-100 p-3 rounded-2xl flex items-center gap-3 border border-pink-200">
                    <span className="text-pink-500 text-xl">💝</span>
                    <span className="text-pink-600 font-semibold">{wish}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <div className="text-right">
              <p className="text-pink-400 text-sm italic">Mãi yêu em bé của anh,</p>
              <p className="text-pink-600 font-romance text-2xl">Người yêu của em ❤️</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Simulation */}
      <div className="mt-10 z-10 w-full max-w-md px-4 space-y-6">
        <h3 className="text-2xl font-romance text-pink-600 text-center">Những Kỷ Niệm Đáng Yêu</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-2 rounded-xl shadow-md rotate-[-3deg] border-4 border-white transform hover:rotate-0 transition duration-300">
            <img src="./styles/1.jpg" alt="Moment 1" className="rounded-lg w-full h-40 object-cover" />
          </div>
          <div className="bg-white p-2 rounded-xl shadow-md rotate-[3deg] border-4 border-white transform hover:rotate-0 transition duration-300">
            <img src="./styles/4.jpg" alt="Moment 2" className="rounded-lg w-full h-40 object-cover" />
          </div>
          <div className="bg-white p-2 rounded-xl shadow-md rotate-[-2deg] border-4 border-white transform hover:rotate-0 transition duration-300">
            <img src="./styles/3.jpg" alt="Moment 3" className="rounded-lg w-full h-40 object-cover" />
          </div>
          <div className="bg-white p-2 rounded-xl shadow-md rotate-[2deg] border-4 border-white transform hover:rotate-0 transition duration-300">
            <img src="./styles/2.jpg" alt="Moment 4" className="rounded-lg w-full h-40 object-cover" />
          </div>
        </div>
      </div>

      {/* Footer Floating Loopy */}
      <div className="mt-12 mb-8 z-10 flex flex-col items-center gap-4">
        <img 
          src="./styles/5.jpg" 
          alt="Cute" 
          className="w-24 h-24 animate-bounce"
        />
        <p className="text-pink-400 text-xs tracking-widest uppercase">Make with Love for My Princess</p>
      </div>
      
      {/* Persistent Call-to-action button (Sticky at bottom for mobile) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center bg-gradient-to-t from-pink-50 to-transparent pointer-events-none">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white text-pink-500 rounded-full py-2 px-6 shadow-xl border border-pink-200 pointer-events-auto font-bold flex items-center gap-2"
        >
          Trở về đầu trang 🌸
        </button>
      </div>
    </div>
  );
};

export default App;
