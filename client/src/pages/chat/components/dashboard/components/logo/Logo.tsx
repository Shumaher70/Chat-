import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../../redux/hooks/hooks';

import BackButton from './backButton/BackButton';

import UserIcon from './userIcon/UserIcon';
import { RiArrowGoBackLine } from 'react-icons/ri';

import styles from './Logo.module.scss';
import { getRoomIdAction } from '../../../../../../redux/slices/roomsSlice';
import useLeaveRoomSocket from '../../../../../../hooks/useLeaveRoomSocket';
import {
   roomAction,
   roomsAction,
} from '../../../../../../redux/slices/dashboardSlice';
const Logo = () => {
   const { room } = useAppSelector((state) => state.dashboardReducer);
   const { handleLeaveRoom } = useLeaveRoomSocket();
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(roomAction(false));
      dispatch(roomsAction(true));
      dispatch(getRoomIdAction(null));
      handleLeaveRoom();
   };

   return (
      <div className={`${styles.logoContainer} dark-1`}>
         {room && (
            <RiArrowGoBackLine className={styles.back} onClick={handleClick} />
         )}
         <UserIcon />
         <BackButton />
      </div>
   );
};

export default Logo;
