import LightMode from '../../../../components/lightMode/LightMode';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import styles from './Messages.module.scss';
import UserMessage from './components/userMessage/UserMessage';
import UsersMessages from './components/usersMessages/UsersMessages';

const Messages = () => {
   const { room, trigger } = useAppSelector((state) => state.roomReducer);

   return (
      <div className={styles.messagesContainer}>
         <h1
            className={`${styles.roomName} ${
               trigger ? styles.showing : styles.hidden
            }`}
         >
            {room}
         </h1>
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
