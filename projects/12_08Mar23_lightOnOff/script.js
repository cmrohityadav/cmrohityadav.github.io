let btn=document.getElementById("btn");
let bulb=document.getElementById("bulb");
console.log(btn.textContent);

btn.addEventListener("click",onclickBtn);
function onclickBtn(element){
    if(btn.textContent.includes("On")){
        bulb.src="./assets/Light-Bulb-On.jpg";
        btn.textContent="Turn Off";
        btn.style.backgroundColor="red";

    }else{
        bulb.src="./assets/Light-Bulb-Off.jpg";
        btn.textContent="Turn On"; 
        btn.style.backgroundColor="#6bf36b";
        
    }
}
