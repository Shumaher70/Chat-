import useSupabase from './useSupabase';

const useSingOut = () => {
   const supabase = useSupabase();

   const handleSignOut = async () => {
      await supabase.auth.signOut();
   };

   return { handleSignOut };
};

export default useSingOut;
