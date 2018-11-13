export class FlattenObject {

  //returns an array of objects with a pathname, and value parameters.
  static flatten (obj, path){
    let basePath = !!path ? path : 'objRoot';
    let flatObj = [];
    let keys = Object.keys(obj);

    for(let i in keys){
      let key = keys[i];

      // basePath = `${basePath}.${key}`;

      if(typeof obj[key] === "object" && !Array.isArray(obj[key])){

        flatObj.push({
          pathname: `${basePath}.${key}`,
          value: '__object'
        });

        let flatArr = FlattenObject.flatten(obj[key], `${basePath}.${key}.object`);

        //destructure to a new array and collect all objects from recursion array
        flatObj = [...flatObj, ...flatArr];

        flatObj.push({
          pathname: `${basePath}.${key}`,
          value: '__object-close'
        });
      }
      else if(typeof obj[key] === 'object' && Array.isArray(obj[key])){

        flatObj.push({
          pathname: `${basePath}.${key}`,
          value: '__array'
        });

        //check type of array objects. if object, do recursion.
        if(typeof obj[key][0] === 'object') {
          let flatArr = FlattenObject.flatten(obj[key][0], `${basePath}.${key}.array`);

          flatObj = [...flatObj, ...flatArr];
        }
        else {
          flatObj.push({
            pathname: `${basePath}.${key}.array`,
            value: obj[key][0]
          });
        }

        flatObj.push({
          pathname: `${basePath}.${key}`,
          value: `__array-close`
        });
      }
      else if(typeof obj[key] === 'string'){
        flatObj.push({
          pathname: `${basePath}.${key}`,
          value: obj[key].length > 50 ? `${obj[key].slice(0, 49)}...` : obj[key]
        });
      }
      else {
        flatObj.push({
          pathname: `${basePath}.${key}`,
          value: obj[key]
        });
      }
    }//end for in

    return flatObj;
  }//end flatten

}