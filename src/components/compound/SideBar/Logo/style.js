import { createUseStyles } from 'react-jss';
import { generateId } from '@utils/generateHash';

import magnetosLogo from './magnetos-logo.svg';

const useStyle = createUseStyles({
  magnetos: {
    maxWidth: '100%',
    height: 120,
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
