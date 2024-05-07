import { IoAdd } from 'react-icons/io5';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './Rooms.module.scss';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../../redux/hooks/hooks';
import {
   createRoomAction,
   roomAction,
   roomsAction,
   triggerAction,
} from '../../../../../../redux/slices/dashboardSlice';

import Room from './components/room/Room';
import {
   getRoomNameAction,
   getRoomIdAction,
} from '../../../../../../redux/slices/roomsSlice';
import useGetRooms from '../../../../../../hooks/useGetRooms';
import iconRoom from './utils/iconRoom';
import RemoveRoom from './components/removeRoom/RemoveRoom';
import { useEffect } from 'react';

const Rooms = () => {
   const { handleGetRooms } = useGetRooms();
   const { rooms } = useAppSelector((state) => state.roomReducer);

   const dispatch = useAppDispatch();
   const {
      rooms: showRooms,
      room: showRoom,
      setting,
   } = useAppSelector((state) => state.dashboardReducer);

   useEffect(() => {
      handleGetRooms();
      // eslint-disable-next-line
   }, []);

   const handleClick = (room_name: string, room_id: string) => {
      dispatch(triggerAction(true));
      dispatch(getRoomNameAction(room_name));
      dispatch(getRoomIdAction(room_id));
      dispatch(roomAction(true));
      dispatch(roomsAction(false));
   };

   const handleClickOnCreateRoom = () => {
      dispatch(createRoomAction(true));
   };

   return (
      <div className={styles.rooms}>
         {showRoom && (
            <div
               className={`${
                  showRoom && !setting ? styles.hiddenOut : styles.hiddenIn
               }`}
            >
               <Room />
            </div>
         )}

         {showRooms && (
            <List
               sx={{
                  width: '100%',
               }}
               className={`${
                  showRooms && !setting ? styles.hiddenOut : styles.hiddenIn
               }`}
            >
               <ListItem disablePadding>
                  <ListItemButton onClick={handleClickOnCreateRoom}>
                     <ListItemIcon>
                        <IoAdd className={styles.iconPlus} />
                     </ListItemIcon>
                     <ListItemText primary={'ADD NEW ROOM'} />
                  </ListItemButton>
               </ListItem>

               {rooms.length > 0 &&
                  rooms.map((room) => (
                     <ListItem
                        key={room.room_id}
                        disablePadding
                        className={styles.listItem}
                     >
                        <ListItemButton
                           onClick={() => {
                              handleClick(room.room_name, room.room_id);
                           }}
                        >
                           {room.room_label && (
                              <ListItemIcon>
                                 {iconRoom(room.room_label)}
                              </ListItemIcon>
                           )}
                           <ListItemText primary={room.room_name} />
                        </ListItemButton>

                        <RemoveRoom room={room} />
                     </ListItem>
                  ))}
            </List>
         )}
      </div>
   );
};

export default Rooms;
