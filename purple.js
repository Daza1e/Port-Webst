const inp = document.getElementById("comm-in");

let curr = "";

document.addEventListener("keydown", (e)=>{
    
    if (e.key === "Backspace"){
        curr = curr.slice(0, -1);
    }
    else if(e.key.length === 1){
        curr += e.key;
    }
    
    inp.textContent = curr;
})