import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import TextInput from './components/textInput/TextInput';

import styles from './Chat.module.scss';
import useObserver from '../../hooks/useObserver';
import { useAppSelector } from '../../redux/hooks/hooks';
import { dashboardTrigger } from './utils/dashboardTrigger';
import { io } from 'socket.io-client';
import Header from './components/header/Header';
import usePostUser from '../../hooks/usePostUser';

export const socket = io('http://localhost:4000');
const Chat = () => {
   usePostUser();
   const [width] = useObserver();
   const dashboardTriggerSlice = useAppSelector(
      (state) => state.dashboardReducer.trigger
   );

   const trigger: string = dashboardTrigger(
      width,
      dashboardTriggerSlice,
      styles.dashboardContainerHiding,
      styles.dashboardContainerShowing
   );

   return (
      <main className={styles.chat}>
         <div className={`${styles.dashboardContainer} ${trigger}`}>
            <Dashboard />
         </div>

         <div className={styles.message_textInput_container}>
            <Header />
            <Messages />
            <TextInput />
         </div>
      </main>
   );
};

export default Chat;
