function calculateWatchTime( times ) {
  let sum=0;
for(const num of times){
if( typeof num !=='number'){
    return 'Invalid'
} 
else if(typeof num ==='number'){
  sum=sum+num;
  let m=sum/60;
   
  let second=sum%60;
   
  let minit=parseInt(m)%60;
 
  let hour=parseInt(m)/60;
   result='hour: '+parseInt(hour)+', '+'minit: '+minit+', '+'second: '+second;
  }   
  
}  
return result;
}  
  const mone= []
  ;
  const ashOut=calculateWatchTime(mone);
  console.log(ashOut);   