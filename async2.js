// setInterval and clearInterval
let fun1=(arg)=>{
    console.log(arg,Date.now());
}

let var1 = setInterval(fun1,2000,'Hello! apurv');

document.querySelector(".stop").addEventListener('click',()=>{
    clearInterval(var1);
    console.log("stop!!");
})
