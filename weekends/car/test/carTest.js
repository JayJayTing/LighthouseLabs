const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() {

    it("should return false if it's a hatchback", function() {
      const car = {
        type: "hatchback"
      };
      const shouldBuy = shouldBuyCar(car);
     return  assert.isFalse(shouldBuy);
    });
  
    it("should return true when color is pink", function()
    {
        const car = {
            color: "pink"
        }
       return  assert.isTrue(shouldBuyCar(car));
    })

    it("if its hatchback then it should return false", function()
    {
          const car = {
            type: "hatchback"
        }
        return assert.isFalse(shouldBuyCar(car));
    })
    it("should return false when the car is a harchback and pink", function()
    {
        const car = {
            type: "hatchback",
            color: "pink"
        }

        return assert.isFalse(shouldBuyCar(car));
    })
    
    it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function()
    {
        const car = {
            litresPer100km: 6,
            price: 4000
        };

        return assert.isTrue(shouldBuyCar(car));

    })
    it("should return true when the car has 11 litres/100km and is under or equal to 5000", function()
    {
        const car = {
            litresPer100km: 11,
            price: 4000
        };

        return assert.isTrue(shouldBuyCar(car));

    })
    it("should return false when the car has 6 litres/100km and is over 5000", function()
    {
        const car = {
            litresPer100km: 6,
            price: 5500
        };

        return assert.isFalse(shouldBuyCar(car));

    })
    it("should return false when the car has 11 liters per 100 and is over 5k", function()
    {
        const car = {
            litresPer100km: 11,
            price: 6000
        };

        return assert.isFalse(shouldBuyCar(car));

    })
    it("should return false when the car has 5 liters per 100km and is under of equal to 5k", function()
    {
        const car = {
            litresPer100km: 5,
            price: 4000
        };

        return assert.isFalse(shouldBuyCar(car));

    })
    it("should return false when the car has 12 liters per 100km and is under of equal to 5k", function()
    {
        const car = {
            litresPer100km: 12,
            price: 4400
        };

        return assert.isFalse(shouldBuyCar(car));

    })
    it("should return false when there are no details about the car", function()
    {
        const car = {
         
        };

        return assert.isFalse(shouldBuyCar(car));

    })
  });

  //random things to add