const time=document.getElementById('time');
const Today=document.getElementById('date');
const Inputtimezone=document.getElementById('inputtimezone');
let alaramtime=null;
function setAlarm(){
   alaramtime=document.getElementById('alarmTime').value;
    const alarmStatus=document.getElementById('alarmStatus');
    alarmStatus.innerHTML=`Alarm set for ${alaramtime}`;

}
function checkAlaram(currentTime){
    if(alaramtime && currentTime===alaramtime){
        alert(`You Set an alarm for ${alaramtime}`);
        alaramtime=null;
        document.getElementById('alarmStatus').innerHTML='';
    }
}

function upadateClock(){
    const Now=new Date();
    const timeFormate=document.getElementById('formate');
    ishours12=timeFormate.value==='12';
const selectedZone = Inputtimezone.value || 'Asia/Kolkata';
const formattedTime=Now.toLocaleTimeString('en-US',{
    timeZone:selectedZone,
    hour12:ishours12,
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
});
const formattedDate=Now.toLocaleDateString('en-US',{timeZone:selectedZone,weekday:'long',month:'long',day:'numeric',year:'numeric'});
time.innerHTML=formattedTime;
Today.innerHTML=formattedDate;
const checkHHMM=Now.toLocaleTimeString('en-GB',{
    timeZone:selectedZone,
    hour12:false,
    hour:'2-digit',
    minute:'2-digit'
})
checkAlaram(checkHHMM);
}

setInterval(upadateClock,1000);
upadateClock();
document.getElementById('formate').addEventListener('change',upadateClock);
document.getElementById('inputtimezone').addEventListener('input',upadateClock);
