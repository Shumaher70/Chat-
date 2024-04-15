import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
}

const Messages = () => {
   const [messages, setMessages] = useState<MessageTypes[]>([]);
   const [socketId, setSocketId] = useState<string>('');
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
      setSocketId(socket.id!);
   }, []);

   useEffect(() => {
      if (socketId) {
         messageRef.current?.scroll({ behavior: 'smooth' });
      }
   }, [socketId]);

   return (
      <>
         {messages && trigger && (
            <div ref={messageRef} className={styles.messagesContainer}>
               <div className={styles.messages}>
                  {messages.map((message: MessageTypes, index) => {
                     return (
                        <React.Fragment key={message.message + index}>
                           {message.id === socketId ? (
                              <UserMessage key={index}>
                                 {message.message}
                              </UserMessage>
                           ) : (
                              <UsersMessages key={message.message + index}>
                                 {message.message}
                              </UsersMessages>
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
