import styles from './Home.module.scss';
import ButtonGray from '../../components/ButtonGray';

import { useNavigate } from 'react-router-dom';
import LightMode from '../../components/lightMode/LightMode';

const Home = () => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate('/login');
   };

   return (
      <main className={styles.container}>
         <h1 className="hero">Welcome to chat.</h1>

         <div>
            <ButtonGray onClick={handleClick} variant="contained" size="large">
               Get Started
            </ButtonGray>
         </div>

         <div className={styles.lightMode}>
            <LightMode />
         </div>
      </main>
   );
};

export default Home;
