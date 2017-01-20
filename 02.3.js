//8 largura
//8 altura

for(var i=1;i<=8;i++){
	linha = "";
	for(var j=1;j<=8;j++){
	   if(i%2===0){
          if(j%2===0){
            linha += "#"
          }else{
            linha += " "
          }
	   }else{
          if(j%2===0){
            linha += " "
          }else{
            linha += "#"
          } 
	   }
	}
	console.log(linha);		
}

