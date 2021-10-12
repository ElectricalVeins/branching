const totalUsers = 10;
const greetings = 'hello';
const farewell = 'goodbye';

const welcomeMsg = getAlertString(greetings);
const goodbyeMsg = getAlertString(farewell);

function getAlertString(aloha) {
  return `${aloha}, ${totalUsers} online`;
}

alert(getAlertString);
