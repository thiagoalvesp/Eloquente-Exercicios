function isEven(valor){
  
  if(valor < 0){
    valor = -valor;
  }
  
  if(valor === 0){
    return true;
  }
  if(valor === 1){
    return false;
  }
  
  return isEven(valor-2);
  
}


console.log(isEven(50));