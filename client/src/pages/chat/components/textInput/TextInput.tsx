import { TextField } from '@mui/material';
import styles from './TextInput.module.scss';
import useCustomTextInputTheme from './useCustomTextInputTheme';
import { useEffect, useState } from 'react';
import Enter from './components/enter/Enter';
import { useAppSelector } from '../../../../redux/hooks/hooks';

const TextInput = () => {
   const [input, setInput] = useState<string>('');
   const [shiftKey, setShiftKey] = useState<boolean>(false);
   const { theme } = useCustomTextInputTheme();
   const roomSlice = useAppSelector((state) => state.roomReducer.trigger);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   const handleClearInput = () => {
      setInput('');
   };

   useEffect(() => {
      if (!roomSlice) {
         setInput('');
      }
   }, [roomSlice]);

   return (
      <div
         className={`${styles.textInput} dark-2 ${
            roomSlice ? styles.showing : styles.hidden
         }`}
      >
         <div className={`${styles.inputContainer}`}>
            <TextField
               multiline
               maxRows={4}
               minRows={2}
               label="Enter your message"
               variant="filled"
               sx={theme}
               onChange={handleChange}
               value={input}
               onKeyDown={(e) => setShiftKey(e.shiftKey)}
            />
            <Enter
               input={input}
               handleClearInput={handleClearInput}
               shiftKey={shiftKey}
            />
         </div>
      </div>
   );
};

export default TextInput;
