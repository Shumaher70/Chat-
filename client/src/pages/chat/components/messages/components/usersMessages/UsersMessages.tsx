import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import styles from './UsersMessages.module.scss';

interface UserMessagesProps {
   children: React.ReactNode;
}

const UsersMessages = ({ children }: UserMessagesProps) => {
   const { trigger } = useAppSelector((state) => state.roomReducer);

   return (
      <div className={`${styles.usersMessages}`}>
         <div
            className={`${styles.wrapperContainerMessages} ${
               trigger ? styles.showing : styles.hidden
            }`}
         >
            <div className={`${styles.svgContainer}`}>
               <span className={`icon-dark-2`}>
                  <svg
                     viewBox="0 0 8 13"
                     height="13"
                     width="8"
                     preserveAspectRatio="xMidYMid meet"
                     version="1.1"
                     x="0px"
                     y="0px"
                     enableBackground="new 0 0 8 13"
                  >
                     <title>tail-in</title>
                     <path
                        opacity="0.13"
                        fill="#0000000"
                        d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
                     ></path>
                     <path
                        fill="currentColor"
                        d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
                     ></path>
                  </svg>
               </span>
            </div>
            <div className={`${styles.messagesContainer} dark-2`}>
               <p>{children}</p>
            </div>
         </div>
      </div>
   );
};

export default UsersMessages;
