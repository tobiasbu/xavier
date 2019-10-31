import { createUseStyles } from 'react-jss';
import { generateId } from '@utils/generateHash';

import xavierLogo from './xavier-logo.svg';

const useStyle = createUseStyles({
  xavier: {
    maxWidth: '100%',
    height: 120,
    textIndent: '-999px',
    backgroundSize: 'contain',
    backgroundImage: `url(${xavierLogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    margin: '1rem',
  },
  xavierWrapper: {
    padding: '1rem',
    borderBottom: '1px solid var(--color-space-300)',
  },
}, {
  generateId,
});

export default useStyle;
