function electionResult( votes ) {
  if(Array.isArray(votes)){
  let mangocount = [];   
    let bananacount = [];      
    for(const vote of votes){
      if(vote==='mango'){
        mangocount.push(vote);
      }
    }     
    for(const vote of votes){
      if(vote==='banana'){
        bananacount.push(vote);
      }
    }      
    if(Array.isArray(votes)){  
    if(mangocount.length>bananacount.length){  
    return "Mango";  
    }  
    else if(bananacount.length>mangocount.length){  
    return "Banana"  
    }  
    else if(mangocount.length===bananacount.length){  
    return "Draw";  
    }  
    else{  
    return "Invalid";  
    }      
    }       
  }
  return "Invalid";
}




const mone=  {result: "mango , banana ,  mango"} ;
const ashOut=electionResult(mone);
console.log(ashOut);
// {result: "mango , banana ,  mango"}