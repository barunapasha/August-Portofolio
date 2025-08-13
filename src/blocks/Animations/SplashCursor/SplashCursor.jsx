/*
	Installed from https://reactbits.dev/tailwind/
*/

import { useEffect, useRef } from 'react';

const SplashCursor = ({ 
  color = '#6E00FF', 
  size = 8, 
  trailLength = 20,
  fadeSpeed = 0.95,
  disabled = false 
}) => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dots = dotsRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new dot
      dots.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: size
      });

      // Limit trail length
      if (dots.length > trailLength) {
        dots.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw dots
      for (let i = dots.length - 1; i >= 0; i--) {
        const dot = dots[i];
        
        // Fade out
        dot.opacity *= fadeSpeed;
        dot.size *= 0.98;

        // Remove if too faded
        if (dot.opacity < 0.01) {
          dots.splice(i, 1);
          continue;
        }

        // Draw dot
        ctx.save();
        ctx.globalAlpha = dot.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color, size, trailLength, fadeSpeed, disabled]);

  if (disabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SplashCursor;