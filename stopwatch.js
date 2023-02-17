window.onload =
  function(){
  //---vars to access html elements ---//
  let seconds = 00;
  let tens = 00;
  let mins = 00;
  let hours = 00;
   
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMins = document.getElementById("minutes");
  let appendHours = document.getAnimations("hours");
  
  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  let Interval;
  
  //---functions to start, stop, reset ---//
  buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
  }

  buttonStop.onclick = function(){
    clearInterval(Interval);
  }

  buttonReset.onclick = function(){
    clearInterval(Interval);
    tens= "00";
    seconds = "00";
    mins = "00";
    hours = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMins.innerHTML = mins;
  }
  
  function startTimer(){
    tens++;
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if(tens > 9){
      appendTens.innerHTML = tens;
    }
    
    if(tens> 99){
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if(seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
         seconds = 0; 

        appendSeconds.innerHTML = "0" + 0;

        appendMins.innerHTML = "0" + mins;
  
    }

    if (mins > 9) {
      appendMins.innerHTML = mins;
    }

    if (mins > 59) {
      hours++;
      mins = 0; 

     appendMins.innerHTML = "0" + mins;
     appendHours.innerHTML = "0" + hours;

 }

 if (hours > 9) {

    appendHours.innerHTML = hours;

 }
  }
  
};
