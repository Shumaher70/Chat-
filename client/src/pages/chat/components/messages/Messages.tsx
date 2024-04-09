import styles from './Messages.module.scss';
import UserMessage from './components/userMessage/UserMessage';
import UsersMessages from './components/usersMessages/UsersMessages';

const Messages = () => {
   return (
      <div className={styles.messagesContainer}>
         <div className={styles.messages}>
            <UsersMessages>users</UsersMessages>
            <UserMessage>user</UserMessage>
         </div>
      </div>
   );
};

export default Messages;
