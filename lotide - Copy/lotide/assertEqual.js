const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
  } else {
    console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
  }
    
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);