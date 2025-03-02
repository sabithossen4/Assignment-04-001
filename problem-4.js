function isBestFriend( f1 , f2 ) {

  if(typeof f1==='object' && typeof f2==='object'){
  
  if(f1.roll===f2.bestFriend&& f1.bestFriend===f2.roll){
  
  return true;
  
  }
  
  else{
  
  return false;
  
  }
  
  
  }
  
  else{
  
  return "Invalid";
  
  }
  
  }





const ashOut=isBestFriend(
  { name: "hashem", roll: 1 , bestFriend: 1},
  { name: "kashem" , roll: 1, bestFriend: 1 }
  );
console.log(ashOut);
