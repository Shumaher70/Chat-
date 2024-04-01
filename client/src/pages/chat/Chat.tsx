import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import TextInput from './components/textInput/TextInput';

import styles from './Chat.module.scss';

const Chat = () => {
   return (
      <main className={styles.chat}>
         <Dashboard />
         <div className={styles.message_textInput_container}>
            <Messages />
            <TextInput />
         </div>
      </main>
   );
};

export default Chat;
