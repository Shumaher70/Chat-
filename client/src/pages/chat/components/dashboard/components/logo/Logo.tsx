import styles from './Logo.module.scss';
import BackButton from './backButton/BackButton';
import UserIcon from './userIcon/UserIcon';
const Logo = () => {
   return (
      <div className={`${styles.logoContainer} dark-1`}>
         <p className={styles.logo}>Chat-</p>
         <UserIcon />
         <BackButton />
      </div>
   );
};

export default Logo;
