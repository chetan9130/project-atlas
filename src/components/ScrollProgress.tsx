import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = (scrollTop / scrollableHeight) * 100;
      
      setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-border z-50">
        <div 
          className="h-full bg-gradient-to-r from-tech-cyan via-tech-purple to-tech-pink transition-all duration-300"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Percentage Indicator */}
      <div className="fixed bottom-8 right-8 z-50 glass-effect px-4 py-2 rounded-full border border-tech-cyan/30 hidden md:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-tech-cyan rounded-full animate-pulse" />
          <span className="text-sm font-mono text-foreground font-bold">
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;
