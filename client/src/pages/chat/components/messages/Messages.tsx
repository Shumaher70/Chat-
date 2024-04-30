import React, { useEffect, useRef } from 'react';
import styles from './Messages.module.scss';
import UserMessage from './components/userMessage/UserMessage';
import UsersMessages from './components/usersMessages/UsersMessages';
import { socket } from '../../Chat';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import useGetMessageInRoom, {
   messageType,
} from '../../../../hooks/useGetMessageInRoom';

const Messages = () => {
   const { room } = useAppSelector((state) => state.dashboardReducer);
   const messageRef = useRef<HTMLDivElement>(null);
   const userSlice = useAppSelector((state) => state.userReducer);
   const { messages } = useGetMessageInRoom();

   useEffect(() => {
      if (messageRef.current && messageRef.current) {
         messageRef.current.scrollTop = messageRef.current.scrollHeight;
      }
      //eslint-disable-next-line
   }, [socket.id]);

   useEffect(() => {
      if (!messages) return;
      if (
         messageRef.current &&
         messages[messages.length - 1].user_id === userSlice.id
      ) {
         messageRef.current.scrollTop = messageRef.current.scrollHeight;
      }
   }, [userSlice.id, messages]);

   return (
      <>
         {messages && room && (
            <div className={styles.messagesContainer}>
               <div ref={messageRef} className={styles.messages}>
                  {messages.map((message: messageType) => {
                     const { id, user_id, message_text, created_at } = message;

                     return (
                        <React.Fragment key={id}>
                           {user_id === userSlice.id ? (
                              <UserMessage
                                 time={created_at}
                                 message={message_text}
                              />
                           ) : (
                              <UsersMessages
                                 time={created_at}
                                 message={message_text}
                              />
                           )}
                        </React.Fragment>
                     );
                  })}
               </div>
            </div>
         )}
      </>
   );
};

export default Messages;
