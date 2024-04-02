import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './Rooms.module.scss';
import { useState } from 'react';

type roomsType = {
   icon: JSX.Element;
   label: string;
}[];

const rooms: roomsType = [
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
   const [activeIndex, setActiveIndex] = useState<number>();

   const handleClick = (index: number) => {
      setActiveIndex(index);
   };

   return (
      <List>
         {rooms.map((room, i) => (
            <ListItem
               key={i}
               disablePadding
               sx={{
                  borderBottom: '1px solid rgba(99, 99, 99, 0.24)',
                  ...(activeIndex === i && {
                     backgroundColor: 'rgba(146, 146, 146, 0.322)',
                  }),
               }}
            >
               <ListItemButton
                  onClick={() => {
                     handleClick(i);
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
