const assertArraysEqual = function(array1, array2)
{
  if(array1.length === array2.length)
  {
    for (var i = 0; i < array1.length; i ++)
    {
      if(array1[i] !== array2[i])
      {
        console.log("Arrays are not the same");
        return false;
      }
    }

  }
  else
  {
    console.log("arrays not same length, therefore not the same");
    return false;
  }
console.log("arrays are the same!");
return true;


}

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
      
  }


  const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    for(letters of sentence)
    {
        results[letters] = [];

    }
    
    for(var b in results)
    {
        for(var a = 0; a < sentence.length; a++)
        {
            if(b === sentence[a])
            {
                results[b].push(a);
            }
        }
    }
    


    return results;
  };

  assertArraysEqual(letterPositions("hello").e, [1]);