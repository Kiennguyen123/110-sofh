import { HOST_AUTH } from '@utils/client-utils';

export function absoluteFileUrl(path) {
  const _path = path.toString();
  if (
    _path === '' ||
    _path.startsWith('http') ||
    _path.startsWith('blob')
  )
    return _path;
  return HOST_AUTH + '/api/bac-si/v1/files/' + _path;
}

export function combineUrlParams(url = '', params = {}) {
  const keys = Object.keys(params);
  const paramUrl = keys
    .reduce(
      (result, key) =>
        params[key] ||
        params[key] === 0 ||
        typeof params[key] === 'boolean'
          ? [...result, `${key}=${params[key]}`]
          : [...result],
      [],
    )
    .join('&');
  return `${url}?${paramUrl}`;
}

export function formatFloatPoint(result, degits) {
  const numParse = Number.parseFloat(result);
  if (isNaN(numParse)) return result;
  return Number(numParse.toFixed(degits || 0));
}

export function checkResultTest(result, range) {
  const numParse = Number.parseFloat(result);

  if (isNaN(numParse) || !range) return false;

  const arrRage = range.split('-');

  if (
    Number.parseFloat(arrRage[0]) > numParse ||
    Number.parseFloat(arrRage[1]) < numParse
  ) {
    return true;
  }

  return false;
}
