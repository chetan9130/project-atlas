import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = () => {
  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;

    const initScroll = () => {
      scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
        multiplier: 1,
        class: 'is-inview',
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update scroll on window resize
      const handleResize = () => {
        if (scroll) {
          scroll.update();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (scroll) {
          scroll.destroy();
        }
      };
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initScroll, 100);

    return () => {
      clearTimeout(timer);
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);
};
