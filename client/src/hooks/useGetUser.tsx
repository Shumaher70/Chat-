import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks/hooks';

export interface userType {
   [key: string]: string | number;
}

export const getUser = async (
   id: string,
   setUser: (value: React.SetStateAction<userType>) => void,
   setLoading: (value: React.SetStateAction<boolean>) => void
): Promise<void> => {
   try {
      setLoading(true);

      const response = await fetch(`http://localhost:4000/api/users/get/${id}`);

      if (response.ok) {
         const user = await response.json();

         if (user.id) {
            return setUser(user);
         }
      } else {
         const error = await response.json();
         console.error(`something went wrong`, error);
      }
   } catch (error) {
      console.error(
         `something went wrong when getting user from server: ${error}`
      );
   } finally {
      setLoading(false);
   }
};

const useGetUser = () => {
   const [user, setUser] = useState<userType>({});
   const [loading, setLoading] = useState<boolean>(false);
   const userSlice = useAppSelector((state) => state.authUserReducer.user);

   useEffect(() => {
      if (userSlice?.id) {
         const { id } = userSlice;
         getUser(id, setUser, setLoading);
      }
      //eslint-disable-next-line
   }, [userSlice?.id]);

   return { user, loading };
};

export default useGetUser;
