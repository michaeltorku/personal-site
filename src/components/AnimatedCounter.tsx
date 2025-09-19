import React, { useEffect, useState, useRef } from 'react';
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const easeOutQuad = (t: number): number => t * (2 - t);
  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    const progress = timestamp - startTimeRef.current;
    const progressRatio = Math.min(progress / duration, 1);
    const easedProgress = easeOutQuad(progressRatio);
    const currentCount = Math.floor(easedProgress * end);
    setCount(currentCount);
    if (progressRatio < 1) {
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(end);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        frameRef.current = requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end]);
  return <div ref={countRef} className="text-4xl font-bold text-red-700 dark:text-red-500">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>;
};