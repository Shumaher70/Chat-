import styles from './Logo.module.scss';
import BackButton from './backButton/BackButton';
import UserIcon from './userIcon/UserIcon';
const Logo = () => {
   return (
      <div className={`${styles.logo} dark-1`}>
         <p>Chat-</p>
         <UserIcon />
         <BackButton />
      </div>
   );
};

export default Logo;
