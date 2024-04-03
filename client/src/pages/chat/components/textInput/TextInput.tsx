import { TextField } from '@mui/material';
import styles from './TextInput.module.scss';
import useCustomTextInputTheme from './useCustomTextInputTheme';
import { useState } from 'react';
import Enter from './components/enter/Enter';
const TextInput = () => {
   const [input, setInput] = useState<string>('');
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
               id="outlined-basic"
               label="Enter your message"
               variant="filled"
               sx={theme}
               onChange={handleChange}
               value={input}
            />
            <Enter input={input} handleClearInput={handleClearInput} />
         </div>
      </div>
   );
};

export default TextInput;
