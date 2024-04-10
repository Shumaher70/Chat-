import { VscSend } from 'react-icons/vsc';
import styles from './Enter.module.scss';

import useKeywordEvent from './hooks/useKeywordEvent';
import useInputEffect from './hooks/useInputEffect';

interface EnterProps {
   input: string;
   handleClearInput: () => void;
   shiftKey: boolean;
}

const Enter = ({ input, handleClearInput, shiftKey }: EnterProps) => {
   const keyword = useKeywordEvent();
   const { enter, handleClick } = useInputEffect(
      input,
      handleClearInput,
      shiftKey,
      keyword
   );

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
