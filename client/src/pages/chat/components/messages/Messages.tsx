import LightMode from '../../../../components/lightMode/LightMode';
import styles from './Messages.module.scss';
const Messages = () => {
   return (
      <div className={styles.messages}>
         <div className={styles.lightMode}>
            <LightMode />
         </div>
      </div>
   );
};

export default Messages;
