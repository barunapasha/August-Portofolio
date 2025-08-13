declare module '../blocks/Animations/AnimatedContent/AnimatedContent' {
  import { ReactNode } from 'react';
  
  interface AnimatedContentProps {
    children: ReactNode;
    distance?: number;
    direction?: 'vertical' | 'horizontal';
    reverse?: boolean;
    duration?: number;
    ease?: string;
    initialOpacity?: number;
    animateOpacity?: boolean;
    scale?: number;
    threshold?: number;
    delay?: number;
    onComplete?: () => void;
  }
  
  const AnimatedContent: React.FC<AnimatedContentProps>;
  export default AnimatedContent;
}

declare module '../blocks/Animations/SplashCursor/SplashCursor' {
  interface SplashCursorProps {
    color?: string;
    size?: number;
    trailLength?: number;
    fadeSpeed?: number;
    disabled?: boolean;
  }
  
  const SplashCursor: React.FC<SplashCursorProps>;
  export default SplashCursor;
}

declare module '../blocks/Animations/CountUp/CountUp' {
  interface CountUpProps {
    end: number;
    start?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    separator?: string;
    suffix?: string;
    prefix?: string;
    className?: string;
    threshold?: number;
    once?: boolean;
  }
  
  const CountUp: React.FC<CountUpProps>;
  export default CountUp;
}

declare module '../blocks/Animations/FadeIn/FadeIn' {
  import { ReactNode } from 'react';
  
  interface FadeInProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
    distance?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    threshold?: number;
    once?: boolean;
    className?: string;
  }
  
  const FadeIn: React.FC<FadeInProps>;
  export default FadeIn;
}

declare module '../blocks/Animations/Magnet/Magnet' {
  import { ReactNode } from 'react';
  
  interface MagnetProps {
    children: ReactNode;
    padding?: number;
    disabled?: boolean;
    magnetStrength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    wrapperClassName?: string;
    innerClassName?: string;
  }
  
  const Magnet: React.FC<MagnetProps>;
  export default Magnet;
}

declare module '../blocks/TextAnimations/SplitText/SplitText' {
  interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: string;
    from?: object;
    to?: object;
    threshold?: number;
    rootMargin?: string;
    textAlign?: string;
    onLetterAnimationComplete?: () => void;
  }
  
  const SplitText: React.FC<SplitTextProps>;
  export default SplitText;
}

declare module '../blocks/TextAnimations/ShinyText/ShinyText' {
  interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
  }
  
  const ShinyText: React.FC<ShinyTextProps>;
  export default ShinyText;
}