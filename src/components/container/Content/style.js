import { createUseStyles } from 'react-jss';
import MediaQueries from '../../../style/mediaQueries';

const useStyle = createUseStyles({
  contentContainer: {
    position: 'relative',
    flex: '1 1 0%',
    margin: '0 4rem 6rem',
    maxWidth: '48rem',
    [MediaQueries.large]: {
      maxWidth: '48rem',
      margin: '0 auto',
    },
    [MediaQueries.medium]: {
      maxWidth: '32rem',
      margin: '0 auto',
    },
    [MediaQueries.small]: {
      maxWidth: 'auto',
      width: '100%',
      margin: '0 2rem',
    },
  },
});

export default useStyle;
