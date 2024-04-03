import { TextField } from '@mui/material';
import styles from './TextInput.module.scss';
import useCustomTextInputTheme from './useCustomTextInputTheme';
import { useState } from 'react';
import Enter from './components/enter/Enter';
const TextInput = () => {
   const [input, setInput] = useState<string>('');
   const [shiftKey, setShiftKey] = useState<boolean>(false);
   const { theme } = useCustomTextInputTheme();

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   const handleClearInput = () => {
      setInput('');
   };

   return (
      <div className={`${styles.textInput} dark-2`}>
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
