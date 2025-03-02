function cashOut(money){

  if( typeof money==='number'&& money===Math.abs(money)){
  
  return money* 1.75 /100;
  
  }
  
  else{
  
  return "Invalid";
  
  }
  
  }




const mone="101";
const ashOut=cashOut(mone);
console.log(ashOut);
