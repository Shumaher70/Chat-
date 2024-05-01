import { FaUser } from 'react-icons/fa';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { dateToTime } from '../../../../../../utils/dateToTime';
import styles from './UsersMessages.module.scss';

interface UserMessagesProps {
   message: string;
   time: string;
   left?: boolean;
   right?: boolean;
   name: string;
   avatar: string;
}

const UsersMessages = ({
   message,
   time,
   left,
   right,
   name,
   avatar,
}: UserMessagesProps) => {
   const { room } = useAppSelector((state) => state.dashboardReducer);
   return (
      <div
         className={`${left ? styles.usersMessagesLeft : ''} ${
            right ? styles.usersMessagesRight : ''
         }`}
      >
         <div
            className={`${left ? styles.wrapperContainerMessagesLeft : ''} ${
               right ? styles.wrapperContainerMessagesRight : ''
            } ${room && left ? styles.showingLeft : ''}  ${
               room && right ? styles.showingRight : ''
            }`}
         >
            <div
               className={`${left ? styles.imageContainerLeft : ''} ${
                  right ? styles.imageContainerRight : ''
               }`}
            >
               {avatar === '' || avatar === undefined ? (
                  <FaUser className={styles.avatar} />
               ) : (
                  <img src={avatar} alt={avatar} />
               )}
            </div>

            <div
               className={`${left ? styles.svgContainerLeft : ''} ${
                  right ? styles.svgContainerRight : ''
               } `}
            >
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
                     {right && (
                        <>
                           <path
                              opacity="0.13"
                              d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
                           ></path>
                           <path
                              fill="currentColor"
                              d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
                           ></path>
                        </>
                     )}

                     {left && (
                        <>
                           <path
                              opacity="0.13"
                              fill="#0000000"
                              d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
                           ></path>
                           <path
                              fill="currentColor"
                              d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
                           ></path>
                        </>
                     )}
                  </svg>
               </span>
            </div>

            <div
               className={`${left ? styles.messagesContainerLeft : ''} ${
                  right ? styles.messagesContainerRight : ''
               } dark-2`}
            >
               <p
                  className={`${left ? styles.nameLeft : ''} ${
                     right ? styles.nameRight : ''
                  }`}
               >
                  {name}
               </p>
               <p>{message}</p>
               <p
                  className={`${left ? styles.timeLeft : ''} ${
                     right ? styles.timeRight : ''
                  }`}
               >
                  {dateToTime(time)}
               </p>
            </div>
         </div>
      </div>
   );
};

export default UsersMessages;
