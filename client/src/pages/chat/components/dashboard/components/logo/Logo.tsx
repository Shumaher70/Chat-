import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../../redux/hooks/hooks';

import BackButton from './backButton/BackButton';

import UserIcon from './userIcon/UserIcon';
import { RiArrowGoBackLine } from 'react-icons/ri';

import styles from './Logo.module.scss';
import {
   changeRoomAction,
   getRoomIdAction,
} from '../../../../../../redux/slices/roomsSlice';
import useLeaveRoomSocket from '../../../../../../hooks/useLeaveRoomSocket';
const Logo = () => {
   const { trigger } = useAppSelector((state) => state.roomReducer);
   const { handleLeaveRoom } = useLeaveRoomSocket();
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(changeRoomAction(false));
      dispatch(getRoomIdAction(null));
      handleLeaveRoom();
   };

   return (
      <div className={`${styles.logoContainer} dark-1`}>
         {trigger && (
            <RiArrowGoBackLine className={styles.back} onClick={handleClick} />
         )}
         <UserIcon />
         <BackButton />
      </div>
   );
};

export default Logo;
