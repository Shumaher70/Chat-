import { TextField } from '@mui/material';
import styles from './TextInput.module.scss';
import useCustomTextInputTheme from './useCustomTextInputTheme';
import { useEffect, useMemo, useState } from 'react';
import Enter from './components/enter/Enter';
import { useAppSelector } from '../../../../redux/hooks/hooks';

const TextInput = () => {
   const [input, setInput] = useState<string>('');
   const [shiftKey, setShiftKey] = useState<boolean>(false);
   const { theme } = useCustomTextInputTheme();
   const { trigger } = useAppSelector((state) => state.roomReducer);

   const inputMemo = useMemo(() => {
      return input;
   }, [input]);

   const shiftKeyMemo = useMemo(() => {
      return shiftKey;
   }, [shiftKey]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
   };

   const handleClearInput = () => {
      setInput('');
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
      }
      setShiftKey(e.shiftKey);
   };

   useEffect(() => {
      if (!trigger) {
         setInput('');
      }
   }, [trigger]);

   return (
      <>
         {trigger && (
            <div
               className={`${styles.textInput} dark-2 ${
                  trigger && styles.showing
               }`}
            >
               <div className={`${styles.inputContainer}`}>
                  <TextField
                     multiline
                     maxRows={4}
                     minRows={1}
                     label="Enter your message"
                     variant="filled"
                     sx={theme}
                     onChange={handleChange}
                     value={input}
                     onKeyDown={handleKeyDown}
                  />
                  <Enter
                     input={inputMemo}
                     handleClearInput={handleClearInput}
                     shiftKey={shiftKeyMemo}
                  />
               </div>
            </div>
         )}
      </>
   );
};

export default TextInput;
