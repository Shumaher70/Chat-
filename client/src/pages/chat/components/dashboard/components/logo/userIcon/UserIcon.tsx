import useGetUser from '../../../../../../../hooks/useGetUser';
import { FaUser } from 'react-icons/fa';
import styles from './UserIcon.module.scss';

const UserIcon = () => {
   const { user } = useGetUser();

   const avata = user.avatar ? (
      <img src={user.avatar as string} alt="avatar" />
   ) : (
      <FaUser className={styles.avatar} />
   );

   return <div className={styles.userIcon}>{avata}</div>;
};

export default UserIcon;
