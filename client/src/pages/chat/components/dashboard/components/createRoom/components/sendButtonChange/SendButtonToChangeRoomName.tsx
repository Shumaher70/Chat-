import { CgSpinner } from 'react-icons/cg';
import { CiCircleCheck } from 'react-icons/ci';
import styles from './SendButtonToChangeRoomName.module.scss';

interface SendButtonToChangeRoomNameProps {
   loading: boolean;
   success: boolean;
   error: {
      error: boolean;
      message: string | null;
   };
   handleClick: () => void;
}

const SendButtonToChangeRoomName = ({
   loading,
   success,
   error,
   handleClick,
}: SendButtonToChangeRoomNameProps) => {
   return (
      <>
         {!loading ? (
            <CiCircleCheck
               className={`${styles.submit} ${success && `${styles.success}`} ${
                  error.error && `${styles.reject}`
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
