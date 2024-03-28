import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import LoginPage from './auth/LoginPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
