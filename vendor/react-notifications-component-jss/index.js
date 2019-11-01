// THIS IS A MODIFIED VERSION FOR XAVIER PROJECT


/**
 * react-notifications-component
 * @license MIT MIT
 * @see https://github.com/teodosii/react-notifications-component
 */
const reactNotificationsJss = {
  '@global': {
    '.notification-container-bottom-center, .notification-container-bottom-left, .notification-container-bottom-right, .notification-container-mobile-bottom, .notification-container-mobile-top, .notification-container-top-center, .notification-container-top-left, .notification-container-top-right': {
      position: 'fixed',
      zIndex: '8000',
    },
    '.notification-container-top-center': {
      transform: 'translateX(-50%)',
      top: '20px',
      left: '50%',
    },
    '.notification-container-bottom-center': {
      transform: 'translateX(-50%)',
      bottom: '20px',
      left: '50%',
    },
    '.notification-container-top-left': { left: '20px', top: '20px' },
    '.notification-container-top-right': { right: '20px', top: '20px' },
    '.notification-container-bottom-left': { left: '20px', bottom: '20px' },
    '.notification-container-bottom-right': { bottom: '20px', right: '20px' },
    '.notification-container-mobile-top': {
      right: '20px',
      left: '20px',
      top: '20px',
    },
    '.notification-container-mobile-bottom': {
      right: '20px',
      left: '20px',
      bottom: '20px',
      marginBottom: '-15px',
    },
    '.notification-default': { borderLeft: '8px solid #0562c7' },
    '.notification-default, .notification-default .timer': {
      backgroundColor: '#007bff',
    },
    '.notification-default .timer-filler': { backgroundColor: '#fff' },
    '.notification-default .notification-close': { backgroundColor: '#007bff' },
    /** SUCCESS MESSAGE */
    '.notification-success': {
      borderLeft: '8px solid var(--color-neptune-600)',
    },
    '.notification-success, .notification-success .timer': {
      backgroundColor: 'var(--color-neptune-400)',
    },
    '.notification-success .timer-filler': {
      backgroundColor: '#fff',
    },
    '.notification-success .notification-close': {
      backgroundColor: 'var(--color-neptune-400)',
    },
    '.notification-danger': { borderLeft: '8px solid #bd1120' },
    '.notification-danger, .notification-danger .timer': {
      backgroundColor: '#dc3545',
    },
    '.notification-danger .timer-filler': { backgroundColor: '#fff' },
    '.notification-danger .notification-close': { backgroundColor: '#dc3545' },
    '.notification-info': { borderLeft: '8px solid #138b9e' },
    '.notification-info, .notification-info .timer': {
      backgroundColor: '#17a2b8',
    },
    '.notification-info .timer-filler': { backgroundColor: '#fff' },
    '.notification-info .notification-close': { backgroundColor: '#17a2b8' },
    '.notification-warning': { borderLeft: '8px solid #ce9c09' },
    '.notification-warning, .notification-warning .timer': {
      backgroundColor: '#eab000',
    },
    '.notification-warning .timer-filler': { backgroundColor: '#fff' },
    '.notification-warning .notification-close': { backgroundColor: '#eab000' },
    '.notification-awesome': { borderLeft: '8px solid #4c3fb1' },
    '.notification-awesome, .notification-awesome .timer': {
      backgroundColor: '#685dc3',
    },
    '.notification-awesome .timer-filler': { backgroundColor: '#fff' },
    '.notification-awesome .notification-close': { backgroundColor: '#685dc3' },
    '@keyframes timer': { '0%': { width: '100%' }, to: { width: '0' } },
    '.notification-item': {
      display: 'flex',
      position: 'relative',
      borderRadius: '3px',
      marginBottom: '15px',
      boxShadow: '1px 3px 4px rgba(0, 0, 0, .2)',
      cursor: 'pointer',
    },
    '.notification-item .timer': { width: '100%', marginTop: '10px' },
    '.notification-item .timer, .notification-item .timer .timer-filler': {
      height: '3px',
      borderRadius: '5px',
    },
    '.notification-item .notification-title': {
      color: '#fff',
      fontWeight: '700',
      fontSize: '14px',
      marginTop: '5px',
      marginBottom: '5px',
    },
    '.notification-item .notification-message': {
      color: '#fff',
      maxWidth: 'calc(100% - 15px)',
      fontSize: '14px',
      lineHeight: '150%',
      wordWrap: 'break-word',
      marginBottom: '0',
      marginTop: '0',
    },
    '.notification-item .notification-content': {
      padding: '8px 15px',
      display: 'inline-block',
      width: '100%',
    },
    '.notification-item .notification-close': {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      display: 'inline-block',
      position: 'absolute',
      right: '10px',
      top: '10px',
    },
    '.notification-item .notification-close:after': {
      content: '"\\D7"',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontSize: '12px',
      left: '50%',
      top: '50%',
    },
    '.n-parent': { width: '275px' },
    '.notification-container-mobile-bottom .n-parent, .notification-container-mobile-bottom .notification-item, .notification-container-mobile-top .n-parent, .notification-container-mobile-top .notification-item': {
      maxWidth: '100%',
      width: '100%',
    },
    '.notification-container-bottom-right .n-parent, .notification-container-top-right .n-parent': {
      marginLeft: 'auto',
    },
    '.notification-container-bottom-left .n-parent, .notification-container-top-left .n-parent': {
      marginRight: 'auto',
    },
    '.notification-container-mobile-bottom .n-parent, .notification-container-mobile-top .n-parent': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

export default reactNotificationsJss;
