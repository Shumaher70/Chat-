import { TextField } from '@mui/material';
import useCustomTextInputTheme from '../../../../../textInput/useCustomTextInputTheme';
import { addRoomType } from '../../CreateRoom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface RoomNameProps {
   setRoom: React.Dispatch<React.SetStateAction<addRoomType>>;
   error: {
      error: boolean;
      message: string | null;
   };
}

const RoomName = ({ setRoom, error }: RoomNameProps) => {
   const { theme } = useCustomTextInputTheme('0');
   const [input, setInput] = useState<string>('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (event.currentTarget.value.length <= 15) {
         setInput(event.currentTarget.value);
      }
   };

   const handleBlur = () => {
      setRoom((priv) => ({
         ...priv,
         room_id: uuidv4(),
         room_name: input,
      }));
   };

   return (
      <TextField
         id="TextField"
         error={error.error}
         helperText={`${error.error ? error.message : ''}`}
         label={'Enter room name'}
         variant="filled"
         sx={theme}
         autoComplete="off"
         onBlur={handleBlur}
         onChange={handleChange}
         value={input}
      />
   );
};

export default RoomName;
