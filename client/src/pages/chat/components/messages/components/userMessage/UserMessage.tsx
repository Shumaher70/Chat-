import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { dateToTime } from '../../../../../../utils/dateToTime';
import styles from './UserMessage.module.scss';

interface UserMessageProps {
   message: string;
   time: string;
}

const UserMessage = ({ message, time }: UserMessageProps) => {
   const { room } = useAppSelector((state) => state.dashboardReducer);

   return (
      <div className={styles.userMessage}>
         <div
            className={`${styles.wrapperContainerMessage} ${
               room && styles.showing
            }`}
         >
            <div className={`${styles.messageContainer} dark-1`}>
               <p>{message}</p>
               <p className={styles.time}>{dateToTime(time)}</p>
            </div>

            <div className={`${styles.svgContainer}`}>
               <span className={`icon-dark-1`}>
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
                     <title>tail-out</title>
                     <path
                        opacity="0.13"
                        d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                     ></path>
                     <path
                        fill="currentColor"
                        d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                     ></path>
                  </svg>
               </span>
            </div>
         </div>
      </div>
   );
};

export default UserMessage;
