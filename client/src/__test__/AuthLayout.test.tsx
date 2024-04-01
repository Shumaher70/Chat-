import { Session } from '@supabase/supabase-js';
import { handleAvailablePaths } from '../auth/AuthLayout'; // Предполагая, что функция handleAvailablePaths экспортируется из AuthLayout
import { getAuthUserAction } from '../redux/slices/authUserSlice';

describe('handleAvailablePaths', () => {
   it('does not redirect if session is null and pathname is / or /login', () => {
      const location = { pathname: '/' };
      const navigate = jest.fn();
      const dispatch = jest.fn();
      const session = null;

      handleAvailablePaths(session, location, navigate, dispatch);

      expect(navigate).not.toHaveBeenCalled();
      expect(dispatch).not.toHaveBeenCalled();
   });

   it('redirects to /login if session is null and pathname is not / or /login', () => {
      const location = { pathname: '/chat' };
      const navigate = jest.fn();
      const dispatch = jest.fn();
      const session = null;

      handleAvailablePaths(session, location, navigate, dispatch);

      expect(navigate).toHaveBeenCalledWith('/login');
      expect(dispatch).not.toHaveBeenCalled();
   });

   it('dispatches getAuthUserAction and redirects to /chat if session exists and pathname is / or /login', () => {
      const location = { pathname: '/login' };
      const navigate = jest.fn();
      const dispatch = jest.fn();
      const session: Session = {
         user: {
            id: '',
            app_metadata: {},
            user_metadata: {},
            aud: '',
            created_at: '',
         },
         access_token: '',
         refresh_token: '',
         expires_in: 0,
         token_type: '',
      };

      handleAvailablePaths(session, location, navigate, dispatch);

      expect(navigate).toHaveBeenCalledWith('/chat');
      expect(dispatch).toHaveBeenCalledWith(getAuthUserAction(session.user));
   });

   it('does not redirect if session exists and pathname is not / or /login', () => {
      const location = { pathname: '/some-other-page' };
      const navigate = jest.fn();
      const dispatch = jest.fn();
      const session: Session = {
         user: {
            id: '',
            app_metadata: {},
            user_metadata: {},
            aud: '',
            created_at: '',
         },
         access_token: '',
         refresh_token: '',
         expires_in: 0,
         token_type: '',
      };

      handleAvailablePaths(session, location, navigate, dispatch);

      expect(navigate).not.toHaveBeenCalled();
      expect(dispatch).not.toHaveBeenCalled();
   });
});
