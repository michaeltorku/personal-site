import React, { useEffect, useState, useRef } from 'react';
interface SkillBarProps {
  name: string;
  level: number; // 0-100
  color?: string;
}
export const SkillBar: React.FC<SkillBarProps> = ({
  name,
  level,
  color = 'bg-red-700'
}) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setWidth(level);
        }, 200);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [level]);
  return <div ref={skillRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-stone-800 dark:text-stone-200">{name}</span>
        <span className="text-stone-600 dark:text-stone-400">{level}%</span>
      </div>
      <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`} style={{
        width: `${width}%`
      }}></div>
      </div>
    </div>;
};