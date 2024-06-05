const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
let numberDiv = document.querySelector(".number");


function makeItCount() {
    decreaseBtn.addEventListener("click", () => {
      numberDiv.innerText--;
      changeColor();
      console.log("yes");
    });

    resetBtn.addEventListener("click", () => {
      numberDiv.innerText = 0;
      changeColor();
      console.log("yes");
    });

    increaseBtn.addEventListener("click", () => {
      numberDiv.innerText++;
      changeColor();
      console.log("yes");
    });

    
}
makeItCount();


function changeColor() {
    let number = numberDiv.innerText;
    if (number < 0) {
        numberDiv.style.color = "red";
    }
    else if (number > 0) {
        numberDiv.style.color = "green";
    }
    else if (number == 0) {
        numberDiv.style.color = "black";
    }
    else {
        console.log("nope");
    }
}
