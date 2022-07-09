let bars = document.querySelectorAll(".bar");

for (let bar of bars) {
   bar.addEventListener("mouseenter", () => {
      let barHeight = bar.clientHeight;  
      let balanceBox = bar.previousElementSibling;    
      let day = bar.classList[1];

      balanceBox.classList.remove("hide");
      balanceBox.style.bottom = `${barHeight + 50}px`;
      
      let getBalanceData = async () => {
         let resp = await fetch("./data.json");
         let dataArray = await resp.json();         

         for (let dataObject of dataArray) {
            if (dataObject.day === day) {               
               balanceBox.firstElementChild.innerText = dataObject.amount;               
            }
         }         
      } 
      getBalanceData()
   })
}

for (let bar of bars) {
   bar.addEventListener("mouseleave", () => {
      bar.previousElementSibling.classList.add("hide");
   })
}

