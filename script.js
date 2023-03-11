// access to elements hour,minute, second and ampm by the use of getElementById method.
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
// create function 
function updateClock() {
  // get hour, minute, second by the use of Date( ) method.
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  //write a condition to change AM to PM.
  if (h > 12) {
    h = h - 12;
    ampm = "MP";
  }
  // set zero for hour, minute and second.
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
// add hour,minute,second and ampm to the page by the use of innerText property
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  // use setTimeout method to execute the function every second to change second automatically.
  setTimeout(() => {
    updateClock();
  }, 1000);
}
// call the function.
updateClock();
