import styles from './DashBoard.module.scss';
import Logo from './components/logo/Logo';
import Rooms from './components/rooms/Rooms';
import Setting from './components/setting/Setting';

const Dashboard = () => {
   return (
      <div className={`${styles.dashboard} dark-2`}>
         <Logo />
         <Rooms />
         <Setting />
      </div>
   );
};

export default Dashboard;
