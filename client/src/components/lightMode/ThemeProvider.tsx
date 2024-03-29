import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const theme = useAppSelector((state) => state.themeReducer.theme);

   useEffect(() => {
      localStorage.setItem('LightMode', theme);

      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   return <>{children}</>;
};

export default ThemeProvider;
