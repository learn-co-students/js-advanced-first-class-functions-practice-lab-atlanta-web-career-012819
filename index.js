// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name)

    })
}

 function logDriversByHometown(drivers, hometown) {
    drivers.forEach(function(driver){
        if (driver.hometown === hometown){
            console.log(driver.name)
        }
    })
}
function driversByName(drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name);
    });
  }

function driversByRevenue(drivers){
   return drivers.slice().sort(function(driverOne, driverTwo){
        return driverOne.revenue - driverTwo.revenue
    })
}

function totalRevenue(drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0)
  }

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
  }