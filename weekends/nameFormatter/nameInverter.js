const nameInverter = function(name) {
var hornorifics = "";
    if(name === undefined)
    {
        return TypeError;
    }
    if(name === '')
    {
        return '';
    }
    
   if(name.trim()=== "Dr." ||name.trim() === "Mr." ||name.trim() === "Mrs." ||name.trim() === "Ms." )
   {
       return '';
   }

   if(name.trim().split(' ')[0].includes('.'))
   {
       hornorifics = name.trim().split(' ')[0];
      var divided = name.trim().split(' ');
      divided.shift();
      
    
       return hornorifics + " " + divided.reverse().join(', ');
   }
   
    
   

    var inverted = name.trim().split(' ').reverse().join(', ');
   
    
    return inverted;
}

module.exports = nameInverter;