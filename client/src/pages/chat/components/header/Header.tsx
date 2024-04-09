import LightMode from '../../../../components/lightMode/LightMode';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import Burger from '../sidebarToggle/burger/Burger';
import styles from './Header.module.scss';

const Header = () => {
   const { room, trigger } = useAppSelector((state) => state.roomReducer);

   return (
      <div className={`${styles.header}`}>
         <h1
            className={`${styles.title} ${
               trigger ? styles.showing : styles.hidden
            }`}
         >
            {room}
         </h1>

         <div className={styles.burger}>
            <Burger />
         </div>

         <div className={styles.theme}>
            <LightMode />
         </div>
      </div>
   );
};

export default Header;
