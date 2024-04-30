import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { addUserAction } from '../redux/slices/userSlice';

const usePostUser = () => {
   const userSlice = useAppSelector((state) => state.authUserReducer.user);
   const dispatch = useAppDispatch();

   useEffect(() => {
      (async () => {
         try {
            if (!userSlice) return;

            const userName =
               userSlice?.name === ''
                  ? `user${userSlice?.id.slice(0, 3)}`
                  : userSlice?.name;

            const response = await fetch(
               'http://localhost:4000/api/users/add',
               {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                     user_id: userSlice.id,
                     name: userName,
                     avatar: userSlice.avatar,
                  }),
               }
            );

            const users = await response.json();

            if (users.length > 0) {
               dispatch(addUserAction(users[0]));
            } else {
               console.error(`something went wrong user not found1`);
            }

            return users;
         } catch (error: any) {
            console.error(error);
         }
      })();
      //eslint-disable-next-line
   }, []);
};

export default usePostUser;
