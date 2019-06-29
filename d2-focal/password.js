function password(arg)
{
var joined = '';
for(var a = 0; a < arg.length; a++)
{
  letters = arg[a].split('');


  for(var i = 0; i < letters.length; i ++)
  {
    switch(letters[i])
    {
      case 'a': letters[i] = 4;
      break;
      case 'e': letters[i] = 3;
      break;
      case 'o': letters[i] = 0;
      break;
      case 'l': letters[i] = 1;
      default:
      break;
    }
  }

 joined += letters.join('') + " ";

}


  return joined;

}

var arg = process.argv;
arg.splice(0,2);

console.log(password(arg));

