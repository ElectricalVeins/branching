const totalUsers = 10;
const greetings = 'hello';
const farewell = 'goodbye';

const welcomeMsg = getAlertString(greetings);
const goodbyeMsg = getAlertString(farewell);

// FD declaration
function getAlertString(aloha) {
  return `${aloha}, ${totalUsers} online`;
}

// FE expression
const func = function () {
  return 1;
}

alert(getAlertString);
