export function objectsAreSame(objOne, objTwo) {
  const objOneSize = Object.keys(objOne).length;
  const objTwoSize = Object.keys(objTwo).length;
  if (objOneSize !== objTwoSize) return false;

  for (const prop in objOne) {
    if (objOne[prop] !== objTwo[prop]) {
      return false
    }
  }

  return true;
}
