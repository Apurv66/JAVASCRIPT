// setTimeout and clearTimeout

let fun1=()=>{
    document.querySelector("h1").innerHTML="Text was change";
}

let var1 = setTimeout(fun1,3000);

addEventListener('click',()=>{
    clearTimeout(var1);
    console.log("stop!!!");
})

