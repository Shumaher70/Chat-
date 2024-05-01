import styles from './Setting.module.scss';
import UserNameSetting from './components/userNameSetting/UserNameSetting';

const Setting = () => {
   return (
      <div className={styles.setting}>
         <UserNameSetting />
      </div>
   );
};

export default Setting;
