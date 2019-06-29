
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

const without = function(array1, exclude)
{

  for(var a = 0 ; a< exclude.length; a++)
  {
    for(var b = 0; b< array1.length; b++)
    {
      if(array1[b] === exclude[a])
      {
        array1.splice(b,1);
      }
    }
  }
      // console.log("getting rid of matching");
      // array1.splice(i, 1);
   return array1;
}


console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


