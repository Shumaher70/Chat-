import { useState } from 'react';
import styles from './CreateRoom.module.scss';
import OptionIcons from './components/optionIcons/OptionIcons';
import RoomName from './components/roomName/RoomName';
import SendButtonToChangeRoomName from './components/sendButtonChange/SendButtonToChangeRoomName';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';

import useCreateRoom from '../../../../../../hooks/useCreateRoom';
import { refreshRoomAction } from '../../../../../../redux/slices/roomsSlice';
import { GoSignOut } from 'react-icons/go';
import { createRoomAction } from '../../../../../../redux/slices/dashboardSlice';
import useGetRooms from '../../../../../../hooks/useGetRooms';

export interface addRoomType {
   room_id: string;
   room_name: string;
   user_id: string;
   room_label: string;
}

const CreateRoom = () => {
   const dispatch = useAppDispatch();
   const { handleSend, loading, success, error } = useCreateRoom();
   const { handleGetRooms } = useGetRooms();

   const [room, setRoom] = useState<addRoomType>({
      room_id: '',
      room_name: '',
      user_id: '',
      room_label: 'react',
   });

   const { room_id, user_id, room_name, room_label } = room;

   const handleClick = () => {
      if (!room_id) {
         return console.error('room_id is null');
      }

      if (!user_id) {
         return console.error('user_id is null');
      }

      if (!room_name) {
         return console.error('room_name is null');
      }

      if (!room_label) {
         return console.error('room_label is null');
      }

      handleSend(room);
      handleGetRooms();
      dispatch(refreshRoomAction());
   };

   const handleOut = () => {
      dispatch(createRoomAction(false));
      handleGetRooms();
   };

   return (
      <div className={styles.createRoom}>
         <div className={styles.itemWrapper}>
            <div className={styles.item}>
               <div className={styles.optionIcons}>
                  <OptionIcons setRoom={setRoom} />
               </div>

               <div className={styles.roomName}>
                  <RoomName setRoom={setRoom} error={error} success={success} />
                  <SendButtonToChangeRoomName
                     loading={loading}
                     success={success}
                     error={error}
                     handleClick={handleClick}
                  />
               </div>
            </div>
         </div>
         <div className={`${styles.signout} dark-2`}>
            <div className={styles.signout_icon_container} onClick={handleOut}>
               <GoSignOut className={styles.signout_icon_container_icon} />
               <p>BACK</p>
            </div>
         </div>
      </div>
   );
};

export default CreateRoom;
