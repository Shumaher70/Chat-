import { useEffect, useState } from 'react';

import { useAppSelector } from '../../../../../../../redux/hooks/hooks';

const useInputEffect = (
   input: string,
   handleClearInput: () => void,
   shiftKey: boolean,
   keyword: string
) => {
   const [enter, setEnter] = useState<boolean>(false);
   const { room } = useAppSelector((state) => state.roomReducer);

   useEffect(() => {
      if (keyword === 'Enter' && !shiftKey) {
         if (input !== '') {
            //socket
         }

         handleClearInput();
         setEnter(true);
      } else if (input !== '') {
         setEnter(false);
      }
   }, [handleClearInput, input, keyword, room, shiftKey]);

   const handleClick = () => {
      if (input !== '') {
         //socket
      }

      handleClearInput();

      setEnter(true);
   };

   return { enter, handleClick };
};

export default useInputEffect;
