import LightMode from '../../../../components/lightMode/LightMode';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import Burger from '../sidebarToggle/burger/Burger';
import styles from './Header.module.scss';

const Header = () => {
   const { roomName } = useAppSelector((state) => state.roomReducer);
   const { room } = useAppSelector((state) => state.dashboardReducer);

   return (
      <div className={`${styles.header}`}>
         {room && (
            <h1 className={`${styles.title} ${room && styles.showing}`}>
               {roomName}
            </h1>
         )}

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
