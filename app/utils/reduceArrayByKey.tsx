const reduceArrayByKey = (array:any, key:any) => {
    return array.reduce((acc:any, item:any) => {
      // Get the key's value from the current item
      const keyValue = item[key];
  
      acc[keyValue] = item;
  
      return acc;
    }, {});
  }

  export default reduceArrayByKey;