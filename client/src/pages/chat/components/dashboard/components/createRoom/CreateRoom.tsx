import { useState } from 'react';
import styles from './CreateRoom.module.scss';
import OptionIcons from './components/optionIcons/OptionIcons';
import RoomName from './components/roomName/RoomName';
import SendButtonToChangeRoomName from './components/sendButtonChange/SendButtonToChangeRoomName';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { v4 as uuidv4 } from 'uuid';

export interface addRoomType {
   room_id: string;
   room_name: string;
   user_id: string;
   room_label: string;
}

const CreateRoom = () => {
   const { user_id } = useAppSelector((state) => state.userReducer);

   const [room, setRoom] = useState<addRoomType>({
      room_id: uuidv4(),
      room_name: '',
      user_id: user_id as string,
      room_label: 'react',
   });

   return (
      <div className={styles.createRoom}>
         <div className={styles.item}>
            <div className={styles.optionIcons}>
               <OptionIcons setRoom={setRoom} />
            </div>

            <div className={styles.roomName}>
               <RoomName setRoom={setRoom} />
               <SendButtonToChangeRoomName />
            </div>
         </div>
      </div>
   );
};

export default CreateRoom;
