import letConstData from "./let-const-data.js";
{
    [1,2,4].forEach((val,index)=>{
        console.log(val,index)
    })
    setTimeout(() => {
        console.log(letConstData)
    }, 100);
    console.log(letConstData)
}