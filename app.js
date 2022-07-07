let bars = document.querySelectorAll(".bar");
let barColumns = document.querySelectorAll(".bar_column");
let balanceBox = document.querySelectorAll(".balance");

for (let bar of bars) {   
   bar.addEventListener("click", "mouseenter", () => {
      bar.previousElementSibling.classList.toggle("hide");
      let barHeight = bar.clientHeight;
      bar.previousElementSibling.style.bottom = `${barHeight + 50}px`;
   })
}

for (let bar of bars) {   
   bar.addEventListener("mouseleave", () => {
      bar.previousElementSibling.classList.toggle("hide");      
   })
}

