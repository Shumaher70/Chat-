import { useEffect, useState } from 'react';

import { useAppSelector } from '../../../../../../../redux/hooks/hooks';
import usePostMessageToRoom from '../../../../../../../hooks/usePostMessageToRoom';

const useInputEffect = (
   input: string,
   handleClearInput: () => void,
   shiftKey: boolean,
   keyword: string
) => {
   const [enter, setEnter] = useState<boolean>(false);
   const { room } = useAppSelector((state) => state.roomReducer);
   const { setMessage_text } = usePostMessageToRoom();

   useEffect(() => {
      if (keyword === 'Enter' && !shiftKey) {
         if (input !== '') {
            setMessage_text(input);
            //socket
         }

         handleClearInput();
         setEnter(true);
      } else if (input !== '') {
         setEnter(false);
      }
   }, [handleClearInput, input, keyword, room, setMessage_text, shiftKey]);

   const handleClick = () => {
      if (input !== '') {
         setMessage_text(input);
         //socket
      }

      handleClearInput();

      setEnter(true);
   };

   return { enter, handleClick };
};

export default useInputEffect;
