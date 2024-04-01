import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

import styles from './DashBoard.module.scss';
import Logo from './components/logo/Logo';
const Dashboard = () => {
   return (
      <div className={`${styles.dashboard} dark-2`}>
         <Logo />

         <List>
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     <FaReact className={styles.FaReact} />
                  </ListItemIcon>
                  <ListItemText primary="React" />
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
               <ListItemButton>
                  <ListItemIcon>
                     <FaNodeJs className={styles.FaNodeJs} />
                  </ListItemIcon>
                  <ListItemText primary="Node" />
               </ListItemButton>
            </ListItem>
         </List>
      </div>
   );
};

export default Dashboard;
