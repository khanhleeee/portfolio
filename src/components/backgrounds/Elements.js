export const BlurryCircle = ({
   width = '96',
   height = '96',
   color = 'purple',
   top = null,
   bottom = null,
   left = null,
   right = null,
}) => {
   const classes = `blur-3xl rounded-full absolute bg-main-${color} w-${width} h-${height} ${
      top ? 'top-' + top : ''
   } ${bottom ? 'bottom-' + bottom : ''} ${
      left ? 'left-' + left : ''
   } ${right ? 'right-' + right : ''}`;

   return <div className={classes} />;
};
