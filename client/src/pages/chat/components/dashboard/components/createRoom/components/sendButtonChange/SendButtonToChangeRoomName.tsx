import { CgSpinner } from 'react-icons/cg';
import { CiCircleCheck } from 'react-icons/ci';
import styles from './SendButtonToChangeRoomName.module.scss';

const SendButtonToChangeRoomName = () => {
   const handleClick = () => {};
   const loading = false;
   const success = false;
   const error = false;

   return (
      <>
         {!loading ? (
            <CiCircleCheck
               className={`${styles.submit} ${success && `${styles.success}`} ${
                  error && `${styles.reject}`
               }`}
               onClick={handleClick}
            />
         ) : (
            <CgSpinner className={`${styles.spinner}`} />
         )}
      </>
   );
};

export default SendButtonToChangeRoomName;
