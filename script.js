let displayBox = document.querySelector(".display");

function showdisplay(event){
    const x = event.target.innerText ;
    if (displayBox.innerText == 0){
        return displayBox.innerText = x ;
    }else{
        return displayBox.innerText += x
    }
    
}

function calculate(){
    let result = displayBox.innerHTML;
    displayBox.innerText = eval(result)
};

function clearLast(){
    let text = displayBox.innerText;
    if (text.length === 1){
        displayBox.innerHTML = 0;
    }else{
        displayBox.innerHTML = text.substring(0 , text.length-1);
    }

}

function clearAll(){

    displayBox.innerHTML = 0;
}


document.querySelector(".calculate").addEventListener("click" , calculate);
document.querySelector(".clear-last").addEventListener("click" , clearLast);
document.querySelector(".all-clear").addEventListener("click" , clearAll);



let list = document.querySelectorAll(".show-display")
list.forEach(item => {
    item.addEventListener("click" , showdisplay);
})