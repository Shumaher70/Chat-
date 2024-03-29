import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import LoginPage from './auth/LoginPage';
import AuthLayout from './auth/AuthLayout';

function App() {
   return (
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
   );
}

export default App;
