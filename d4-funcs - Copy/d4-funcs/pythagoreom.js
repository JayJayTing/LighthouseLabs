const input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  const result = input.map(obj => obj["z"] = Math.sqrt( obj["x"]* obj["x"] + obj["y"]* obj["y"]));
  
  console.log(input);