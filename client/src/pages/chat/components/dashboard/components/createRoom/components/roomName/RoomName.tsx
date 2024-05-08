import { TextField } from '@mui/material';
import useCustomTextInputTheme from '../../../../../textInput/useCustomTextInputTheme';
import { addRoomType } from '../../CreateRoom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../../../../../../../redux/hooks/hooks';

interface RoomNameProps {
   setRoom: React.Dispatch<React.SetStateAction<addRoomType>>;
   success: boolean;
   error: {
      error: boolean;
      message: string | null;
   };
}

const RoomName = ({ setRoom, error, success }: RoomNameProps) => {
   const { user_id } = useAppSelector((state) => state.userReducer);

   const { theme } = useCustomTextInputTheme('0');
   const [input, setInput] = useState<string>('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (event.currentTarget.value.length <= 15) {
         setInput(event.currentTarget.value);
      }
   };

   useEffect(() => {
      if (success) {
         setInput('');
      }
   }, [success]);

   const handleBlur = () => {
      setRoom((priv) => ({
         ...priv,
         room_id: uuidv4(),
         room_name: input,
         user_id: user_id as string,
      }));
   };

   return (
      <TextField
         id="TextField"
         error={error.error}
         helperText={`${error.error ? error.message : ''}`}
         label={'Enter Room'}
         variant="filled"
         sx={{
            ...theme,
            boxShadow: '-1px 0px 0px 0px rgba(248, 248, 248, 0.137)',
         }}
         autoComplete="off"
         onBlur={handleBlur}
         onChange={handleChange}
         value={input}
      />
   );
};

export default RoomName;
