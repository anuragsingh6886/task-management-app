export const deepCopy = (obj) => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(deepCopy);
    }

    const copied = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copied[key] = deepCopy(obj[key]);
      }
    }
    return copied;
};