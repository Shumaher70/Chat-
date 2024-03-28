import { Session, createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import styles from './LoadingPage.module.scss';

const supabase = createClient(
   process.env.REACT_APP_SUPERBASE_URL as string,
   process.env.REACT_APP_SUPEBASE_PUBLICK_KEY as string
);

const LoginPage = () => {
   const [session, setSession] = useState<Session | null>(null);
   const navigate = useNavigate();

   useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
         setSession(session);
      });

      const {
         data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session);
      });

      return () => subscription.unsubscribe();
   }, [navigate, session]);

   return (
      <div className={styles.auth}>
         <Auth
            supabaseClient={supabase}
            appearance={{
               theme: ThemeSupa,
               style: {
                  container: {
                     backgroundColor: 'white',
                     margin: 0,
                     padding: 10,
                     minWidth: 300,
                  },
                  divider: {
                     margin: 0,
                  },
               },
            }}
            providers={['google', 'github']}
         />
      </div>
   );
};

export default LoginPage;
