import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './Rooms.module.scss';
import { useAppDispatch } from '../../../../../../redux/hooks/hooks';
import { triggerAction } from '../../../../../../redux/slices/dashboardSlice';
import useAuth from '../../../../../../hooks/useAuth';
import { socket } from '../../../../Chat';

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

   const handleClick = async (room: string) => {
      dispatch(triggerAction(false));

      socket.emit('room', {
         room: room,
         userName: auth?.user_metadata.full_name,
      });
   };

   return (
      <List>
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
   );
};

export default Rooms;
