import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: "fast" | "normal" | "slow";
  threshold?: number;
  animation?:
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "scale-in-up"
    | "bounce-in"
    | "slide-in-from-bottom"
    | "fade-in";
}

const durationMap = {
  fast: "duration-300",
  normal: "duration-700",
  slow: "duration-1000",
};

export function AnimatedFadeInUp({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? `animate-fade-in-up ${durationMap[duration]}` : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedFadeInDown({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? `animate-fade-in-down ${durationMap[duration]}`
          : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedFadeInLeft({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? `animate-fade-in-left ${durationMap[duration]}`
          : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedFadeInRight({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? `animate-fade-in-right ${durationMap[duration]}`
          : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedScaleInUp({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? `animate-scale-in-up ${durationMap[duration]}`
          : "opacity-0 scale-95"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedBounceIn({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? `animate-bounce-in ${durationMap[duration]}`
          : "opacity-0 scale-50"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedSlideInFromBottom({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? `animate-slide-in-from-bottom ${durationMap[duration]}`
          : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedStaggerContainer({
  children,
  className = "",
  itemCount = 0,
}: {
  children: React.ReactNode;
  className?: string;
  itemCount?: number;
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        const delay = isVisible ? index * 100 : 0;
        return (
          <div
            style={{
              animation: isVisible
                ? `fade-in-up 0.7s ease-out ${delay}ms forwards`
                : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function AnimationWrapper({
  children,
  className = "",
  delay = 0,
  duration = "normal",
  threshold = 0.1,
  animation = "fade-in-up",
}: AnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true,
  });

  const animationClass = `animate-${animation} ${durationMap[duration]}`;

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass : "opacity-0"} ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
