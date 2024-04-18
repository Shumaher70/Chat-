import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import LoginPage from './auth/LoginPage';

import ThemeProvider from './components/lightMode/ThemeProvider';
import Chat from './pages/chat/Chat';
import useAuth from './hooks/useAuth';
import { useAppSelector } from './redux/hooks/hooks';

function App() {
   useAuth();
   const { user } = useAppSelector((state) => state.authUserReducer);
   return (
      <ThemeProvider>
         <BrowserRouter>
            <Routes>
               <Route path="*" element={<NotFound />} />
               <Route
                  path="/"
                  element={user ? <Navigate to="/chat" /> : <Home />}
               />
               <Route
                  path="/login"
                  element={user ? <Navigate to="/chat" /> : <LoginPage />}
               />
               <Route
                  path="/chat"
                  element={user ? <Chat /> : <Navigate to="/" />}
               />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
