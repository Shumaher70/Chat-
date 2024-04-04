import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import TextInput from './components/textInput/TextInput';

import styles from './Chat.module.scss';
import useObserver from '../../hooks/useObserver';
import { useAppSelector } from '../../redux/hooks/hooks';
import { dashboardTrigger } from './utils/dashboardTrigger';
import Burger from './components/sidebarToggle/burger/Burger';
import { io } from 'socket.io-client';

const Chat = () => {
   const [width] = useObserver();
   const dashboardTriggerSlice = useAppSelector(
      (state) => state.dashboardReducer.trigger
   );

   const socket = io('http://localhost:4000');

   const trigger: string = dashboardTrigger(
      width,
      dashboardTriggerSlice,
      styles.dashboardContainerHiding,
      styles.dashboardContainerShowing
   );

   return (
      <main className={styles.chat}>
         <div className={styles.burger}>
            <Burger />
         </div>

         <div className={`${styles.dashboardContainer} ${trigger}`}>
            <Dashboard />
         </div>

         <div className={styles.message_textInput_container}>
            <Messages />
            <TextInput />
         </div>
      </main>
   );
};

export default Chat;
