import { supabase } from './AuthLayout';

export const singOut = async () => {
   await supabase.auth.signOut();
};
