import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

export const supabase = createClient(
   process.env.REACT_APP_SUPERBASE_URL as string,
   process.env.REACT_APP_SUPEBASE_PUBLICK_KEY as string
);
