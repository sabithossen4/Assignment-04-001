function validEmail( email ) {

  if(typeof email !=='string'){
  
  return "Invalid";
  
  }
  
  const firstch= email[0];
  
  if(firstch==='-'||firstch==='+'||firstch==='.'||firstch==='@'||firstch==='_'||email.includes(' ')){
  
  return false;
  
  }
  
  else if(email.includes('@') && email.endsWith('.com')&& typeof email==='string'){
  
  return true;
  
  }
  
  else if(typeof email === 'string'){
  
  return false;
  
  }
  
  else{
  
  return "Invalid";
  
  }
  
  }






const mone=  true          ;
const ashOut=validEmail(mone);
console.log(ashOut);
// || typeof email==='string'


