import Select from 'react-select';

import { FaReact, FaNodeJs, FaVuejs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiRedux, SiPrisma } from 'react-icons/si';
import { RiAngularjsLine } from 'react-icons/ri';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { IoChatboxOutline } from 'react-icons/io5';
import { useAppSelector } from '../../../../../../../../redux/hooks/hooks';
import { addRoomType } from '../../CreateRoom';

const options = [
   { value: 'react', label: <FaReact />, color: 'lightblue' },
   { value: 'nodejs', label: <FaNodeJs />, color: 'green' },
   { value: 'redux', label: <SiRedux />, color: 'purple' },
   { value: 'angular', label: <RiAngularjsLine />, color: 'red' },
   { value: 'vue', label: <FaVuejs />, color: 'green' },
   { value: 'prisma', label: <SiPrisma />, color: 'lightgray' },
   { value: 'scss', label: <BsFileEarmarkCode />, color: 'purple' },
   { value: 'css', label: <FaCss3Alt />, color: 'blue' },
   { value: 'html', label: <FaHtml5 />, color: 'orange' },
   { value: 'chat', label: <IoChatboxOutline />, color: 'orange' },
];

interface OptionIconsProps {
   setRoom: React.Dispatch<React.SetStateAction<addRoomType>>;
}

const OptionIcons = ({ setRoom }: OptionIconsProps) => {
   const themeSlice = useAppSelector((state) => state.themeReducer.theme);

   const handleChange = (selectedOption: any) => {
      if (selectedOption) {
         setRoom((priv) => ({
            ...priv,
            room_label: selectedOption.value as string,
         }));
      }
   };

   return (
      <Select
         defaultValue={options[0]}
         options={options}
         className=""
         classNamePrefix="select"
         styles={{
            container: (provided) => ({
               ...provided,
               display: 'flex',
               justifyContent: 'center',
               justifyItems: 'center',
               border: 'none',
               backgroundColor: `${
                  themeSlice === 'light' ? '#C8C8C8' : '#434145'
               }`,

               transition: 'all 0.5s ease-in-out',
            }),
            option: (provided, state) => ({
               ...provided,
               backgroundColor: state.isFocused ? 'dark-1' : 'dark-2',
               cursor: 'pointer',
               color: state.data.color,
               ':hover': {
                  backgroundColor: 'gray',
               },
            }),
            singleValue: (provided, state) => ({
               ...provided,
               color: state.data.color,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }),
            control: (provided) => ({
               ...provided,
               background: 'transparent',
               display: 'flex',
               flexWrap: 'nowrap',
               width: '60px',
               height: '56px',
               justifyContent: 'center',
               alignItems: 'center',
               cursor: 'pointer',
               borderRadius: '0',
               boxShadow: 'none',
               border: 'none',

               '&:hover': {
                  border: '1px solid gray',
               },
            }),

            indicatorsContainer: (provided) => ({
               ...provided,
               display: 'none',
            }),

            menu: (provided) => ({
               ...provided,
               background: 'transparent',
            }),
         }}
         onChange={handleChange}
      />
   );
};

export default OptionIcons;
