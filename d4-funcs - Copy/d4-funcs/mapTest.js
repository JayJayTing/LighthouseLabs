const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];


let a = lighthouses.map((word) => {
    return word.length;
})

console.log(a);
// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]