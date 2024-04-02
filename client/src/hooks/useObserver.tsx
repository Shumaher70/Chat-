import { useLayoutEffect, useState } from 'react';

const useObserver = () => {
   const [size, setSize] = useState<number[]>([0, 0]);
   useLayoutEffect(() => {
      function updateSize() {
         setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
   }, []);
   return size;
};

export default useObserver;
