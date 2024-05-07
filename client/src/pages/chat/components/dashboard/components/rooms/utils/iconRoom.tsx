import { FaReact, FaNodeJs, FaVuejs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiRedux, SiPrisma } from 'react-icons/si';
import { RiAngularjsLine } from 'react-icons/ri';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { IoChatboxOutline } from 'react-icons/io5';
import { ReactElement } from 'react';

interface LabelIcons {
   [key: string]: ReactElement;
}

const iconRoom = (label_name: string) => {
   const labels: LabelIcons = {
      react: <FaReact color="#58C4DC" />,
      nodejs: <FaNodeJs color="green" />,
      redux: <SiRedux color="purple" />,
      angular: <RiAngularjsLine color="red" />,
      vue: <FaVuejs color="green" />,
      prisma: <SiPrisma color="lightgray" />,
      scss: <BsFileEarmarkCode color="purple" />,
      css: <FaCss3Alt color="blue" />,
      html: <FaHtml5 color="orange" />,
      chat: <IoChatboxOutline color="orange" />,
   };

   return labels[label_name];
};

export default iconRoom;
