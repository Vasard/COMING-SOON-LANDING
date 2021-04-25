const countdown = document.querySelector('.countdown');

//Set Launch Date 
const launchDate = new Date('October 8, 2021 16:25:00').getTime();

//Update every second
const intvl = setInterval(() => {
    //Get todays date and time 
    const now = new Date().getTime();

    //Distance from now and the launch date 
    const distance = launchDate - now;

    //Time calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display result
    countdown.innerHTML = `
  <div>${days}<span>Days</span></div> 
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

    //If launch date is reached
    if (distance < 0) {
        //Stop countdown
        clearInterval(intvl);
        //Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }
}, 1000);