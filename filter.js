let arr = [1,2,3,4];

let ans = arr.filter((val)=>{
    if(val>=3){
        return val;
    }
});

console.log(ans);