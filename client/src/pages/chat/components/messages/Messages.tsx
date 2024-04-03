import LightMode from '../../../../components/lightMode/LightMode';
import styles from './Messages.module.scss';
import UserMessage from './components/userMessage/UserMessage';
import UsersMessages from './components/usersMessages/UsersMessages';

const Messages = () => {
   return (
      <div className={styles.messagesContainer}>
         <div className={styles.lightMode}>
            <LightMode />
         </div>
         <div className={styles.messages}>
            <UserMessage />
            <UsersMessages />
         </div>
      </div>
   );
};

export default Messages;
