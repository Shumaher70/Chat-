import { VscSend } from 'react-icons/vsc';
import styles from './Enter.module.scss';
import { useEffect, useLayoutEffect, useState } from 'react';

interface EnterProps {
   input: string;
   handleClearInput: () => void;
}

const Enter = ({ input, handleClearInput }: EnterProps) => {
   const [keyword, setKeyword] = useState<string>('');
   const [enter, setEnter] = useState<boolean>(false);

   useEffect(() => {
      const handleKeyword = (event: KeyboardEvent) => {
         setKeyword(event.key);
      };
      window.addEventListener('keydown', handleKeyword);
      return () => window.removeEventListener('keydown', handleKeyword);
      //eslint-disable-next-line
   }, []);

   useEffect(() => {
      const handleAnimation = () => {
         if (keyword === 'Enter') {
            handleClearInput();
            setEnter(true);
         } else if (input !== '') {
            setEnter(false);
         }
      };
      handleAnimation();
   }, [handleClearInput, input, keyword]);

   const handleClick = () => {
      setEnter(true);
      handleClearInput();
   };

   return (
      <VscSend
         className={`${styles.enter} icon-dark-1 ${enter && styles.animation} ${
            keyword === '' && styles.opacity
         }`}
         onClick={handleClick}
      />
   );
};

export default Enter;
