function diceRoller(number)
{


  var randomNumber = [];


  for(var i = 0; i < number; i++)
  {
    randomNumber.push(Math.floor(Math.random() * 6)+1);
  }
return "rolled " + number + " times: " + randomNumber.join(",");





}


var args = process.argv;
args.splice(0, 2);

console.log(diceRoller(Number(args)));