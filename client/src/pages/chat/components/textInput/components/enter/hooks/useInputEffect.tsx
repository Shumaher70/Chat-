import { useEffect, useState } from 'react';

const useInputEffect = (
   input: string,
   handleClearInput: () => void,
   shiftKey: boolean,
   keyword: string
) => {
   const [enter, setEnter] = useState<boolean>(false);

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

   return { enter, handleClick };
};

export default useInputEffect;
