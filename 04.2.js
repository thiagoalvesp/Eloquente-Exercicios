function reverseArray(arrayForReserve){
 
    var retorno = [];
  
    for(i=arrayForReserve.length-1;i>=0;i--){
          retorno.push(arrayForReserve[i]);
    }
    
    return retorno;
}

var a = ['A','B','C']
console.log(reverseArray(a));

function reverseArrayInPlace(arrayForReserve){
  
  var len = Math.floor(arrayForReserve.length/2);
  
  for(i=0;i<=len;i++){
      var swap = arrayForReserve[i];
      arrayForReserve[i] = arrayForReserve[arrayForReserve.length-1-i]
      arrayForReserve[arrayForReserve.length-1-i] = swap;
  }

}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
