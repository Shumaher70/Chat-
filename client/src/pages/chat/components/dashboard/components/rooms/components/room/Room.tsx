import useRoomSocket from '../../../../../../../../hooks/useRoomSocket';
import styles from './Room.module.scss';

import { FaUser } from 'react-icons/fa';

const Room = () => {
   const { users } = useRoomSocket();

   return (
      <>
         {users.length > 0 && (
            <div className={styles.room}>
               {users.map((user) => {
                  const { user_id, name, avatar } = user;
                  return (
                     <div className={styles.user} key={user_id}>
                        <div className={styles.avatar}>
                           {avatar && (
                              <img
                                 srcSet={`${avatar}`}
                                 alt="avata"
                                 loading="lazy"
                              />
                           )}
                           {!avatar && <FaUser />}
                        </div>
                        <span>{name}</span>
                     </div>
                  );
               })}
            </div>
         )}
      </>
   );
};

export default Room;
