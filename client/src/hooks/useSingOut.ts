import useSupabase from './useSupabase';

const useSingOut = () => {
   const supabase = useSupabase();
   supabase.auth.signOut();
};

export default useSingOut;
