import React from 'react';
import { BrandLogo } from './components/BrandLogo';

const App: React.FC = () => {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center bg-paper text-ink p-6 selection:bg-[#EAE8E4] selection:text-ink overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      
      {/* Main Container */}
      <main className="flex flex-col items-center w-full max-w-4xl space-y-8 md:space-y-12">
        
        {/* The Hero Logo with subtle breathing animation */}
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl px-4 md:px-0 animate-subtle-float">
          <BrandLogo className="w-full h-auto drop-shadow-sm opacity-90 transition-opacity duration-500 hover:opacity-100" />
        </div>

        {/* Minimal Status Text */}
        <div className="text-center">
          <p className="font-sans font-light text-xs md:text-sm text-gray-400 tracking-[0.2em] uppercase">
            Available soon for iPad
          </p>
        </div>

      </main>

    </div>
  );
};

export default App;