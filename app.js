// Consts
const timerCont = document.querySelector("#TIMER-CONTAINER");
const schedCont = document.querySelector("#SCHEDULE-CONTAINER")
const landSect = document.querySelector("#LANDING-SECTION")
const timerInput = document.querySelectorAll(".timerinput");
let prev_s_input;
let prev_m_input;
let day

const resetButton = document.querySelector("#RESET-BTN");
const startstopButton = document.querySelector("#STARTSTOP-BTN");
const pauseButton = document.querySelector("#PAUSE-BTN");
const sschedButton = document.querySelector("#SHOW-SCHEDULE-BTN");

const schedBlock = document.querySelectorAll(".scheduleblock");

const mon = schedBlock[0].cloneNode(true)
const tue = schedBlock[1].cloneNode(true)
const wed = schedBlock[2].cloneNode(true)
const thu = schedBlock[3].cloneNode(true)
const fri = schedBlock[4].cloneNode(true)

// Date Obtainer
document.addEventListener("DOMContentLoaded", () => {
    // today = new Date();
    // day = today.toDateString().split(" ")
    // console.log(day[0]);
    day = "Wed"
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
resetButton.addEventListener("click", () => {
    const MINS = document.querySelector("#MINUTES");
    const SECS = document.querySelector("#SECONDS");

    MINS.value = 10;
    SECS.value = "00";
});

sschedButton.addEventListener("click", async () => {
    sschedButton.children[0].classList.toggle("spin");

    const first = timerCont.getBoundingClientRect()

    schedCont.classList.toggle("hidden");

    if (schedCont.classList.contains("hidden")) {
        schedCont.style.pointerEvents = "none"

        const parentRect = landSect.getBoundingClientRect();
        const childRect = schedCont.getBoundingClientRect();

        const reltop = childRect.top - parentRect.top
        const relleft = childRect.left - parentRect.left

        schedCont.style.width = `${childRect.width}px`;
        schedCont.style.height = `${childRect.height}px`;

        schedCont.style.top = `${reltop}px`;
        schedCont.style.left = `${relleft}px`;

        schedCont.style.position = "absolute"
    } else {
        schedCont.style.pointerEvents = "all"
        schedCont.style.position = "static"
    };

    if (day == "Mon") {
        mon.classList.add("side-sched")
        schedCont.appendChild(mon)
    } else if (day == "Tue") {
        tue.classList.add("side-sched")
        schedCont.appendChild(tue)
    } else if (day == "Wed") {
        wed.classList.add("side-sched")
        schedCont.appendChild(wed)
    } else if (day == "Thu") {
        thu.classList.add("side-sched")
        schedCont.appendChild(thu)
    } else if (day == "Fri") {
        fri.classList.add("side-sched")
        schedCont.appendChild(fri)
    };

    const last = timerCont.getBoundingClientRect();

    const deltaX = first.left - last.left ;
    const deltaY = first.top - last.top;

    const timerContPosAnim = timerCont.animate([{
        transformOrigin: "top left",
        transform: `
            translate(${deltaX}px, ${deltaY}px)
        `
    }, {
        transformOrigin: "top left",
        transform: "none"
    }], {
        duration: 1000,
        easing: "ease"
    });
});