import React from 'react';
export const BackgroundDecoration = () => {
  return <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Cherry blossom top-right */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10C100 10 85 35 85 50C85 65 100 75 100 75C100 75 115 65 115 50C115 35 100 10 100 10Z" fill="#F8B3C5" />
          <path d="M135 35C135 35 110 30 100 40C90 50 90 70 90 70C90 70 110 80 120 70C130 60 135 35 135 35Z" fill="#F8B3C5" />
          <path d="M65 35C65 35 90 30 100 40C110 50 110 70 110 70C110 70 90 80 80 70C70 60 65 35 65 35Z" fill="#F8B3C5" />
          <path d="M135 105C135 105 110 110 100 100C90 90 90 70 90 70C90 70 110 60 120 70C130 80 135 105 135 105Z" fill="#F8B3C5" />
          <path d="M65 105C65 105 90 110 100 100C110 90 110 70 110 70C110 70 90 60 80 70C70 80 65 105 65 105Z" fill="#F8B3C5" />
          <circle cx="100" cy="70" r="10" fill="#FFD700" />
        </svg>
      </div>
      {/* Small cherry blossom mid-left */}
      <div className="absolute top-1/3 left-0 w-48 h-48 opacity-10 -translate-x-1/2">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10C100 10 85 35 85 50C85 65 100 75 100 75C100 75 115 65 115 50C115 35 100 10 100 10Z" fill="#F8B3C5" />
          <path d="M135 35C135 35 110 30 100 40C90 50 90 70 90 70C90 70 110 80 120 70C130 60 135 35 135 35Z" fill="#F8B3C5" />
          <path d="M65 35C65 35 90 30 100 40C110 50 110 70 110 70C110 70 90 80 80 70C70 60 65 35 65 35Z" fill="#F8B3C5" />
          <path d="M135 105C135 105 110 110 100 100C90 90 90 70 90 70C90 70 110 60 120 70C130 80 135 105 135 105Z" fill="#F8B3C5" />
          <path d="M65 105C65 105 90 110 100 100C110 90 110 70 110 70C110 70 90 60 80 70C70 80 65 105 65 105Z" fill="#F8B3C5" />
          <circle cx="100" cy="70" r="10" fill="#FFD700" />
        </svg>
      </div>
      {/* Wave pattern bottom-left */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#0B3954" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#0B3954" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0B3954" />
        </svg>
      </div>
      {/* Vertical brush stroke */}
      <div className="absolute top-1/4 left-0 h-96 w-4 bg-red-800 opacity-8 transform -rotate-12"></div>
      {/* Horizontal brush stroke */}
      <div className="absolute top-3/4 right-0 h-4 w-64 bg-indigo-900 opacity-8 transform rotate-6"></div>
      {/* Circle decoration */}
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border-4 border-indigo-900/5"></div>
      {/* Small dots pattern */}
      <div className="absolute bottom-1/4 left-1/4 grid grid-cols-3 gap-4 opacity-10">
        {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-red-700"></div>)}
      </div>
    </div>;
};