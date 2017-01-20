function range(start,end,inc){
  
  if(start > end){
    var swap = start;
    start = end;
    end = swap;
  }
  
  if(inc === undefined){
      inc = 0;
  }
  
  var retorno = [];
  for(i=start;i<=end;i++){
       retorno.push(i+inc);
  }
  
  return retorno;
}

function sum(numbers){
  
  var retorno = 0;
  
  for(i=0;i<=numbers.length-1;i++){
      retorno = retorno + numbers[i];
 
  }
  
  return retorno;
}

console.log(sum(range(5,2,-1)))