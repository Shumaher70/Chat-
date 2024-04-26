import useGetUser from '../../../../../../../hooks/useGetUser';
import { FaUser } from 'react-icons/fa';
import styles from './UserIcon.module.scss';
import { useAppDispatch } from '../../../../../../../redux/hooks/hooks';
import { settingAction } from '../../../../../../../redux/slices/dashboardSlice';

const UserIcon = () => {
   const { user } = useGetUser();
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(settingAction());
   };

   const avata = user.avatar ? (
      <img src={user.avatar as string} alt="avatar" />
   ) : (
      <FaUser className={styles.avatar} />
   );

   return (
      <div className={styles.userIcon} onClick={handleClick}>
         {avata}
      </div>
   );
};

export default UserIcon;
