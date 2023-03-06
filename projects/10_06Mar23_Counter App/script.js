//elements from the html
let decrementBtn=document.getElementById("decrement");
let incrementBtn=document.getElementById("increment");
let displayVlaue=document.getElementById("displayValue");
let resetBtn=document.getElementById("reset");


// decrement button
decrementBtn.addEventListener("click",()=>{
    let valueInDisplay=Number(displayVlaue.innerText);
    if(valueInDisplay>0){
        displayVlaue.innerText=valueInDisplay-1;
    }
    else{
        alert("Negative number is not allow");
    }
});

// increment button
incrementBtn.addEventListener("click",()=>{
    let valueInDisplay=Number(displayVlaue.innerText);
    if(valueInDisplay>=10){
            alert("More than 10 not allow");
    }
    else{
        displayVlaue.innerText=valueInDisplay+1;
    }
});


// reset button
resetBtn.addEventListener("click",()=>{
    let valueInDisplay=Number(displayVlaue.innerText);
   displayVlaue.innerText=0;
});
