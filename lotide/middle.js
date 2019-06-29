
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




const middle = function(array1)
{
  if(array1.length <= 2)
  {
    console.log("no middle");
    return [];

  }else if(array1.length % 2 === 0)
  {
    console.log("even");
    var middle = [array1[(array1.length)/2 -1], array1[(array1.length/2)]];

    return middle;





  }else
  {
    console.log("odd");
    var oddMiddle = [Math.floor((array1.length)/2) +1];
    return oddMiddle;
  }



}
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [])
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]) )// => [3])
console.log(middle([1, 2, 3, 4]) );// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]);