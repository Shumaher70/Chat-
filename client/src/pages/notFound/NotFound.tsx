import { useNavigate } from 'react-router-dom';
import ButtonGray from '../../components/ButtonGray';
import styles from './NotFound.module.scss';

const NotFound = () => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate('/');
   };

   return (
      <div className={styles.container}>
         <h1 className="hero">404 not found</h1>
         <ButtonGray onClick={handleClick} size="large">
            to home
         </ButtonGray>
      </div>
   );
};

export default NotFound;
