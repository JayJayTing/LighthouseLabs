const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
          
  };
    
  const eqArrays = function(array1, array2) {
    if (array1.length === array2.length) {
      for (let i = 0; i < array1.length; i ++) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
      
    } else {
      return false;
    }
      
    return true;
      
      
  };
    
  const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }else{

        for(let key in object1)
        {
            if((Array.isArray(object1[key]) && Array.isArray(object2[key])))
            {
                if(eqArrays(object1[key], object2[key])=== false)
                {
                    return false
                }
                
            } else {
                if (object1[key] !== object2[key]) {
            return false;
          }
            }
        }
        

        return true;

    }
}

      
  
  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
         
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  
  
  };
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  console.log(assertObjectsEqual(ab, ba)); // => true
    
  const abc = { a: "1", b: "2", c: "3" };
  console.log(assertObjectsEqual(ab, abc)); // => false
    
  assertEqual(assertObjectsEqual(ab, ba), true);
  assertEqual(assertObjectsEqual(ab, abc), false);