import { TextField } from '@mui/material';
import styles from './UserNameSetting.module.scss';
import useCustomTextInputTheme from '../../../../../textInput/useCustomTextInputTheme';
import { CgSpinner } from 'react-icons/cg';

import { CiCircleCheck } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../../../../redux/hooks/hooks';
import useChangeUserName from './components/useChangeUserName';
import { addUserAction } from '../../../../../../../../redux/slices/userSlice';

const UserNameSetting = () => {
   const { theme } = useCustomTextInputTheme('0');
   const user = useAppSelector((state) => state.userReducer);
   const dispatch = useAppDispatch();

   const [input, setInput] = useState<string>('');
   const [userName, setUserName] = useState<string | number>(
      user?.name as string
   );
   const { changeName, loading, success, error } = useChangeUserName(
      user.user_id as string,
      input
   );

   useEffect(() => {
      setUserName(user.name as string);
   }, [user.name]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(
         event.target.value.length < 20
            ? event.target.value
            : event.target.value.slice(0, 20)
      );
   };

   const handleClick = () => {
      if (input.length !== 0) {
         changeName();
         dispatch(addUserAction({ ...user, name: input }));
         setInput('');
      }
   };

   return (
      <div className={styles.userNameSetting}>
         <TextField
            id="TextField"
            label={userName}
            variant="filled"
            sx={theme}
            autoComplete="off"
            onChange={handleChange}
            value={input}
         />

         {!loading ? (
            <CiCircleCheck
               className={`${styles.submit} ${success && `${styles.success}`} ${
                  error && `${styles.reject}`
               }`}
               onClick={handleClick}
            />
         ) : (
            <CgSpinner className={`${styles.spinner}`} />
         )}
      </div>
   );
};

export default UserNameSetting;
