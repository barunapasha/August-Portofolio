/*
	Installed from https://reactbits.dev/tailwind/
*/

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  once = true,
  className = ''
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let fromVars = { opacity: 0 };
    let toVars = { opacity: 1, duration, ease, delay };

    switch (direction) {
      case 'up':
        fromVars.y = distance;
        toVars.y = 0;
        break;
      case 'down':
        fromVars.y = -distance;
        toVars.y = 0;
        break;
      case 'left':
        fromVars.x = distance;
        toVars.x = 0;
        break;
      case 'right':
        fromVars.x = -distance;
        toVars.x = 0;
        break;
      case 'scale':
        fromVars.scale = 0.8;
        toVars.scale = 1;
        break;
      default:
        break;
    }

    gsap.set(el, fromVars);

    const animation = gsap.to(el, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: once ? 'play none none none' : 'play none none reverse',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [direction, distance, duration, delay, ease, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;