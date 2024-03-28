import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
