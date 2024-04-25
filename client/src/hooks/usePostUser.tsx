import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks/hooks';

const usePostUser = () => {
   const userSlice = useAppSelector((state) => state.authUserReducer.user);

   useEffect(() => {
      (async () => {
         try {
            if (!userSlice) return;
            const userName =
               userSlice.user_metadata.full_name ??
               `user${userSlice.id.slice(0, 3)}`;

            const response = await fetch(
               'http://localhost:4000/api/users/add',
               {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                     user_id: userSlice.id,
                     name: userName,
                     avatar: userSlice.user_metadata.avatar_url,
                  }),
               }
            );
            const users = await response.json();

            return users;
         } catch (error: any) {
            console.error(error);
         }
      })();
      //eslint-disable-next-line
   }, []);
};

export default usePostUser;
