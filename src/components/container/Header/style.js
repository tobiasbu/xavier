import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  headerContainer: {
    position: 'relative',
    height: '100%',
    maxHeight: 161,
    '& h3': {
      margin: 0,
      lineHeight: 1,
    },
  },
  headerInner: {
    padding: '3.5rem 0 0',
    margin: 'auto',
  },
});

export default useStyle;
