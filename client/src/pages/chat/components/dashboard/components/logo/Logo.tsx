import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../../redux/hooks/hooks';

import BackButton from './backButton/BackButton';

import UserIcon from './userIcon/UserIcon';
import { RiArrowGoBackLine } from 'react-icons/ri';

import styles from './Logo.module.scss';
import { changeRoomAction } from '../../../../../../redux/slices/roomsSlice';
const Logo = () => {
   const { trigger, room } = useAppSelector((state) => state.roomReducer);

   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(changeRoomAction(false));
   };

   return (
      <div className={`${styles.logoContainer} dark-1`}>
         {!trigger && <p className={styles.logo}>Chat-</p>}
         <div className={styles.backContainer} onClick={handleClick}>
            {trigger && <p className={styles.logo}>{room}</p>}
            {trigger && <RiArrowGoBackLine className={styles.back} />}
         </div>
         <UserIcon />
         <BackButton />
      </div>
   );
};

export default Logo;
