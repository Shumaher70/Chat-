import styles from './DashBoard.module.scss';
import Logo from './components/logo/Logo';
import Rooms from './components/rooms/Rooms';

const Dashboard = () => {
   return (
      <div className={`${styles.dashboard} dark-2`}>
         <Logo />
         <Rooms />
      </div>
   );
};

export default Dashboard;
