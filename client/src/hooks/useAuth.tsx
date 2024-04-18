import { useEffect } from 'react';
import useSupabase from './useSupabase';
import { User } from '@supabase/supabase-js';
import { getAuthUserAction } from '../redux/slices/authUserSlice';
import { useAppDispatch } from '../redux/hooks/hooks';

const useAuth = () => {
   const supabase = useSupabase();
   const dispatch = useAppDispatch();
   useEffect(() => {
      (async () => {
         const data: { data: { user: User | null } } =
            await supabase.auth.getUser();
         const { user } = data.data;
         dispatch(getAuthUserAction(user));
      })();
   }, [dispatch, supabase.auth]);
};

export default useAuth;
