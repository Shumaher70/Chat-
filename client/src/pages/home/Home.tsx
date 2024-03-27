import styles from './Home.module.scss';
import ButtonGray from '../../components/ButtonGray';

import image from '../../images/home/spiral.webp';
import { useNavigate } from 'react-router-dom';
import { Session, createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';

const supabase = createClient(
   process.env.REACT_APP_SUPERBASE_URL as string,
   process.env.REACT_APP_SUPEBASE_PUBLICK_KEY as string
);

const Home = () => {
   const [session, setSession] = useState<Session | null>(null);
   const [showAuth, setShowAuth] = useState<boolean>(false);
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
   }, []);

   if (session) {
      navigate('/chat');
   }

   const handleClick = () => {
      setShowAuth(true);
   };

   return (
      <>
         {!showAuth && (
            <div className={styles.container}>
               <img src={image} alt="spiral" />

               <h1 className="hero">Connect to chat</h1>

               <div>
                  <ButtonGray
                     onClick={handleClick}
                     variant="contained"
                     size="large"
                  >
                     sing in
                  </ButtonGray>

                  <ButtonGray
                     onClick={handleClick}
                     variant="contained"
                     size="large"
                  >
                     sing up
                  </ButtonGray>
               </div>
            </div>
         )}

         {showAuth && (
            <div className={styles.auth}>
               <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  providers={['google', 'github']}
               />
            </div>
         )}
      </>
   );
};

export default Home;
