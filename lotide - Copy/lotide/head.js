const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
      
  };
  


  const head = function(array)
  {
      return array[0];
  }

  assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");