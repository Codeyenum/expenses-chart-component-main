let bars = document.querySelectorAll(".bar");
let barColumns = document.querySelectorAll(".bar_column");
let balanceBox = document.querySelectorAll(".balance");

for (let bar of bars) {
   bar.addEventListener("mouseenter", () => {
      bar.previousElementSibling.classList.remove("hide");
      let barHeight = bar.clientHeight;
      bar.previousElementSibling.style.bottom = `${barHeight + 50}px`;
      let day = bar.classList[1];
      // console.log(day);
      let getJsonData = async () => {
         let resp = await fetch("./data.json");
         let data = await resp.json();
         return data
      }
      
      getJsonData()
         .then((dataArray) => {            
            for (let dataObject of dataArray) {
               if (dataObject.day === day) {
                  // console.log(dataObject.amount)
                  bar.previousElementSibling.firstElementChild.innerText = dataObject.amount;
               }
            }
         })
   })
}

for (let bar of bars) {
   bar.addEventListener("click", () => {
      bar.previousElementSibling.classList.remove("hide");
      let barHeight = bar.clientHeight;
      bar.previousElementSibling.style.bottom = `${barHeight + 50}px`;
   })
}

for (let bar of bars) {
   bar.addEventListener("mouseleave", () => {
      bar.previousElementSibling.classList.add("hide");
      let barHeight = bar.clientHeight;
      bar.previousElementSibling.style.bottom = `${barHeight + 50}px`;

   })
}


// console.dir(bars);

// fetch("./data.json")
//    .then((resp) => {
//       console.log("RESPONSE:", resp)
//       return resp.json();      
//    })
//    .then((data) => {
//       let spendingData = data;
//       console.log(spendingData);
//    })
//    .catch((e) => {
//       console.log("error", e);
//    })

// let getJsonData = async () => {
//    let resp = await fetch("./data.json");
//    let data = await resp.json();
//    return data
// }

// getJsonData()
//    .then((dataArray) => {
//       console.log(dataArray);
//       for (let dataObject in dataArray) {
//          if (dataObject.day === day) {
//             console.log(day)
//          }
//       }
//    })



















// if (window.innerWidth < 960) {
//    for (let bar of bars) {
//       bar.addEventListener("click", () => {
//          bar.previousElementSibling.classList.toggle("hide");
//          let barHeight = bar.clientHeight;
//          bar.previousElementSibling.style.bottom = `${barHeight + 50}px`;
//       })
//    }
// }
