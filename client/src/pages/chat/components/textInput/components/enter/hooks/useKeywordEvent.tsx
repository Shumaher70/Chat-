import { useEffect, useState } from 'react';

const useKeywordEvent = () => {
   const [keyword, setKeyword] = useState<string>('');

   useEffect(() => {
      const handleKeyword = (event: KeyboardEvent) => {
         setKeyword(event.key);
      };
      window.addEventListener('keydown', handleKeyword);
      return () => window.removeEventListener('keydown', handleKeyword);
      //eslint-disable-next-line
   }, []);
   return keyword;
};

export default useKeywordEvent;
