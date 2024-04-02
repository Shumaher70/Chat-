export const dashboardTrigger = (
   width: number,
   dashboardTrigger: boolean,
   stylesHiding: string,
   stylesShowing: string
): string => {
   const mobileDisplay: boolean = width < 1080;

   if (mobileDisplay && !dashboardTrigger) {
      return stylesHiding;
   } else if (mobileDisplay && dashboardTrigger) {
      return stylesShowing;
   } else {
      return '';
   }
};
