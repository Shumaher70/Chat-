import { useEffect, useState } from 'react';
import styles from './Messages.module.scss';
import UserMessage from './components/userMessage/UserMessage';
import UsersMessages from './components/usersMessages/UsersMessages';
import { socket } from '../../Chat';

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

   useEffect(() => {
      socket.on('message', (message: MessageTypes[]) => {
         setSocketId(socket.id!);
         setMessages(message);
      });

      return () => {
         socket.off('message');
      };

      //eslint-disable-next-line
   }, []);

   return (
      <>
         {messages && (
            <div className={styles.messagesContainer}>
               <div className={styles.messages}>
                  {messages.map((message: MessageTypes, index) => {
                     if (message.id === socketId) {
                        return (
                           <UserMessage key={index}>
                              {message.message}
                           </UserMessage>
                        );
                     } else {
                        return (
                           <UsersMessages key={index + index}>
                              {message.message}
                           </UsersMessages>
                        );
                     }
                  })}
               </div>
            </div>
         )}
      </>
   );
};

export default Messages;
