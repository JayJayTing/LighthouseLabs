const args = process.argv;




args.splice(0,2);



console.log(Number(args[0]) + Number(args[1]));