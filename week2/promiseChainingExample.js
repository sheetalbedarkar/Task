new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
    console.log("result in first promise resolve :: ",result)
      return result * 2;
  
  }).then(function(result) { // (***)
    console.log("result in second promise resolve :: ",result)
      return result * 2;
  
  }).then(function(result) {
    console.log("result in third promise resolve :: ",result)
      return result * 2;
  
  });