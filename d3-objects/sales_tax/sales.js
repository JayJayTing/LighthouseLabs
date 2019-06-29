
const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
  const companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];


const calculateSalesTax = function(salesData, taxRates) {
    var taxResults = {};
    //created object for tax results
    for(var a = 0; a< salesData.length; a++)
    {
          taxResults[salesData[a]["name"]] = {
              totalSales: 0,
              totalTaxes: 0
          };  
    }
    
    for(var b = 0; b< salesData.length; b++)
    {
        var sales = 0;
        var tax = 0;

        for(var c = 0; c < salesData[b]["sales"].length; c++)
        {
            
            sales += salesData[b]["sales"][c];
        }
        
        tax += sales * taxRates[salesData[b]["province"]];
        
    

            

        taxResults[salesData[b]["name"]]["totalTaxes"] += tax;
        taxResults[salesData[b]["name"]]["totalSales"] += sales;



    }


    //console.log(salesData[0]["name"]);
    console.log(taxResults);

  }
  calculateSalesTax(companySalesData, salesTaxRates);