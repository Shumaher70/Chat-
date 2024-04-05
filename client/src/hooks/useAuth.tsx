import { useEffect, useState } from 'react';
import { supabase } from '../auth/AuthLayout';
import { User } from '@supabase/supabase-js';

const useAuth = () => {
   const [auth, setAuth] = useState<User | null>();

   useEffect(() => {
      const handleAuth = async () => {
         const { data } = await supabase.auth.getUser();
         const { user } = data;
         setAuth(user);
      };
      handleAuth();
   }, []);

   return auth;
};

export default useAuth;
