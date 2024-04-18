import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
   process.env.REACT_APP_SUPERBASE_URL as string,
   process.env.REACT_APP_SUPEBASE_PUBLICK_KEY as string
);

const useSupabase = () => {
   if (supabase) {
      return supabase;
   } else {
      throw new Error('something went wrong can not connect to supabase');
   }
};

export default useSupabase;
