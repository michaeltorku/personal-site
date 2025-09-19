import React, { useEffect, useState } from 'react';
export const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100
  });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  return <div className="custom-cursor bg-indigo-500" style={{
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isHovering ? 1.5 : 1})`,
    opacity: 0.7
  }}></div>;
};