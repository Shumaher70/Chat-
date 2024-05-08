import { BsTrash3 } from 'react-icons/bs';

import styles from './RemoveRoom.module.scss';
import { RoomType } from '../../../../../../../../hooks/useGetRooms';
import useRemoveRoom from '../../../../../../../../hooks/useRemoveRoom';
import { useAppDispatch } from '../../../../../../../../redux/hooks/hooks';
import { deleteRoomAction } from '../../../../../../../../redux/slices/roomsSlice';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { useState } from 'react';

interface RemoveRoomProps {
   room: RoomType;
}

const RemoveRoom = ({ room }: RemoveRoomProps) => {
   const dispatch = useAppDispatch();
   const { handleRemoveRoom } = useRemoveRoom();

   const [toggle, setToggle] = useState<boolean>(false);

   const handleRemove = () => {
      handleRemoveRoom(room);
      dispatch(deleteRoomAction(room.room_id));
   };

   const handleCloseSelect = () => {
      setToggle(false);
   };

   const handleToggle = () => {
      setToggle(true);
   };

   return (
      <div className={`${styles.removeRoom}`} onClick={handleToggle}>
         {!toggle && <BsTrash3 />}

         {toggle && (
            <div className={styles.wrapperSelect}>
               <CiCircleCheck className={styles.check} onClick={handleRemove} />
               <CiCircleRemove
                  className={styles.remove}
                  onClick={handleCloseSelect}
               />
            </div>
         )}
      </div>
   );
};

export default RemoveRoom;
