import { createUseStyles } from 'react-jss';
import MediaQueries from '../../../style/mediaQueries';

const useStyle = createUseStyles({
  contentContainer: {
    position: 'relative',
    flex: '1 1 0%',
    margin: '0 4rem',
    maxWidth: '48rem',
    [MediaQueries.large]: {
      maxWidth: 'rem',
    },
  },
});

export default useStyle;
