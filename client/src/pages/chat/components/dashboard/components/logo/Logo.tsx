import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../../redux/hooks/hooks';

import BackButton from './backButton/BackButton';

import UserIcon from './userIcon/UserIcon';
import { RiArrowGoBackLine } from 'react-icons/ri';

import styles from './Logo.module.scss';
import { changeRoomAction } from '../../../../../../redux/slices/roomsSlice';
import { socket } from '../../../../Chat';
const Logo = () => {
   const { trigger, room } = useAppSelector((state) => state.roomReducer);

   const dispatch = useAppDispatch();

   const handleClick = () => {
      const id = socket.id;
      socket.emit('leaveRoom', { room, id });
      dispatch(changeRoomAction(false));
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
