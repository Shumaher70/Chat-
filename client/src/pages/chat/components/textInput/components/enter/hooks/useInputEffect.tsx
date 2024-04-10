import { useEffect, useState } from 'react';
import useAuth from '../../../../../../../hooks/useAuth';
import { useAppSelector } from '../../../../../../../redux/hooks/hooks';
import { socket } from '../../../../../Chat';

const useInputEffect = (
   input: string,
   handleClearInput: () => void,
   shiftKey: boolean,
   keyword: string
) => {
   const auth = useAuth();
   const [enter, setEnter] = useState<boolean>(false);
   const { room } = useAppSelector((state) => state.roomReducer);

   useEffect(() => {
      if (keyword === 'Enter' && !shiftKey) {
         if (input !== '') {
            socket.emit('message', {
               id: socket.id,
               room: room,
               userName: auth?.user_metadata.full_name,
               avatar_url: auth?.user_metadata.avatar_url,
               message: input,
            });
         }

         handleClearInput();
         setEnter(true);
      } else if (input !== '') {
         setEnter(false);
      }
   }, [
      auth?.user_metadata.avatar_url,
      auth?.user_metadata.full_name,
      handleClearInput,
      input,
      keyword,
      room,
      shiftKey,
   ]);

   const handleClick = () => {
      if (input !== '') {
         socket.emit('message', {
            id: socket.id,
            room: room,
            userName: auth?.user_metadata.full_name,
            avatar_url: auth?.user_metadata.avatar_url,
            message: input,
         });
      }

      handleClearInput();

      setEnter(true);
   };

   return { enter, handleClick };
};

export default useInputEffect;
