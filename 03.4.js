function countChar(s,c){
     
    var counter = 0;
  

    for(i=0;i<s.length;i++){
      
     if (s.charAt(i) == c){
         counter ++;
     }

    
    }
    
    return counter;
  
}


console.log(countChar('kakkerlak', 'k'))