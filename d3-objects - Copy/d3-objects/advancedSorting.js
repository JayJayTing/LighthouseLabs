const students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 },
    {id: 5, name: "bobobo", age: 20},
    {id: 5, name: "bobobo", age: 30},
    {id: 5, name: "bobobo", age: 40}
  ];



  
function customComparator(a, b)
{
    

    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if(a.name === b.name)
    {
        if(a.age > b.age)
        {
            return -1;
        }
        if(a.age< b.age)
        {
            return 1;
        }
        return 0;
    }



    if(nameA < nameB)
    {
        return -1;
    }

    if(nameA> nameB)
    {
        return 1
    }



    return 0;
}





console.log(students.sort(customComparator));