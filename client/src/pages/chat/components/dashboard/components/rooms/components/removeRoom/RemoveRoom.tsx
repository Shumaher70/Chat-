import { BsTrash3 } from 'react-icons/bs';

import styles from './RemoveRoom.module.scss';
import { RoomType } from '../../../../../../../../hooks/useGetRooms';
import useRemoveRoom from '../../../../../../../../hooks/useRemoveRoom';
import { useAppDispatch } from '../../../../../../../../redux/hooks/hooks';
import { deleteRoomAction } from '../../../../../../../../redux/slices/roomsSlice';

interface RemoveRoomProps {
   room: RoomType;
}

const RemoveRoom = ({ room }: RemoveRoomProps) => {
   const dispatch = useAppDispatch();
   const { handleRemoveRoom } = useRemoveRoom();
   const handleClick = async () => {
      handleRemoveRoom(room);
      dispatch(deleteRoomAction(room.room_id));
   };

   return (
      <div className={`${styles.removeRoom}`} onClick={handleClick}>
         <BsTrash3 />
      </div>
   );
};

export default RemoveRoom;
