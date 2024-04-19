import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

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
import { triggerAction } from '../../../../../../redux/slices/dashboardSlice';

import Room from './components/room/Room';
import {
   changeRoomAction,
   getRoomAction,
   getRoomIdAction,
} from '../../../../../../redux/slices/roomsSlice';
import useGetRooms from '../../../../../../hooks/useGetRooms';

const Rooms = () => {
   const { rooms } = useGetRooms();

   const dispatch = useAppDispatch();
   const roomsSlice = useAppSelector((state) => state.roomReducer.trigger);

   const handleClick = (room_name: string, room_id: string) => {
      dispatch(triggerAction(false));
      dispatch(getRoomAction(room_name));
      dispatch(getRoomIdAction(room_id));
      dispatch(changeRoomAction(true));
   };

   return (
      <div className={styles.rooms}>
         {roomsSlice && (
            <div
               className={`${roomsSlice ? styles.hiddenOut : styles.hiddenIn}`}
            >
               <Room />
            </div>
         )}

         {!roomsSlice && (
            <List
               sx={{
                  width: '100%',
               }}
               className={`${roomsSlice ? styles.hiddenIn : styles.hiddenOut}`}
            >
               {rooms.map((room) => (
                  <ListItem key={room.room_id} disablePadding>
                     <ListItemButton
                        onClick={() => {
                           handleClick(room.room_name, room.room_id);
                        }}
                     >
                        {room.room_name === 'React' && (
                           <ListItemIcon>
                              <FaReact className={styles.FaReact} />
                           </ListItemIcon>
                        )}
                        {room.room_name === 'Next' && (
                           <ListItemIcon>
                              <FaNodeJs className={styles.FaNodeJs} />
                           </ListItemIcon>
                        )}
                        <ListItemText primary={room.room_name} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         )}
      </div>
   );
};

export default Rooms;
