import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './Burger.module.scss';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { triggerAction } from '../../../../../redux/slices/dashboardSlice';

const Burger = () => {
   const dispatch = useAppDispatch();

   const handleClick = () => dispatch(triggerAction(true));

   return (
      <RxHamburgerMenu onClick={handleClick} className={`${styles.burger}`} />
   );
};

export default Burger;
