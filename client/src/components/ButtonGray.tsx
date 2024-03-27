import { Button, ButtonProps, styled } from '@mui/material';

import { grey } from '@mui/material/colors';

interface ButtonGrayProps extends ButtonProps {
   children: React.ReactNode;
}

const ButtonGray = ({ children, ...props }: ButtonGrayProps) => {
   const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
      color: theme.palette.getContrastText(grey[900]),
      backgroundColor: grey[500],
      '&:hover': {
         backgroundColor: grey[700],
      },
   }));

   return <ColorButton {...props}>{children}</ColorButton>;
};

export default ButtonGray;
