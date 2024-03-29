import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import styles from './LoadingPage.module.scss';
import { supabase } from './AuthLayout';

const LoginPage = () => {
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
