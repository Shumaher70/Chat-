import styles from './Home.module.scss';
import ButtonGray from '../../components/ButtonGray';

import { useNavigate } from 'react-router-dom';
import { Session, createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import CloseIcon from '@mui/icons-material/Close';

const supabase = createClient(
   process.env.REACT_APP_SUPERBASE_URL as string,
   process.env.REACT_APP_SUPEBASE_PUBLICK_KEY as string
);

const Home = () => {
   const [session, setSession] = useState<Session | null>(null);
   const [showAuth, setShowAuth] = useState<boolean>(false);
   const navigate = useNavigate();

   useEffect(() => {
      if (session) {
         navigate('/chat');
      }

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

   const handleClick = () => {
      setShowAuth((previous) => !previous);
   };

   return (
      <>
         <div className={styles.container}>
            <h1 className="hero">Welcome to chat.</h1>

            <div>
               <ButtonGray
                  onClick={handleClick}
                  variant="contained"
                  size="large"
               >
                  Get Started
               </ButtonGray>
            </div>
         </div>

         {showAuth && (
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

               <CloseIcon onClick={handleClick} className={styles.close} />
            </div>
         )}
      </>
   );
};

export default Home;
