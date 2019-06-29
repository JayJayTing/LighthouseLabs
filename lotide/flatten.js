const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
  
  };
  
  
  
  
  const eqArrays = function(array1, array2)
  {
    if(array1.length === array2.length)
    {
      for (var i = 0; i < array1.length; i ++)
      {
        if(array1[i] !== array2[i])
        {
          return false;
        }
      }
  
    }
    else
    {
      return false;
    }
  
  return true;
  
  
  }
  

  const flatten = function(array1)
  {
      //console.log("hi");
      var flattened = [];
    for(var a = 0; a < array1.length; a ++)
    {
        if(Array.isArray(array1[a]))
        {
            console.log(array1[a] + "is an array");
            for(var b = 0; b<array1[a].length; b ++)
            {
                flattened.push(array1[a][b]);
            }
        }else{
            flattened.push(array1[a]);
        }
    }

    return flattened;


  }

  console.log(flatten([1, 2, [3, 4], 5, [6]]));
  console.log(flatten([1, 2, [2, 3, 4, 3, 4, 3], 34, [3, 4, 5, 6], 54]));