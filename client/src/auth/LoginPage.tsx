import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import styles from './LoginPage.module.scss';
import useSupabase from '../hooks/useSupabase';

const LoginPage = () => {
   const supabase = useSupabase();

   return (
      <div className={styles.auth}>
         <div className="">
            <Auth
               supabaseClient={supabase}
               appearance={{
                  theme: ThemeSupa,
                  variables: {
                     default: {
                        colors: {
                           brand: 'darkgrey',
                           brandAccent: 'grey',
                        },
                     },
                  },
                  style: {
                     container: {
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        margin: 0,
                        padding: 10,
                        minWidth: 300,
                     },
                     divider: {
                        margin: 0,
                        borderTop: '1px solid lightgrey',
                     },
                  },
               }}
               providers={['google', 'github']}
            />
         </div>
      </div>
   );
};

export default LoginPage;
