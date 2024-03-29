import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import LoginPage from './auth/LoginPage';
import AuthLayout from './auth/AuthLayout';
import ThemeProvider from './components/lightMode/ThemeProvider';

function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <Routes>
               <Route path="*" element={<NotFound />} />
               <Route element={<AuthLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/chat" element={<div>chat</div>} />
               </Route>
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
