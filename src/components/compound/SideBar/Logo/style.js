import { createUseStyles } from 'react-jss';

import magnetosLogo from './magnetos-logo.svg';
import generateId from '../../../generateId';

const useStyle = createUseStyles({
  magnetos: {
    maxWidth: '100%',
    height: 96,
    textIndent: '-999px',
    backgroundSize: 'contain',
    backgroundImage: `url(${magnetosLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    margin: '1rem',
  },
  magnetosWrapper: {
    padding: '1rem',
    borderBottom: '1px solid var(--color-space-300)',
  },
}, {
  generateId,
});

export default useStyle;
