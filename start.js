const chair = 'chair';
let chairLegs = 4;

function checkChair(chair, chairLegs) {
  if (!chair) {
    return 'Chair is absent';
  }

  if (chairLegs === 4 || chairLegs === 3) {
    return 'Chair is working';
  }

  if (chairLegs < 3) {
    return 'Chair is broken';
  }

  if (chairLegs > 4) {
    return '??? WTF ???';
  }
}

console.log(`YOUR CHAIR IS IN CONDITION: ${checkChair(chair, chairLegs)}`);
