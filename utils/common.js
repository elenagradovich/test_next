export const removeObjOptions = (obj, key, handler) => {
  const objCopy = {...obj};
  delete objCopy[key];
  handler(objCopy);
}