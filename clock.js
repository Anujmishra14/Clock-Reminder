function realclocktime(){
    let First1element=document.querySelectorAll(".first1");
    let hour=First1element[0];
    let minutes=First1element[1];
    let Second=First1element[2];
    let newdate= new Date();
    let newhour= newdate.getHours();
    let newminute= newdate.getMinutes();
    let newseconds= newdate.getSeconds();
    hour.innerText =newhour;
    minutes.innerText = newminute;
    Second.innerText = newseconds;
   
    if(newhour<=12){
        document.querySelector(".second").innerText="AM"
      
    }
    else{
        document.querySelector(".second").innerText="PM"
    }
      
}
//   realclocktime();
  setInterval(realclocktime,1000);
//   setInterval((callbackfunction,timeinterval) => {
    
//   }, interval);
  