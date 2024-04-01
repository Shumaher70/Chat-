import { Session, createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks/hooks';
import { getAuthUserAction } from '../redux/slices/authUserSlice';

export const supabase = createClient(
   process.env.REACT_APP_SUPERBASE_URL as string,
   process.env.REACT_APP_SUPEBASE_PUBLICK_KEY as string
);

export const handleAvailablePaths = (
   session: Session | null,
   location: any,
   navigate: any,
   dispatch: any
) => {
   if (
      (location.pathname === '/' && !session) ||
      (location.pathname === '/login' && !session)
   ) {
      return;
   } else if (
      (location.pathname !== '/' && !session) ||
      (location.pathname !== '/login' && !session)
   ) {
      return navigate('/login');
   } else if (
      location.pathname === '/login' ||
      (location.pathname === '/' && session)
   ) {
      dispatch(getAuthUserAction(session!.user));
      return navigate('/chat');
   }
};

const AuthLayout = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
         handleAvailablePaths(session, location, navigate, dispatch);
      });

      const {
         data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
         handleAvailablePaths(session, location, navigate, dispatch);
      });
      return () => subscription.unsubscribe();
   }, [dispatch, location, navigate]);

   return <Outlet />;
};

export default AuthLayout;
