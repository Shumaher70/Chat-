import { IoCaretBackOutline } from 'react-icons/io5';
import styles from './BackButton.module.scss';
import { useAppDispatch } from '../../../../../../../redux/hooks/hooks';
import { triggerAction } from '../../../../../../../redux/slices/dashboardSlice';

const BackButton = () => {
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(triggerAction(false));
   };

   return (
      <IoCaretBackOutline onClick={handleClick} className={styles.backButton} />
   );
};

export default BackButton;
