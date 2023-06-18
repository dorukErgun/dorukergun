"use client";
import { useEffect, useState } from "react";

export default function DarkCursor(){
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event : any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here (0.5 = 50%)
          borderRadius: '50%',
        }}
      ></div>
    </div>
  );

}