// Set the date we're counting down to
const countDownDate = new Date("3 1, 2020 15:00:00").getTime();

// Update the count down every 1 second
const myInterval = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(myInterval);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
