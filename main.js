
let sec_hand = document.getElementById('sec-hand')
let min_hand = document.getElementById('min-hand')
let hour_hand = document.getElementById('hour-hand')
let digi_time = document.getElementById('digital-clk')

const time_rotation = () => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hour_deg = ((hour / 12) * 360)
    let min_deg = ((min / 60) * 360)
    let sec_deg = ((sec / 60) * 360)

    sec_hand.style.transform = `rotate(${sec_deg}deg)`
    min_hand.style.transform = `rotate(${min_deg}deg)`
    hour_hand.style.transform = `rotate(${hour_deg}deg)`
}
setInterval(() => time_rotation(), 1000);

const time_write = () => {
    const date = new Date();
    digi_time.innerHTML = `${date} `;
}
setInterval(() => time_write(), 1000);