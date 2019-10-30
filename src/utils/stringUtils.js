
/**
 * Capitalize the first letter of given string.
 * @param {string} str The string to be capitalized.
 */
export function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Get file extension.
 * @param {string} filename File name
 */
export function getExtension(filename) {
  const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length) || '';
  return ext.toLowerCase();
}

/**
 * Get safely a route
 * @param {string} url Location url.
 */
export function getRoute(url) {
  if (url === '/') {
    return url;
  }

  let newPath = '';
  const pathArray = window.location.pathname.split('/');
  for (let i = 0; i < pathArray.length; i += 1) {
    newPath += `/${pathArray[i]}/`;
  }
  return newPath;
}
