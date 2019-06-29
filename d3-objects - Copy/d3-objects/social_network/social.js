const data = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  };

  function mostPopular(dat) 
  {
      var list = {};
    for(var person in dat)
    {
        for(var record in dat[person]["follows"])
        {
            if(!list[dat[person]["follows"][record]])
            {
                list[dat[person]["follows"][record]] = 1;
                
            }else
            {
                list[dat[person]["follows"][record]]++;
                
            }

        }

    

    }

    var most = 0;

    for(var number in list)
    {
        if (list[number] > most)
        {
            most = list[number];
        }
    }
      //console.log(list);
      return most;
  }

  console.log("person with most follows has: " + mostPopular(data));
  function biggestFollower(dat)
  {
      var most = 0;
      var champ = '';
      
      for (var person in dat)
      {
          if(dat[person]["follows"].length > most)
          {
              most = dat[person]["follows"].length;
              champ = dat[person]["name"];
          }
          
      }
      console.log("most followers: " + champ + " with " + most);
      return champ;
  }
  

biggestFollower(data);

function printAll(dat)
{
    var list =  {};
    for(var person in dat)
    {
        if(!list[dat[person]["name"]])
        {
            list[dat[person]["name"]] = {
                following: [],
                beingFollowedBy: []
            };

            for(var iteration of dat[person]["follows"])
            {
                list[dat[person]["name"]].following.push(dat[iteration]["name"]);
            }

            for(var id in dat)
            {
                if(person != id && dat[id]['follows'].includes(person))
                {
                    list[dat[person]["name"]].beingFollowedBy.push(dat[id]["name"]);
                }
            }
            
             
        }


    }


    



    console.log(list);

    
}

    



  


printAll(data);



function unrequitedFollowers(dat)
    {
       var list = [];

        
    
        for(var id in dat)
        {
            for(var arr1 of dat[id]["follows"])
            {
                // arr1 = "f02"
                // if arr1 follows doesnt include id,
                // push id into list
               if(!dat[arr1]["follows"].includes(id))
               {
                list.push(dat[id]["name"]);
                break;
               }


                // for(var arr2 of dat[arr1]["follows"])
                // {
                    
                // }
            }
           
        }
        


        
        console.log(list);
    }

unrequitedFollowers(data);