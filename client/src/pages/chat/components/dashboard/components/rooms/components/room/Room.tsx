import { useEffect, useState } from 'react';
import styles from './Room.module.scss';

import { FaUser } from 'react-icons/fa';

interface usersType {
   id: string;
   room: string;
   userName: string;
   avatar_url: string;
}

const Room = () => {
   const [users, setUsers] = useState<usersType[]>([]);

   return (
      <div className={styles.room}>
         {users.map((user, index) => (
            <div className={styles.user} key={index}>
               <div className={styles.avatar}>
                  {user.avatar_url && (
                     <img
                        srcSet={`${user.avatar_url}`}
                        alt="avata"
                        loading="lazy"
                     />
                  )}
                  {!user.avatar_url && <FaUser />}
               </div>
               <span>{user.userName}</span>
            </div>
         ))}
      </div>
   );
};

export default Room;
