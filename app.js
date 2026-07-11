// Consts
const timerCont = document.querySelector("#TIMER-CONTAINER");
const timerInput = document.querySelectorAll(".timerinput");
let prev_s_input;
let prev_m_input;
let day

const resetButton = document.querySelector("#RESET-BTN");
const startstopButton = document.querySelector("#STARTSTOP-BTN");
const pauseButton = document.querySelector("#PAUSE-BTN");

const sschedButton = document.querySelector("#SHOW-SCHEDULE-BTN");

// Date Obtainer
document.addEventListener("DOMContentLoaded", () => {
    today = new Date();
    day = today.toDateString().split(" ")
    console.log(day[0]);
});

// Timer Input Functionalities
timerInput.forEach((inputs) => {
    inputs.addEventListener("focus", (event) => {
        inputs.select()
        if (event.target.id == "MINUTES") {
            prev_m_input = event.target.value
        } else if (event.target.id = "SECONDS") {
            prev_s_input = event.target.value
        }
    })
});

timerInput.forEach((inputs) => {
    inputs.addEventListener("change", (event) => {  
        const val_len = event.target.value.length

        if (event.target.id == "MINUTES") {
            if (event.target.value > 90) {
                event.target.value = prev_m_input;
            } else if (val_len == 1 && event.target.value <= 90) {
                event.target.value = "0" + event.target.value
            } else if (val_len >= 1 && event.target.value <= 90) {
                event.target.value = event.target.value; 
            };
        } else if (event.target.id == "SECONDS") {
            if (event.target.value >= 60) {
                event.target.value = prev_s_input;
            } else if (val_len == 1 && event.target.value < 60) {
                event.target.value = "0" + event.target.value
            } else if (val_len >= 1 && event.target.value < 60) {
                event.target.value = event.target.value; 
            };
        }
        
        event.target.blur()
    });
});
    
// Button Functionalities
resetButton.addEventListener("click", (event) => {
    const MINS = document.querySelector("#MINUTES");
    const SECS = document.querySelector("#SECONDS");

    MINS.value = 10;
    SECS.value = "00"
});

