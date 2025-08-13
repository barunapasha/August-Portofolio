/*
	Installed from https://reactbits.dev/tailwind/
*/

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CountUp = ({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  ease = 'power2.out',
  separator = '',
  suffix = '',
  prefix = '',
  className = '',
  threshold = 0.3,
  once = true
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animateCount = () => {
      if (hasAnimated.current && once) return;
      
      hasAnimated.current = true;
      
      gsap.to({ value: start }, {
        value: end,
        duration,
        delay,
        ease,
        onUpdate: function() {
          const currentValue = Math.round(this.targets()[0].value);
          setCount(currentValue);
        }
      });
    };

    ScrollTrigger.create({
      trigger: el,
      start: `top ${(1 - threshold) * 100}%`,
      onEnter: animateCount,
      onEnterBack: once ? null : animateCount,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [start, end, duration, delay, ease, threshold, once]);

  const formatNumber = (num) => {
    if (separator === ',') {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return num.toString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default CountUp;