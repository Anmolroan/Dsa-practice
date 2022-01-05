function unitsConsumed(n) {
    //write code here
    var units =0;
  if(n>=80){
      n=n-80;
  }
  if(n>=150){
      n=n-150;
      units=units+50;
  }else{
      units =units+(n/3);
      n=0;
  }if(n>=500){
      n=n-500;
      units=units+100;
  }else{
      units = units+(n/5);
      n=0;
  }if(n>0){
      units =units+(n/10);
      n=0;
  }
  console.log(units)
}
unitsConsumed(230) 