import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  headerContainer: {
    position: 'relative',
    height: '100%',
    maxHeight: 185,
    minHeight: 185,
    '& h3': {
      margin: 0,
      lineHeight: 1,
    },
  },
  headerInner: {
    padding: '4.5rem 0 0',
    margin: 'auto',
  },
});

export default useStyle;
