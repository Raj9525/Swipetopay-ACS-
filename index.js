document.addEventListener("contextmenu", (event) => event.preventDefault());
//resend timer
window.onload = countdown2();
var mins2 = 5;
var secs2 = mins2 * 60;

function countdown2() {
  setTimeout("Decrement2()", 60);
  mins2 = 1;
  secs2 = mins2 * 60;
}

function Decrement2() {
  if (document.getElementById) {
    minutes2 = document.getElementById("minutes2");
    seconds2 = document.getElementById("seconds2");
    if (seconds2 < 59) {
      seconds2.innerHTML = secs2;
    } else {
      minutes2.innerHTML = getminutes2();
      seconds2.innerHTML = getseconds2();
    }

    if (mins2 < 0) {
      minutes2.innerHTML = 0;
      seconds2.innerHTML = 0;
    } else {
      secs2--;
      setTimeout("Decrement2()", 1000);
    }
  }
}

function getminutes2() {
  mins2 = Math.floor(secs2 / 60);
  return mins2;
}

function getseconds2() {
  return secs2 - Math.round(mins2 * 60);
}
