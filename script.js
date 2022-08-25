const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hoursHand = document.querySelector(".hours-hand")
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDeg}deg)`
    secondHand.style.background = "red"
    secondHand.style.border = `0.2px solid`
    const minutes = now.getMinutes();
    const minDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    minuteHand.style.background = "black"
    minuteHand.style.border = `0.8px solid`
    const hour = now.getHours;
    const hourDeg = ((hour / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${ hourDeg}deg)`;
};

setInterval(setDate, 1000);