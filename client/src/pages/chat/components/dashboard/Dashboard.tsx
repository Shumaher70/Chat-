import { useAppSelector } from '../../../../redux/hooks/hooks';
import styles from './DashBoard.module.scss';
import Logo from './components/logo/Logo';
import Rooms from './components/rooms/Rooms';
import Setting from './components/setting/Setting';
import SignOut from './components/signOut/SignOut';

const Dashboard = () => {
   const { setting } = useAppSelector((state) => state.dashboardReducer);

   return (
      <div className={`${styles.dashboard} dark-2`}>
         <Logo />
         <Rooms />
         <div
            className={`${styles.setting} ${
               setting ? styles.hiddenOut : styles.hiddenIn
            } dark-2`}
         >
            <Setting />
            <div className={`${styles.signout}`}>
               <SignOut />
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
