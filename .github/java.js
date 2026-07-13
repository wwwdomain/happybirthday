//const days=document.querySelector("#days");
//const hours=document.querySelector("#hours");
//const minutes=document.querySelector("#minutes");
//const seconds=document.querySelector("#seconds");
function updatetime(){
const currentYear=new Date().getFullYear();
const newYear=new Date(`july 14 ${currentYear} 00:00:00`);
const currentdate=new Date();
const diff=newYear-currentdate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
document.getElementById("days").innerHTML=d<10?"0"+d:d;
document.getElementById("hours").innerHTML=h<10?"0"+h:h;
document.getElementById("minutes").innerHTML=m<10?"0"+m:m;
document.getElementById("seconds").innerHTML=s<10?"0"+s:s;

}
setInterval(updatetime,100);
h1.innerHTML="happy birthday";

/*1000ms =1s
60s=1m;
60m=1hr
24hrs=1day;
*/