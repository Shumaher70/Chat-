import React, { useEffect, useRef, useState } from 'react';
import styles from './Messages.module.scss';
import UserMessage from './components/userMessage/UserMessage';
import UsersMessages from './components/usersMessages/UsersMessages';
import { socket } from '../../Chat';
import { useAppSelector } from '../../../../redux/hooks/hooks';

interface MessageTypes {
   id: string;
   room: string;
   userName: string;
   avatar_url: string;
   message: string;
   atDate: string;
}

const Messages = () => {
   const [messages, setMessages] = useState<MessageTypes[]>([]);
   const { trigger } = useAppSelector((state) => state.roomReducer);
   const messageRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      socket.on('message', (message: MessageTypes[]) => {
         setMessages(message);
      });

      return () => {
         socket.off('message');
      };

      //eslint-disable-next-line
   }, []);

   useEffect(() => {
      socket.emit('roomMessages');
   }, []);

   useEffect(() => {
      if (messageRef.current && messageRef.current) {
         messageRef.current.scrollTop = messageRef.current.scrollHeight;
      }

      //eslint-disable-next-line
   }, [socket.id]);

   useEffect(() => {
      if (messages.length > 0)
         if (
            messageRef.current &&
            messages[messages.length - 1].id === socket.id
         ) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
         }
   }, [messages]);

   return (
      <>
         {messages && trigger && (
            <div className={styles.messagesContainer}>
               <div ref={messageRef} className={styles.messages}>
                  {messages.map((message: MessageTypes, index) => {
                     return (
                        <React.Fragment key={message.message + index}>
                           {message.id === socket.id ? (
                              <UserMessage
                                 time={message.atDate}
                                 message={message.message}
                              />
                           ) : (
                              <UsersMessages
                                 time={message.atDate}
                                 message={message.message}
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
