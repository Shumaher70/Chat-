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
import useAuth from '../../../../../../hooks/useAuth';
import { socket } from '../../../../Chat';
import { useState } from 'react';
import Room from './components/room/Room';
import {
   changeRoomAction,
   getRoomAction,
} from '../../../../../../redux/slices/roomsSlice';

type roomsType = {
   icon: JSX.Element;
   label: string;
};

const rooms: roomsType[] = [
   {
      icon: <FaReact className={styles.FaReact} />,
      label: 'React',
   },
   {
      icon: <FaNodeJs className={styles.FaNodeJs} />,
      label: 'NodeJs',
   },
];

const Rooms = () => {
   const auth = useAuth();
   const dispatch = useAppDispatch();
   const roomsSlice = useAppSelector((state) => state.roomReducer.trigger);

   const handleClick = async (room: string) => {
      dispatch(triggerAction(false));

      dispatch(getRoomAction(room));
      socket.emit('room', {
         room: room,
         userName: auth?.user_metadata.full_name,
         avatar_url: auth?.user_metadata.avatar_url,
      });

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
               className={`${roomsSlice ? styles.hiddenIn : styles.hiddenOut}`}
            >
               {rooms.map((room, i) => (
                  <ListItem key={i} disablePadding>
                     <ListItemButton
                        onClick={() => {
                           handleClick(room.label);
                        }}
                     >
                        <ListItemIcon>{room.icon}</ListItemIcon>
                        <ListItemText primary={room.label} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         )}
      </div>
   );
};

export default Rooms;
