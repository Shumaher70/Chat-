import { TextField } from '@mui/material';
import useCustomTextInputTheme from '../../../../../textInput/useCustomTextInputTheme';
import { addRoomType } from '../../CreateRoom';
import { useState } from 'react';

interface RoomNameProps {
   setRoom: React.Dispatch<React.SetStateAction<addRoomType>>;
}

const RoomName = ({ setRoom }: RoomNameProps) => {
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
         room_name: input,
      }));
   };

   return (
      <TextField
         id="TextField"
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
