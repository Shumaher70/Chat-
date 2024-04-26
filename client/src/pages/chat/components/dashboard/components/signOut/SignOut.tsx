import useSingOut from '../../../../../../hooks/useSingOut';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import { refreshAuthUserAction } from '../../../../../../redux/slices/authUserSlice';
import {
   roomAction,
   roomsAction,
   settingAction,
} from '../../../../../../redux/slices/dashboardSlice';
import styles from './SignOut.module.scss';
import { GoSignOut } from 'react-icons/go';

const SignOut = () => {
   const { handleSignOut } = useSingOut();
   const dispatch = useAppDispatch();

   const handleClick = () => {
      handleSignOut();
      dispatch(refreshAuthUserAction());
      dispatch(roomsAction(true));
      dispatch(roomAction(false));
      dispatch(settingAction());
   };

   return (
      <div className={styles.signout}>
         <div className={styles.signout_icon_container} onClick={handleClick}>
            <GoSignOut className={styles.signout_icon_container_icon} />
            <p>SIGN OUT</p>
         </div>
      </div>
   );
};

export default SignOut;
