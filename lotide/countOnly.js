const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`These two arguemnts are the same: ${actual} vs ${expected}`);
    } else {
      console.log(`These two arguemnts are NOT the same: ${actual} vs ${expected}`);
    }
      
  };
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

const countOnly = function(allItems, itemsToCount)
{
    const createdObject = {};
    for(var items in itemsToCount)
    {
        if(itemsToCount[items])
        createdObject[items] = 0;
    }
    
    for(var a in createdObject)
    {
        for(var b in allItems)
        {
            
            if(a === allItems[b])
            {
                createdObject[a] ++;
            }
        }
    }
    console.log(createdObject);
return createdObject; 
}

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 0);
assertEqual(result1["Fang"], 2);