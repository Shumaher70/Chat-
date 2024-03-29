import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './LightMode.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { themeAction } from '../../redux/slices/themeSlice';

const LightMode = () => {
   const dispatch = useAppDispatch();
   const theme = useAppSelector((state) => state.themeReducer.theme);
   return (
      <div onClick={() => dispatch(themeAction())}>
         {theme === 'light' ? (
            <LightModeIcon className={styles.light} />
         ) : (
            <DarkModeIcon className={styles.dark} />
         )}
      </div>
   );
};

export default LightMode;
