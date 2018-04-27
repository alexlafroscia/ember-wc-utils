export default function getEventNameFromListenerName(key) {
  const withoutOn = key.replace(/^on/, '');

  return withoutOn.charAt(0).toLowerCase() + withoutOn.slice(1);
}
