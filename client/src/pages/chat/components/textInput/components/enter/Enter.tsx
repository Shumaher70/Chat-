import { VscSend } from 'react-icons/vsc';
import styles from './Enter.module.scss';
import { useEffect, useState } from 'react';

interface EnterProps {
   input: string;
   handleClearInput: () => void;
   shiftKey: boolean;
}

const Enter = ({ input, handleClearInput, shiftKey }: EnterProps) => {
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
      if (keyword === 'Enter' && !shiftKey) {
         handleClearInput();
         setEnter(true);
      } else if (input !== '') {
         setEnter(false);
      }
   }, [handleClearInput, input, keyword, shiftKey]);

   const handleClick = () => {
      handleClearInput();
      setEnter(true);
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
