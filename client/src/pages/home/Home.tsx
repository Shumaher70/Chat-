import styles from './Home.module.scss';
import ButtonGray from '../../components/ButtonGray';

import image from '../../images/home/spiral.webp';

const Home = () => {
   return (
      <div className={styles.container}>
         <img src={image} alt="spiral" />

         <h1 className="hero">Connect to chat</h1>

         <div>
            <ButtonGray variant="contained" size="large">
               sing in
            </ButtonGray>

            <ButtonGray variant="contained" size="large">
               sing out
            </ButtonGray>
         </div>
      </div>
   );
};

export default Home;
