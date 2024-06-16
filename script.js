const num = document.querySelector(".number");
const decrement = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increment = document.querySelector("#increase");

decrement.addEventListener("click", ()=>{
    let value = parseInt(num.textContent);
    value -= 1;
    num.innerText = value;
});

reset.addEventListener("click", ()=>{
    let value = parseInt(num.textContent);
    value = 0;
    num.innerText = value;
});

increment.addEventListener("click", ()=>{
    let value = parseInt(num.textContent);
    value += 1;
    num.innerText = value;
});


