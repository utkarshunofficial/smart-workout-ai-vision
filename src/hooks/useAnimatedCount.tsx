
import { useState, useEffect, useRef } from 'react';

export function useAnimatedCount(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    countRef.current = 0;
    setCount(0);
    
    const step = Math.max(1, Math.floor(target / (duration / 16)));
    const animate = () => {
      if (countRef.current < target) {
        const next = Math.min(countRef.current + step, target);
        countRef.current = next;
        setCount(next);
        timerRef.current = window.requestAnimationFrame(animate);
      }
    };
    
    timerRef.current = window.requestAnimationFrame(animate);
    
    return () => {
      if (timerRef.current !== null) {
        window.cancelAnimationFrame(timerRef.current);
      }
    };
  }, [target, duration]);

  return count;
}
