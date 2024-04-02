import { TextField } from '@mui/material';
import styles from './TextInput.module.scss';
import useCustomTextInputTheme from './useCustomTextInputTheme';
const TextInput = () => {
   const { theme } = useCustomTextInputTheme();
   return (
      <div className={`${styles.textInput} dark-2`}>
         <div className={`${styles.inputContainer}`}>
            <TextField
               id="outlined-basic"
               label="Enter your message"
               variant="filled"
               sx={theme}
            />
         </div>
      </div>
   );
};

export default TextInput;
