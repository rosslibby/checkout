export const API = window.location.host.split(':')[0] === 'localhost'
  ? 'http://localhost:8080/api'
  : (window.location.host.split('.')[1] + '.' + window.location.host.split('.')[2]) === 'frvctl.dev'
    ? `https://frvctl.dev/api`
    : 'https://frvctl.com/api'
