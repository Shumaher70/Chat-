import { useAppSelector } from '../../../../redux/hooks/hooks';

const useCustomTextInputTheme = (rounded?: string) => {
   const themeSlice = useAppSelector((state) => state.themeReducer.theme);
   const theme = {
      width: '100%',
      '& .MuiFilledInput-root': {
         color: `${themeSlice === 'light' ? '#0f0f0f' : '#f2f2f2'}`,
         backgroundColor: `${themeSlice === 'light' ? '#C8C8C8' : '#434145'}`,
         borderRadius: `${rounded ? `${rounded}px` : '7px'}`,
         overflow: 'hidden',
         '&:before': {
            borderColor: '#2e2e2e',
            borderWidth: '0px',
         },
         '&:after': {
            borderColor: '#434145',
            borderWidth: '3px',
         },
      },
      '& .MuiInputLabel-filled': {
         color: `${themeSlice === 'light' ? '#0f0f0f' : '#f2f2f2'}`,
         '&.Mui-focused': {
            color: `${themeSlice === 'light' ? '#0f0f0f' : '#f2f2f2'}`,
         },
      },
   };

   return {
      theme,
   };
};

export default useCustomTextInputTheme;
